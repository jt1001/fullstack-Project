package com.example.car.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.domain.Car;
import com.example.car.service.CarService;

@RestController // Tells spring this is a controller
// Rest compliant (Representational State Transfer)
public class CarController {

	// ResponseEntity - This represents the whole HTTP response!!
	// including status, headers and body

	private CarService service;

	@Autowired // Tells Spring to fetch the CarService from the context - dependency
				// injection????
	public CarController(CarService service) {
		super();
		this.service = service;

	}

	@PostMapping("/create") // to create! //pulls the parameter from the body of the request //in postman
							// you can use = localhost:8080/create
	public ResponseEntity<Car> createCar(@RequestBody Car c) {
		Car created = this.service.create(c);
		ResponseEntity<Car> response = new ResponseEntity<Car>(created, HttpStatus.CREATED); // 201 = CREATED code
		return response;
	}

	@GetMapping("/getAll") // This will return list of all CARS!!!!!!!!!!!!!!!! // you can use =
							// localhost:8080/getAll
	public ResponseEntity<List<Car>> getAllCars() {
		return ResponseEntity.ok(this.service.getAll()); // 200 - Status code for OK.
	}

	@GetMapping("/get/{id}") // 200 - STATUS code returned for OK // TO READ FIELDS USING ID!!!!
	public Car getCar(@PathVariable Integer id) {
		return this.service.getOne(id);

	}

	@GetMapping("/getByCarMake/{carMake}") // 200 status code returned!! GET ALL CARS BY CARMAKE!!!
	public ResponseEntity<List<Car>> getCarsByCarMake(@PathVariable String carMake) {
		List<Car> found = this.service.getAllCarsByCarMake(carMake);
		return ResponseEntity.ok(found);
	}
	
	@GetMapping("/getByModelName/{modelName}")
	public ResponseEntity<List<Car>> getCarsByModelName(@PathVariable String modelName) {
		List<Car> found = this.service.getAllCarsByModelName(modelName);
		return ResponseEntity.ok(found);
	}

	@GetMapping("/getByMakeYear/{makeYear}") /// GET ALL CARS BY THE MAKEYEAR!!!
	public ResponseEntity<List<Car>> getCarsByMakeYear(@PathVariable Integer makeYear) {
		List<Car> found = this.service.getAllCarsByMakeYear(makeYear);
		return ResponseEntity.ok(found);
	}
	
	@GetMapping("/getByEngineSize/{engineSize}")
	public ResponseEntity<List<Car>> getCarsByEngineSize(@PathVariable Double engineSize) {
		List<Car> found = this.service.getAllCarsByEngineSize(engineSize);
		return ResponseEntity.ok(found);
	}
	
	@GetMapping("/getByPrice/{price}")
	public ResponseEntity<List<Car>> getCarsByPrice(@PathVariable Double price) {
		List<Car> found = this.service.getAllCarsByPrice(price);
		return ResponseEntity.ok(found);
	}

	@PutMapping("/replace/{id}") // 202 - STATUS CODE FOR ACCEPTED // FOR UPDATING the CAR using ID!!!!
	public ResponseEntity<Car> replaceCar(@PathVariable Integer id, @RequestBody Car newCar) {
		Car body = this.service.replace(id, newCar);
		ResponseEntity<Car> response = new ResponseEntity<Car>(body, HttpStatus.ACCEPTED);
		return response;
	}

	@DeleteMapping("/remove/{id}") // 204 - STATUS CODE FOR NO CONTENT
	public ResponseEntity<?> removeCar(@PathVariable Integer id) {
		this.service.remove(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
