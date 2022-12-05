package com.Xceptionulls.BloggingWebsite.service;

import com.Xceptionulls.BloggingWebsite.model.User;
import com.Xceptionulls.BloggingWebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> listAll(){return userRepository.findAll();}
    public void save(User user){
        userRepository.save(user);
     }
     public  User get(Integer id){
        return userRepository.findById(id).get();
     }
     public void delete(Integer id){
        userRepository.deleteById(id);
     }

    public User getByUsername(String username){return userRepository.getUserByUsername(username);}

}
