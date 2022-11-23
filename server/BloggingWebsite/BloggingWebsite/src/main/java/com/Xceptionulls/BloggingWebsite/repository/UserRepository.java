package com.Xceptionulls.BloggingWebsite.repository;

import com.Xceptionulls.BloggingWebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}
