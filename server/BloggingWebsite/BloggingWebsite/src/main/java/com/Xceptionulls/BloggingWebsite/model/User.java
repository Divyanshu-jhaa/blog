package com.Xceptionulls.BloggingWebsite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class User {
    @Id
    private int user_id;

    private String name;

    private String email;

    private String password;

    private String username;
    @Lob
    private String profile_photo;

    @Column(columnDefinition = "TEXT")
    private String profile_bio;

    public User() {
    }

    public User(int user_id, String name, String email, String password, String username, String profile_photo, String profile_bio) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.username = username;
        this.profile_photo = profile_photo;
        this.profile_bio = profile_bio;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getProfile_photo() {
        return profile_photo;
    }

    public void setProfile_photo(String profile_photo) {
        this.profile_photo = profile_photo;
    }

    public String getProfile_bio() {
        return profile_bio;
    }

    public void setProfile_bio(String profile_bio) {
        this.profile_bio = profile_bio;
    }
}
