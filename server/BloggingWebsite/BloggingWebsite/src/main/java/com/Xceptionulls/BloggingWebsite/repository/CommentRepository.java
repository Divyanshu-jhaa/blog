package com.Xceptionulls.BloggingWebsite.repository;

import com.Xceptionulls.BloggingWebsite.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {
}
