package com.example.car.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {

	@Id // PRIMARY KEY ALWAYS REQUIRED!! used for db
	@GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO INCREMENT ALWAYS REQUIRED!!!!
	private Integer id;

	@Column(nullable = false)
	private String carMake;

	@Column(unique = true, nullable = false) // MAKES IT NOT EMPTY & UNIQUE!
	private String modelName;

	@Column(nullable = false)
	private Integer makeYear;

	@Column(nullable = false)
	private Double engineSize;
	
	@Column(nullable = false)
	private Double price;

	public Car() {
		super();
	}

	public Car(Integer id, String carMake, String modelName, Integer makeYear, Double engineSize, Double price) {
		super();
		this.id = id;
		this.carMake = carMake;
		this.modelName = modelName;
		this.makeYear = makeYear;
		this.engineSize = engineSize;
		this.price = price;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCarMake() {
		return carMake;
	}

	public void setCarMake(String carMake) {
		this.carMake = carMake;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public Integer getMakeYear() {
		return makeYear;
	}

	public void setMakeYear(Integer makeYear) {
		this.makeYear = makeYear;
	}

	public Double getEngineSize() {
		return engineSize;
	}

	public void setEngineSize(Double engineSize) {
		this.engineSize = engineSize;
	}
	
	@Override
	public String toString() {
		return "Car [id=" + id + ", carMake=" + carMake + ", modelName=" + modelName + ", makeYear=" + makeYear
				+ ", engineSize=" + engineSize + ", price=" + price + "]";
	}

}
