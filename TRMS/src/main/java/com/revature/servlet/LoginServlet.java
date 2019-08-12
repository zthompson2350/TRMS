package com.revature.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.revature.daoimpl.UsernameDaoImpl;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 17L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("poop");
		HttpSession session = request.getSession();
		session.setAttribute("name", null);
	}	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UsernameDaoImpl udi = new UsernameDaoImpl();
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		request.getRequestDispatcher("login.html").include(request, response);
		String name = request.getParameter("username");
		String password = request.getParameter("password");
		boolean cpw = false;
//		System.out.println("password: " + password);
		try {
			cpw = udi.correctPassword(name, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(cpw) {
			out.print("Welcome, " + name);
			HttpSession session = request.getSession();
			session.setAttribute("name", name);
			request.getRequestDispatcher("index.html").forward(request, response);
		} else {
			request.getRequestDispatcher("registration.html").forward(request, response);
		}
		out.close();
	}

}