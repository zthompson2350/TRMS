package com.revature.daoimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//import javax.servlet.http.HttpSession;

import com.revature.beans.Reimapp;
import com.revature.beans.TRForm;
import com.revature.dao.FormDao;
import com.revature.util.ConnFactory;

public class FormDaoImpl implements FormDao {

	public static ConnFactory cf = ConnFactory.getInstance();

	@Override
	public void submitForm(TRForm form) throws SQLException {
		System.out.println("IN SUBMITFORM");
		Connection conn = cf.getConnection();
		String sql = "{ CALL NEWFORM(?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		System.out.println("CallableStatement Prepared...");
		/*
		 * TODO: Get Employee Name -> Employee ID from session/remove Employee ID from
		 * HTML
		 */
		call.setInt(1, form.getEmployeeID());
		call.setDate(2, form.getStartDate());
		call.setDate(3, form.getEndDate());
		call.setString(4, form.getLocationCity());
		call.setString(5, form.getLocationState());
		call.setInt(6, form.getZipcode());
		call.setString(7, form.getCourseDescription());
		call.setInt(8, form.getCost());
		String gFormat = form.getgFormat();
		System.out.println("Setting gFormat " + gFormat);
		if(gFormat.equals("passfail")) {
			call.setInt(9, 0);
		} else if(gFormat.equals("seventyPassing")) {
			call.setInt(9, 1);
		} else if(gFormat.equals("eightyPassing")) {
			call.setInt(9, 2);
		}
		String tEvent = form.gettEvent();
		System.out.println("Setting tEvent " + tEvent);
		if (tEvent.equals("certification")) {
			call.setInt(10, 0);
		} else if (tEvent.equals("technicalTraining")) {
			call.setInt(10, 1);
		} else if (tEvent.equals("universityCourse")) {
			call.setInt(10, 2);
		} else if (tEvent.equals("certPrepClasses")) {
			call.setInt(10, 3);
		} else if (tEvent.equals("seminars")) {
			call.setInt(10, 4);
		} else if (tEvent.equals("other")) {
			call.setInt(10, 5);
		}
		System.out.println("Executing...");
		call.execute();
		System.out.println("Executed...");
	}

	public List<Reimapp> getFormList(String username) throws SQLException {
		List<Reimapp> formList = new ArrayList<Reimapp>();
		Connection conn = cf.getConnection();
		String sql = "select * from employee_form where username = ?";
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setString(1, username);
		ResultSet rs = ps.executeQuery();
		Reimapp f = null;
		while (rs.next()) {
			f = new Reimapp(rs.getString(1), rs.getString(2), rs.getString(3), rs.getDate(4), 
					rs.getDate(5), rs.getDate(6), rs.getString(7), rs.getString(8), 
					rs.getString(9), rs.getFloat(10), rs.getString(11));
			formList.add(f);
		}
		return formList;

	}// end getFormList
}
