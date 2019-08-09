package com.revature.beans;

import java.util.Date;

public class TRForm {
	private Date date;
	private String firstname;
	private String lastname;
	private String email;
	private int employeeID;
	private Date startDate;
	private Date endDate;
	private String locationCity;
	private String locationState;
	private int zipcode;
	private String courseDescription;
	private String gFormat;
	private String tEvent;
	public TRForm() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TRForm(Date date, String firstname, String lastname, String email, int employeeID, Date startDate,
			Date endDate, String locationCity, String locationState, int zipcode, String courseDescription,
			String gFormat, String tEvent) {
		super();
		this.date = date;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.employeeID = employeeID;
		this.startDate = startDate;
		this.endDate = endDate;
		this.locationCity = locationCity;
		this.locationState = locationState;
		this.zipcode = zipcode;
		this.courseDescription = courseDescription;
		this.gFormat = gFormat;
		this.tEvent = tEvent;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(int employeeID) {
		this.employeeID = employeeID;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getLocationCity() {
		return locationCity;
	}
	public void setLocationCity(String locationCity) {
		this.locationCity = locationCity;
	}
	public String getLocationState() {
		return locationState;
	}
	public void setLocationState(String locationState) {
		this.locationState = locationState;
	}
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	public String getCourseDescription() {
		return courseDescription;
	}
	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}
	public String getgFormat() {
		return gFormat;
	}
	public void setgFormat(String gFormat) {
		this.gFormat = gFormat;
	}
	public String gettEvent() {
		return tEvent;
	}
	public void settEvent(String tEvent) {
		this.tEvent = tEvent;
	}
	@Override
	public String toString() {
		return "TRForm [date=" + date + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", employeeID=" + employeeID + ", startDate=" + startDate + ", endDate=" + endDate + ", locationCity="
				+ locationCity + ", locationState=" + locationState + ", zipcode=" + zipcode + ", courseDescription="
				+ courseDescription + ", gFormat=" + gFormat + ", tEvent=" + tEvent + "]";
	}	
}
