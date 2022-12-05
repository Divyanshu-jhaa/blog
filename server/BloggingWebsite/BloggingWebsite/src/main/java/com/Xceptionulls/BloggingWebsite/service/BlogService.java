package com.Xceptionulls.BloggingWebsite.service;
import com.Xceptionulls.BloggingWebsite.model.Blog;
import com.Xceptionulls.BloggingWebsite.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;
    public List<Blog> listAll(){
        return blogRepository.findAll();
    }
    public void save(Blog blog){
        blogRepository.save(blog);
    }
    public Blog get(Integer id){
        return blogRepository.findById(id).get();
    }

    public void delete(Integer id){
        blogRepository.deleteById(id);
    }

    public List<Blog> listSpecified(Integer user_id){return blogRepository.listSpecifiedBlog(user_id);}
    public List<Blog> ListBlogByUsername(String username){return blogRepository.listBlogsByUsername(username);}

}
