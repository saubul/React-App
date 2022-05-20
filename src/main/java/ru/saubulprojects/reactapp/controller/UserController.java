package ru.saubulprojects.reactapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.saubulprojects.reactapp.entity.User;
import ru.saubulprojects.reactapp.service.UserService;

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
	
}
