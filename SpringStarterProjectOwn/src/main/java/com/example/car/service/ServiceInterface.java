package com.example.car.service;

import java.util.List;

public interface ServiceInterface<T> {
	
	T create(T t); //CREATE
	List<T> getAll(); //READALL
	T getOne(Integer id); //GetByID
	T replace(Integer id, T t); //UpdateByID
	void remove(Integer id); //DELETE

}
