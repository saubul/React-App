package ru.saubulprojects.reactapp.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.saubulprojects.reactapp.dto.UserDTO;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(name = "email_constraint", columnNames = {"email"})})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String email;
	
	public User(UserDTO userDTO) {
		this.name = userDTO.getName();
		this.email = userDTO.getEmail();
	}
}
