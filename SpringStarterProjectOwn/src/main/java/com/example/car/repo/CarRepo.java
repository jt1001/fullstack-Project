package com.example.car.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository; //allows us to communicate with database!!!!
import org.springframework.stereotype.Repository;

import com.example.car.domain.Car;

@Repository
public interface CarRepo extends JpaRepository<Car, Integer>{
	
	List<Car> findByCarMakeIgnoreCase(String carMake); //FIND BY CAR MAKE NAME
	
	List<Car> findByModelNameIgnoreCase(String modelName);
	
	List<Car> findByMakeYear(Integer makeYear);
	
	List<Car> findByEngineSize(Double engineSize);
	
	List<Car> findByPrice(Double price);

}
//SRPING WILL AUTO-GENERATE ALL OF THE BASIC CRUD FUNCTIONALITY