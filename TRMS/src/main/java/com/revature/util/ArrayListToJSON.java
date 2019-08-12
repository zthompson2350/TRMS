package com.revature.util;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Reimapp;

public class ArrayListToJSON {
	private static ObjectMapper om = new ObjectMapper();
	public static String convert(List<Reimapp> rmapp) throws JsonProcessingException {
		String json = om.writeValueAsString(rmapp);
		return json;
	}
}
