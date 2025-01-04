package com.example.Book_store.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Book_store.model.*;

public interface OrderRepository extends JpaRepository<Order,Long> {

}
