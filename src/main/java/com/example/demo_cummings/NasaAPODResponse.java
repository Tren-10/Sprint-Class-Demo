package com.example.demo_cummings;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NasaAPODResponse {

    private String date;
    private String explanation;
    private String title;
    private String url;

    // Getters and Setters

    @JsonProperty("date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @JsonProperty("explanation")
    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
