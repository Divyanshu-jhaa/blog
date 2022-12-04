package com.Xceptionulls.BloggingWebsite.model;


import javax.persistence.*;

@Entity
public class Image {
    @Id
    private String image_id;
    private String image_name;
    private String type;

    @Lob
    private byte[] image_data;

    public Image(){

    }

    public Image(String image_id, String image_name, String type, byte[] image_data) {
        this.image_id = image_id;
        this.image_name = image_name;
        this.type = type;
        this.image_data = image_data;
    }

    public String getImage_id() {
        return image_id;
    }

    public void setImage_id(String image_id) {
        this.image_id = image_id;
    }

    public String getImage_name() {
        return image_name;
    }

    public void setImage_name(String image_name) {
        this.image_name = image_name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getImage_data() {
        return image_data;
    }

    public void setImage_data(byte[] image_data) {
        this.image_data = image_data;
    }
}
