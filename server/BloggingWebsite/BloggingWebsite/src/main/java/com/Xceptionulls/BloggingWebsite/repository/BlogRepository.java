package com.Xceptionulls.BloggingWebsite.repository;

import com.Xceptionulls.BloggingWebsite.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {
    @Query("FROM Blog WHERE user_id = :i ")
    public List<Blog> listSpecifiedBlog(@Param("i") int user_id);
    @Query("FROM Blog WHERE username like %:i%  ")
    public List<Blog> listBlogsByUsername(@Param("i") String username);
}
