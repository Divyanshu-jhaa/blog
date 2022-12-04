package com.Xceptionulls.BloggingWebsite.controller;

import com.Xceptionulls.BloggingWebsite.model.Blog;
import com.Xceptionulls.BloggingWebsite.model.Image;
import com.Xceptionulls.BloggingWebsite.service.BlogService;
import com.Xceptionulls.BloggingWebsite.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/image")
@CrossOrigin
public class ImageController {
    @Autowired
    private ImageService imageService;


    @PostMapping("/{image_id}")
    public Image add(@RequestParam("image") MultipartFile image, @PathVariable String image_id) throws IOException {
       return imageService.save(image,image_id);
    }

    @GetMapping("/{image_id}")
    public Image getImageById(@PathVariable String image_id){
        return imageService.getImageById(image_id);
    }

    @GetMapping("/getAll")
    public List<Image> getAllImages(@PathVariable String image_id){
        return imageService.getAllImages();
    }

}
