package com.Xceptionulls.BloggingWebsite.controller;

import com.Xceptionulls.BloggingWebsite.model.Blog;
import com.Xceptionulls.BloggingWebsite.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;
@RestController
@RequestMapping("/blog")
@CrossOrigin
public class BlogController {
    @Autowired
    private BlogService blogService;

    @GetMapping("/getAll")
    public List<Blog> list(){
        return blogService.listAll();
    }

    @GetMapping("/{user_id}")
    public List<Blog> listSpecified(@PathVariable Integer user_id){return  blogService.listSpecified(user_id);}

    @GetMapping("/username/{username}")
    public List<Blog> listBlogByUsername(@PathVariable String username){return  blogService.ListBlogByUsername(username);}

    @PostMapping("/add")
    public String add(@RequestBody Blog blog){
        blogService.save(blog);
        return "New Blog Added";
    }
    @PutMapping("/{id}")
    public ResponseEntity<Blog> update(@RequestBody Blog blog,@PathVariable Integer id){
        try{
            Blog existingBlog=blogService.get(id);
            blogService.save(blog);
            return new ResponseEntity<Blog>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<Blog>(HttpStatus.NOT_FOUND);

        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        blogService.delete(id);
        return "Deleted blog with the id of "+id;
    }

}
