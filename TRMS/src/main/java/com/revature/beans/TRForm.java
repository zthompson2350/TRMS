package com.revature.beans;

import java.sql.Date;

public class TRForm {
	private Date startDate;
	private Date endDate;
	private String locationCity;
	private String locationState;
	private int zipcode;
	private String courseDescription;
	private int cost;
	private String gFormat;
	private String tEvent;
	private int employeeID;

	public TRForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TRForm(Date date, String firstname, String lastname, String email, int employeeID, Date startDate,
			Date endDate, String locationCity, String locationState, int zipcode, String courseDescription, int cost,
			String gFormat, String tEvent) {
		super();
		this.employeeID = employeeID;
		this.startDate = startDate;
		this.endDate = endDate;
		this.locationCity = locationCity;
		this.locationState = locationState;
		this.zipcode = zipcode;
		this.courseDescription = courseDescription;
		this.cost = cost;
		this.gFormat = gFormat;
		this.tEvent = tEvent;
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

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
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
		return "TRForm [employeeID=" + employeeID + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", locationCity=" + locationCity + ", locationState=" + locationState + ", zipcode=" + zipcode
				+ ", courseDescription=" + courseDescription + ", cost=" + cost + ", gFormat=" + gFormat + ", tEvent="
				+ tEvent + "]";
	}
}
