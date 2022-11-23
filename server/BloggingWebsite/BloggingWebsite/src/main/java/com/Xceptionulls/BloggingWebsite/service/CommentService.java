package com.Xceptionulls.BloggingWebsite.service;
import com.Xceptionulls.BloggingWebsite.model.Comment;
import com.Xceptionulls.BloggingWebsite.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    public List<Comment> listAll(){
        return commentRepository.findAll();
    }
    public void save(Comment comment){
        commentRepository.save(comment);
    }
    public Comment get(Integer id){
        return commentRepository.findById(id).get();
    }
    public void delete(Integer id){
        commentRepository.deleteById(id);
    }

}
