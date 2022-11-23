package com.Xceptionulls.BloggingWebsite.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Category {
    public Category() {
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }


    @Id
    private int category_id;
    private String category;
}
