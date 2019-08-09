package com.revature.daoimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

//import javax.servlet.http.HttpSession;

import com.revature.beans.TRForm;
import com.revature.dao.FormDao;
import com.revature.util.ConnFactory;

public class FormDaoImpl implements FormDao {

	public static ConnFactory cf = ConnFactory.getInstance();
	
	@Override
	public void submitForm(TRForm form) throws SQLException {
		Connection conn = cf.getConnection();
		String sql = "{ call REIM_APP(?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		/*
			TODO: Get Employee Name -> Employee ID from session/remove Employee ID from HTML
		*/
		call.setInt(1, form.getEmployeeID());
		call.setDate(2, form.getStartDate());
		call.setDate(3, form.getEndDate());
		call.setString(4, form.getLocationCity());
		call.setString(5, form.getLocationState());
		call.setInt(6, form.getZipcode());
		call.setString(7, form.getCourseDescription());
		call.setInt(8, form.getCost());
		call.setString(9, form.getgFormat());
		String tEvent = form.gettEvent();
		if(tEvent.equals("Certification 100%")) {
			call.setInt(10, 0);
		} else if(tEvent.equals("Technical Training 90%")) {
			call.setInt(10, 1);
		} else if(tEvent.equals("University Course 80%")) {
			call.setInt(10, 2);
		} else if(tEvent.equals("Certification Preparation Classes 75%")) {
			call.setInt(10, 3);
		} else if(tEvent.equals("Seminars 60%")) {
			call.setInt(10, 4);
		} else if(tEvent.equals("Other 30%")) {
			call.setInt(10, 5);
		}
		call.execute();
	}
}
