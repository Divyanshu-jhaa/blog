package com.Xceptionulls.BloggingWebsite.model;


import javax.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_id;
    private int user_id;
    private String username;
    private int category_id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String image_id;

    @Lob
    private String image_data;

    private String date;

    public Blog() {
    }

    public Blog(int post_id, int user_id, String username, int category_id, String title, String content, String image_id, String image_data, String date) {
        this.post_id = post_id;
        this.user_id = user_id;
        this.username = username;
        this.category_id = category_id;
        this.title = title;
        this.content = content;
        this.image_id = image_id;
        this.image_data = image_data;
        this.date = date;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage_id() {
        return image_id;
    }

    public void setImage_id(String image_id) {
        this.image_id = image_id;
    }

    public String getImage_data() {
        return image_data;
    }

    public void setImage_data(String image_data) {
        this.image_data = image_data;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
