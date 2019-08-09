package com.revature.driver;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.client.JerseyInvocation.Builder;

import com.revature.bean.ZipCode;

public class ClientDriver {
	public static void main(String[] args) {
		Client client= ClientBuilder.newClient();
		WebTarget webTarget = client.target("http://localhost:8080/ZipCodeServie/rest/zipcodes");
		//Get Request for a specific zipcode
		javax.ws.rs.client.Invocation.Builder getZipCodeBuilder=webTarget.path("33559").request();
		Response getZipCodeResponse= getZipCodeBuilder.accept(MediType.APPLICATION_JSON).get();
		int statusCode=getZipCodeResponse.getStatus();
		System.out.println("Returned with status code: "+ statuscode);
		Zipcode z= getZipCodeResponse.readEntity(ZipCode.class);
		System.out.println(z);
		
		System.out.println("*********************************");
		
		Builder bob webTarget.request();
		z=new ZipCode(35775, "Valhermoso Springs","Alabama");
		Response postZipCodeResponse=bob.accept(javax.ws.rs.core.MediaType.APPLICATION_JSON)
				.post(Entity<T>.entity(z, MediaType.APPLICATION_JSON));
		statusCode=getZipCodeResponse.getStatus();
		System.out.println("Return with status code: "+statusCode);
		String string= bob.readEntity(String.class);
		System.out.println(s);
	}

}
