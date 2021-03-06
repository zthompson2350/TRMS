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
import com.revature.beans.RegistrationForm;
import com.revature.daoimpl.EmployeeDaoImpl;

/**
 * Servlet implementation class RegistrationServlet
 */
public class RegistrationServlet extends HttpServlet {
	private static final long serialVersionUID = 17L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		String username = (String)session.getAttribute("name");
		String usernameJSON = "{\"username\" : \"" + username + "\"}";
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(usernameJSON);
		out.flush();
		out.close();
	}
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		EmployeeDaoImpl edi = new EmployeeDaoImpl();
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		request.getRequestDispatcher("registration.html").include(request, response);
		RegistrationForm rf = mapper.readValue(request.getInputStream(), RegistrationForm.class);
		System.out.println("fName " + rf.getfName());
		System.out.println("lName " + rf.getlName());
		System.out.println("email " + rf.getEmail());
		System.out.println("aStreet " + rf.getaStreet());
		System.out.println("aCity " + rf.getaCity());
		System.out.println("aState " + rf.getaState());
		System.out.println("zCode " + rf.getzCode());
		System.out.println("un " + rf.getUn());
		System.out.println("pw " + rf.getPw());
		System.out.println("cpw " + rf.getCpw());
		if (rf.getPw().equals(rf.getCpw())) {
			// Enter Employee Into Database
			try {
				edi.registerEmployee(rf);
				pw.write("<h3>Registration Successful</h3>");
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				pw.write("<h3>Something Went Wrong</h3>");
			}
		} else {
			// Tell Employee they done fucked up
			pw.write("<h3>Passwords Do Not Match.</h3>");
		}
		pw.close();
	}

}
