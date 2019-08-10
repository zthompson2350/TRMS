package com.revature.daoimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.revature.beans.RegistrationForm;
import com.revature.dao.EmployeeDao;
import com.revature.util.ConnFactory;

public class EmployeeDaoImpl implements EmployeeDao {

	public static ConnFactory cf = ConnFactory.getInstance();
	
	@Override
	public void registerEmployee(RegistrationForm rf) throws SQLException
	{
		Connection conn = cf.getConnection();
		String sql = "{ call REGISTER(?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setString(1, rf.getfName());
		call.setString(2, rf.getlName());
		call.setString(3, rf.getEmail());
		call.setString(4, rf.getaStreet());
		call.setString(5, rf.getaCity());
		call.setString(6, rf.getaState());
		call.setInt(7, rf.getzCode());
		call.setString(8, rf.getUn());
		call.setString(9, rf.getPw());
		call.execute();
	}
	
	public String getEmail(int uid) throws SQLException
	{
		Connection conn = cf.getConnection();
		String sql = "SELECT EMAIL FROM EMPLOYEE WHERE EMPLOYEEID = ?";
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setInt(1, uid);
		ResultSet rs = ps.executeQuery();
		if(rs.next()) return rs.getString(1);
		return null;
	}
	
	public String getFirstName(int uid) throws SQLException
	{
		Connection conn = cf.getConnection();
		String sql = "SELECT FIRSTNAME FROM EMPLOYEE WHERE EMPLOYEEID = ?";
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setInt(1, uid);
		ResultSet rs = ps.executeQuery();
		if(rs.next()) return rs.getString(1);
		return null;
	}

	public String getLastName(int uid) throws SQLException
	{
		Connection conn = cf.getConnection();
		String sql = "SELECT LASTNAME FROM EMPLOYEE WHERE EMPLOYEEID = ?";
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setInt(1, uid);
		ResultSet rs = ps.executeQuery();
		if(rs.next()) return rs.getString(1);
		return null;
	}
}