package ru.saubulprojects.reactapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ru.saubulprojects.reactapp.dto.UserDTO;
import ru.saubulprojects.reactapp.entity.User;
import ru.saubulprojects.reactapp.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
	
	private final UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/users")
	public List<User> findAllUsers() {
		return userService.findAll();
	}
	
	@PostMapping("/users/add")
	public void saveUser(@RequestBody UserDTO userDTO) {
		userService.save(userDTO);
	}
	
	@DeleteMapping("/users/delete/{id}")
	public void deleteUser(@PathVariable("id") Long id) {
		userService.deleteById(id);
	}
}
