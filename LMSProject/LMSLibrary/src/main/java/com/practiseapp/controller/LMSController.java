package com.practiseapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.practiseapp.Repository.BookRepository;
import com.practiseapp.model.Book;

@RestController
@CrossOrigin(origins = {"http://localhost:3929/"})
public class LMSController {
	
	@Autowired
	private BookRepository bookRepository;
	
	@PostMapping("/book/insert")
	public Book insertBook(@RequestBody Book book) {
		System.out.println(book);
		return bookRepository.save(book);
	}
	
	@GetMapping("/book/get/all")
	public List<Book> getBook() {
		return bookRepository.findAll();
	}
	
	@GetMapping("/book/update/{id}/{status}")
	public void getBookById(@PathVariable("id") Long id,@PathVariable("status") Boolean status) {
		Optional<Book> optional = bookRepository.findById(id);
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		Book b = optional.get();
		b.setStatus(status);
		bookRepository.save(b);
	}

}
