package com.revature.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.sql.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.revature.beans.Reimapp;
import com.revature.daoimpl.FormDaoImpl;

/**
 * Servlet implementation class StatusServlet
 */
public class StatusServlet extends HttpServlet {
	private static final long serialVersionUID = 2L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String username = (String)session.getAttribute("name");
		String usernameJSON = "{\"username\" : \"" + username + "\"}";
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(usernameJSON);
		out.flush();
		out.close();
		
		
//		HttpSession session = request.getSession();
//		String username = (String)session.getAttribute("name");
//		String usernameJSON = "\"username\" : \"" + username + "\"";
//		PrintWriter out = response.getWriter();
//		response.setContentType("application/json");
//		response.setCharacterEncoding("UTF-8");
//		out.print(usernameJSON);
//		out.flush();
//		out.close();
//		FormDaoImpl fdi = new FormDaoImpl();
//		List<Reimapp> rmap = null;
//		if(!username.equals(null)) {
//			try {
//				rmap = fdi.getFormList(username);
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			
//			int i = 0;
//			while (i < rmap.size()) {				
//				String rmapJSON = "{\n\"username\" : \"" + rmap.get(i).getUsername() + "\",\n"
//						+ "\"firstname\" : \"" + rmap.get(i).getFirstname() + "\",\n"
//						+ "\"lastname\" : \"" + rmap.get(i).getLastname() + "\",\n"
//						+ "\"datesubmitted\" : \"" + rmap.get(i).getDatesubmitted() + "\",\n"
//						+ "\"datestart\" : \"" + rmap.get(i).getDatestart() + "\",\n"
//						+ "\"dateend\" : \"" + rmap.get(i).getDateend() + "\",\n"
//						+ "\"course_description\" : \"" + rmap.get(i).getCourse_description() + "\",\n"
//						+ "\"course_type\" : \"" + rmap.get(i).getCourse_type() + "\",\n"
//						+ "\"grading_format\" : \"" + rmap.get(i).getGrading_format() + "\",\n"
//						+ "\"projected_reimbursement\" : \"" + rmap.get(i).getProjected_reimbursement() + "\",\n"
//						+ "\"status\" : \"" + rmap.get(i).getStatus() + "\"\n}";
//				out.print(rmapJSON);
//				i++;
//			}
//		}
		out.close();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
