package com.revature.dao;

import java.sql.SQLException;

import com.revature.beans.TRForm;

public interface FormDao {
	public abstract void submitForm(TRForm form) throws SQLException;
}
