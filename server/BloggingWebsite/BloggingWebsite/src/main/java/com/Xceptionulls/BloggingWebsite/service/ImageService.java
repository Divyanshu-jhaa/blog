package com.Xceptionulls.BloggingWebsite.service;

import com.Xceptionulls.BloggingWebsite.model.Image;
import com.Xceptionulls.BloggingWebsite.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public Image save(MultipartFile file,String image_id) throws IOException {
        Image image = new Image(image_id,file.getOriginalFilename(), file.getContentType(),file.getBytes());
        return imageRepository.save(image);
    }
    public Image getImageById(String id){
        return imageRepository.findById(id).get();
    }
    public List<Image> getAllImages(){
        return imageRepository.findAll();
    }
}
