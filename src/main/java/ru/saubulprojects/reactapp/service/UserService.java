package ru.saubulprojects.reactapp.service;

import java.util.List;

import ru.saubulprojects.reactapp.dto.UserDTO;
import ru.saubulprojects.reactapp.entity.User;

public interface UserService {

	List<User> findAll();

	void save(UserDTO userDTO);

	void deleteById(Long id);
	
}
