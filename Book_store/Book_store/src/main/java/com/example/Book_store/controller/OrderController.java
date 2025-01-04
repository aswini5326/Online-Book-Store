package com.example.Book_store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Book_store.model.*;
import com.example.Book_store.service.*;

@Controller
public class OrderController {
	@Autowired
    private OrderService orderService;

    @Autowired
    private BookService bookService;

    @GetMapping("/orders")
    public String orders(Model model) {
        model.addAttribute("orders", orderService.getAllOrders());
        return "orders";
    }

    @PostMapping("/order")
    public String placeOrder(@RequestParam Long bookId, @RequestParam int quantity, @RequestParam Long userId) {
        Order order = new Order();
        order.setBook(bookService.getBookById(bookId));
        order.setUser(new User(userId)); // Assuming the user ID is provided.
        order.setQuantity(quantity);
        orderService.saveOrder(order);
        return "redirect:/orders";
    }
}
