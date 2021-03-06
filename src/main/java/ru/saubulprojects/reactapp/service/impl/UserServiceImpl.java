package ru.saubulprojects.reactapp.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import ru.saubulprojects.reactapp.dto.UserDTO;
import ru.saubulprojects.reactapp.entity.User;
import ru.saubulprojects.reactapp.repository.UserRepository;
import ru.saubulprojects.reactapp.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	private final UserRepository userRepo;
	
	public UserServiceImpl(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	
	@Override
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@Override
	public void save(UserDTO userDTO) {
		userRepo.save(new User(userDTO));
	}

	@Override
	public void deleteById(Long id) {
		userRepo.deleteById(id);
	}

}
