package com.Xceptionulls.BloggingWebsite.controller;
import com.Xceptionulls.BloggingWebsite.model.Comment;
import com.Xceptionulls.BloggingWebsite.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentService commentService;
    @GetMapping("/getAll")
    public List<Comment> list(){
        return commentService.listAll();
    }
    @PostMapping("/add")
    public String add(@RequestBody Comment comment){
        commentService.save(comment);
        return "comment Added Successfully";
    }
    @PutMapping("/{id}")
    public ResponseEntity<Comment> update(@RequestBody Comment comment, @PathVariable Integer id){
        try{
            Comment existingComment=commentService.get(id);
            commentService.save(comment);
            return new ResponseEntity<Comment>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<Comment>(HttpStatus.NOT_FOUND);

        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        commentService.delete(id);
        return "Deleted comment with the id of "+id;
    }

}
