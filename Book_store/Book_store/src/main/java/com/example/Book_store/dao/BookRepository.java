package com.example.Book_store.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Book_store.model.*;

public interface BookRepository extends JpaRepository<Book,Long> {

}
