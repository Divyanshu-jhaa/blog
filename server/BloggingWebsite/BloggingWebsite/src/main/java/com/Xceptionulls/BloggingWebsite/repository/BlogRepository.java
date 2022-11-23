package com.Xceptionulls.BloggingWebsite.repository;

import com.Xceptionulls.BloggingWebsite.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {

}
