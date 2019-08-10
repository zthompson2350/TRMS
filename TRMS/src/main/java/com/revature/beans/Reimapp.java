package com.revature.beans;

import java.sql.Date;

public class Reimapp {
	private String username;
	private String firstname;
	private String lastname;
	private Date datesubmitted;
	private Date datestart;
	private Date dateend;
	private String course_description;
	private String course_type;
	private String grading_format;
	private String status;
	public Reimapp() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Reimapp(String username, String firstname, String lastname, Date datesubmitted, Date datestart, Date dateend,
			String course_description, String course_type, String grading_format, String status) {
		super();
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.datesubmitted = datesubmitted;
		this.datestart = datestart;
		this.dateend = dateend;
		this.course_description = course_description;
		this.course_type = course_type;
		this.grading_format = grading_format;
		this.status = status;
	}
	@Override
	public String toString() {
		return "reimapp [username=" + username + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", datesubmitted=" + datesubmitted + ", datestart=" + datestart + ", dateend=" + dateend
				+ ", course_description=" + course_description + ", course_type=" + course_type + ", grading_format="
				+ grading_format + ", status=" + status + "]";
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public Date getDatesubmitted() {
		return datesubmitted;
	}
	public void setDatesubmitted(Date datesubmitted) {
		this.datesubmitted = datesubmitted;
	}
	public Date getDatestart() {
		return datestart;
	}
	public void setDatestart(Date datestart) {
		this.datestart = datestart;
	}
	public Date getDateend() {
		return dateend;
	}
	public void setDateend(Date dateend) {
		this.dateend = dateend;
	}
	public String getCourse_description() {
		return course_description;
	}
	public void setCourse_description(String course_description) {
		this.course_description = course_description;
	}
	public String getCourse_type() {
		return course_type;
	}
	public void setCourse_type(String course_type) {
		this.course_type = course_type;
	}
	public String getGrading_format() {
		return grading_format;
	}
	public void setGrading_format(String grading_format) {
		this.grading_format = grading_format;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

}
