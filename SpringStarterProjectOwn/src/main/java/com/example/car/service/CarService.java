package com.example.car.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.car.domain.Car;
import com.example.car.repo.CarRepo;

@Service
public class CarService {

	private CarRepo repo;

	@Autowired
	public CarService(CarRepo repo) {
		super();
		this.repo = repo;
	}

	// CREATE
	public Car createCar(Car c) {
		Car created = this.repo.save(c); // INSERT INTO Car;
		return created;

	}

	// READ
	public List<Car> getAllCars() {
		return this.repo.findAll();

	}

	public Car getCar(Integer id) { //FIND BY ID
		Optional<Car> found = this.repo.findById(id);
		return found.get();

	}
	
	public List<Car> getAllCarsByCarMake(String carMake) {
		List<Car> found = this.repo.findByCarMakeIgnoreCase(carMake);
		return found;
	}
	
	public List<Car> getAllCarsByModelName(String modelName) {
		List<Car> found = this.repo.findByModelNameIgnoreCase(modelName);
		return found;
	}
	
	public List<Car> getAllCarsByMakeYear(Integer makeYear) {
		List<Car> found = this.repo.findByMakeYear(makeYear);
		return found;
	}
	
	public List<Car> getAllCarsByEngineSize(Double engineSize) {
		List<Car> found = this.repo.findByEngineSize(engineSize);
		return found;
	}
	
	public List<Car> getAllCarsByPrice(Double price) {
		List<Car> found = this.repo.findByPrice(price);
		return found;
	}
	

	// UPDATE
	public Car replaceCar(Integer id, Car newCar) {
		Car existing = this.repo.findById(id).get();
		existing.setCarMake(newCar.getCarMake()); /// MUST DO THE SAME FOR OTHER VARIABLES!!!!
		existing.setModelName(newCar.getModelName());
		existing.setMakeYear(newCar.getMakeYear());
		existing.setEngineSize(newCar.getEngineSize());
		existing.setPrice(newCar.getPrice());
		Car updated = this.repo.save(existing);
		return updated;

	}

	// DELETE
	public void removeCar(@PathVariable Integer id) {
		this.repo.deleteById(id); //DELETE FROM Car WHERE ID = " "
		
		//this.cars.remove(id.intValue()); // added intValue() so they know its an Integer and not a CAR!!!!!!!
	}

}
