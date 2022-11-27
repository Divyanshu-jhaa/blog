package com.Xceptionulls.BloggingWebsite.controller;
import com.Xceptionulls.BloggingWebsite.model.Category;
import com.Xceptionulls.BloggingWebsite.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/getAll")
    public List<Category> list(){
        return categoryService.listAll();
    }
    @PostMapping("/add")
    public String add(@RequestBody Category category){
        categoryService.save(category);
        return "New Category Added";
    }
    @PutMapping("/{id}")
    public ResponseEntity<Category> update(@RequestBody Category category, @PathVariable Integer id){
        try{
            Category existingCategory=categoryService.get(id);
            categoryService.save(category);
            return new ResponseEntity<Category>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);

        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        categoryService.delete(id);
        return "Deleted category with the id of "+id;
    }
}
