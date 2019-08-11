package com.revature.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.TRForm;
import com.revature.daoimpl.FormDaoImpl;
import com.revature.daoimpl.UsernameDaoImpl;

/**
 * Servlet implementation class FormServlet
 */
public class FormServlet extends HttpServlet {
	private static final long serialVersionUID = 9L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("attempting to do the thing");
		ObjectMapper mapper = new ObjectMapper();
		FormDaoImpl fdi = new FormDaoImpl();
		TRForm trf = mapper.readValue(request.getInputStream(), TRForm.class);
//		private Date startDate;
//		private Date endDate;
//		private String locationCity;
//		private String locationState;
//		private int zipcode;
//		private String courseDescription;
//		private int cost;
//		private String gFormat;
//		private String tEvent;
//		private int employeeID;
		System.out.println("startDate " + trf.getStartDate());
		System.out.println("endDate " + trf.getEndDate());
		System.out.println("locationCity " + trf.getLocationCity());
		System.out.println("locationState " + trf.getLocationState());
		System.out.println("zipcode " + trf.getZipcode());
		System.out.println("courseDescription " + trf.getCourseDescription());
		System.out.println("cost " + trf.getCost());
		System.out.println("gFormat " + trf.getgFormat());
		System.out.println("tEvent " + trf.gettEvent());
		PrintWriter out = response.getWriter();
		try {
			System.out.println("getting userID");
			HttpSession session = request.getSession();
			String username = (String) session.getAttribute("name");
			UsernameDaoImpl udi = new UsernameDaoImpl();
			int uid = udi.getUID(username);
			// int uid = 1;
			trf.setEmployeeID(uid);
			System.out.println("Username + ID: " + username + " " + uid);
			fdi.submitForm(trf);
			out.print("Tuition Reimbursment Form Submitted.");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			out.close();
		}
	}

}
