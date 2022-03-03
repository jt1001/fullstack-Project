package com.example.car.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.example.car.domain.Car;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc // Sets up the MockMVC objects
@Sql(scripts = { "classpath:car-schema.sql",
		"classpath:car-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD) // REQUIRED SO THE SCHEMA AND
																						// DATA IS UP BEFORE RUNNING
																						// TESTS
@ActiveProfiles("test")
public class CarControllerTest {

	@Autowired // PULL THE MOCKMVC OBJECT FROM the CONTEXT (@similiar to Service/@repository)
	private MockMvc mvc; // acts like postman!!
	@Autowired
	private ObjectMapper mapper; // Converts JAVA to JSON and JSON to JAVA!!!

	@Test // THIS IS TO TEST IF CREATE WORKS
	void testCreate() throws Exception {
		Car testCar = new Car(null, "Ford", "Focus", 2021, 1.6, 13000.00);
		String testCarAsJSON = this.mapper.writeValueAsString(testCar); // CONVERT
		RequestBuilder req = post("/create").contentType(MediaType.APPLICATION_JSON).content(testCarAsJSON); // REQUEST

		Car testCreatedCar = new Car(3, "Ford", "Focus", 2021, 1.6, 13000.00);
		String testCreatedCarAsJSON = this.mapper.writeValueAsString(testCreatedCar); // CONVERTS TO JSON AGAIN
		ResultMatcher checkStatus = status().isCreated(); // STATUS TO BE 201 CREATED!!!
		ResultMatcher checkBody = content().json(testCreatedCarAsJSON); // THIS WILL CHECK THE returned BODY!!

		// SENDS REQUEST AND CHECKS STATUS AND BODY!!
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);

	}

	@Test
	void getAllTest() throws Exception {
		RequestBuilder req = get("/getAll");
		List<Car> testCars = List.of(new Car(1, "Audi", "A3", 2017, 2.0, 17500.00),
				new Car(2, "BMW", "1 Series", 2020, 1.6, 16500.00));
		String testCarJson = this.mapper.writeValueAsString(testCars);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);

	}

	@Test
	void getByIdTest() throws Exception {
		RequestBuilder req = get("/get/2");
		Car testCars = new Car(2, "BMW", "1 Series", 2020, 1.6, 16500.00); // RETURN AS ONE CAR AND NOT A LIST!!!!
		String testCarJson = this.mapper.writeValueAsString(testCars);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void getByCarMakeTest() throws Exception {
		RequestBuilder req = get("/getByCarMake/Audi");
		List<Car> testCarMake = List.of(new Car(1, "Audi", "A3", 2017, 2.0, 17500.00));
		String testCarMakeJson = this.mapper.writeValueAsString(testCarMake);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarMakeJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void getByModelNameTest() throws Exception {
		RequestBuilder req = get("/getByModelName/A3");
		List<Car> testCarModelName = List.of(new Car(1, "Audi", "A3", 2017, 2.0, 17500.00));
		String testCarModelNameJson = this.mapper.writeValueAsString(testCarModelName);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarModelNameJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void getByMakeYearTest() throws Exception {
		RequestBuilder req = get("/getByMakeYear/2020");
		List<Car> testCarMakeYear = List.of(new Car(2, "BMW", "1 Series", 2020, 1.6, 16500.00));
		String testCarMakeYearJson = this.mapper.writeValueAsString(testCarMakeYear);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarMakeYearJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void getByEngineSizeTest() throws Exception {
		RequestBuilder req = get("/getByEngineSize/2.0");
		List<Car> testCarEngineSize = List.of(new Car(1, "Audi", "A3", 2017, 2.0, 17500.00));
		String testCarEngineSizeJson = this.mapper.writeValueAsString(testCarEngineSize);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testCarEngineSizeJson);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void updatebyId() throws Exception {
		Car testCarUpdateById = new Car(null, "BMW", "1 Series", 2020, 1.8, 16500.00);
		String testCarUpdate = this.mapper.writeValueAsString(testCarUpdateById);
		RequestBuilder req = put("/replace/2").contentType(MediaType.APPLICATION_JSON).content(testCarUpdate);

		Car testUpdateCar = new Car(2, "BMW", "1 Series", 2020, 1.8, 16500.00);
		String testUpdatedCarAsJSON = this.mapper.writeValueAsString(testUpdateCar);
		ResultMatcher checkStatus = status().isAccepted(); // STATUS SHOULD BE 202 ACCEPTED!!
		ResultMatcher checkBody = content().json(testUpdatedCarAsJSON);

		// SENDS REQUEST AND CHECKS STATUS AND BODY!!
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void deleteById() throws Exception {
		RequestBuilder req = delete("/remove/2").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isNoContent();
		this.mvc.perform(req).andExpect(checkStatus);
	}

}
