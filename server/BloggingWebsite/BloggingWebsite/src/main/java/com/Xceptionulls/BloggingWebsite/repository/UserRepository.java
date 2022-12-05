package com.Xceptionulls.BloggingWebsite.repository;

import com.Xceptionulls.BloggingWebsite.model.Blog;
import com.Xceptionulls.BloggingWebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    @Query("FROM User WHERE username like %:i% ")
    public User getUserByUsername(@Param("i") String username);
}
