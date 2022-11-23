package com.Xceptionulls.BloggingWebsite.service;
import com.Xceptionulls.BloggingWebsite.model.Category;
import com.Xceptionulls.BloggingWebsite.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public List<Category> listAll(){
        return categoryRepository.findAll();
    }
    public void save(Category category){
        categoryRepository.save(category);
    }
    public Category get(Integer id){
        return categoryRepository.findById(id).get();
    }
    public void delete(Integer id){
        categoryRepository.deleteById(id);
    }
}
