package com.Xceptionulls.BloggingWebsite.controller;

import com.Xceptionulls.BloggingWebsite.model.User;
import com.Xceptionulls.BloggingWebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<User> list() {
        return userService.listAll();
    }

    @GetMapping("/{id}")
    public User getOne(@PathVariable Integer id)
    {
        return userService.get(id);
    }

    @GetMapping("/username/{username}")
    public User getOneByUsername(@PathVariable String username)
    {
        return userService.getByUsername(username);
    }
    @PostMapping("/add")
    public String add(@RequestBody User user) {
        userService.save(user);
        return "User Added Successfully";
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> update(@RequestBody User user, @PathVariable Integer id) {
        try {
            User existingUser = userService.get(id);
            userService.save(user);
            return new ResponseEntity<User>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);

        }
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        userService.delete(id);
        return "Deleted User with the id of " + id;
    }
}
