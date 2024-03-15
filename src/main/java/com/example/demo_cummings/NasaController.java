package com.example.demo_cummings;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/nasa")
public class NasaController {

    @Value("${nasa.api.key}")
    private String apiKey;
    private final String NASA_APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

    @GetMapping("/picture-of-the-day")
    public ResponseEntity<?> getPictureOfTheDay() {
        String url = NASA_APOD_ENDPOINT + "?api_key=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();

        try {
            NasaAPODResponse response = restTemplate.getForObject(url, NasaAPODResponse.class);
            return ResponseEntity.ok(response);
        } catch (RestClientException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching Picture of the Day from NASA");
        }
    }

    @GetMapping("/images-by-date")
    public ResponseEntity<?> getImagesByDate(@RequestParam String date) {
        String url = NASA_APOD_ENDPOINT + "?api_key=" + apiKey + "&date=" + date;
        RestTemplate restTemplate = new RestTemplate();

        try {
            // Assuming NASA provides single image for a date
            NasaAPODResponse response = restTemplate.getForObject(url, NasaAPODResponse.class);
            return ResponseEntity.ok(response);
        } catch (RestClientException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching images from NASA");
        }
    }

    @GetMapping("/images-by-count")
    public ResponseEntity<?> getImagesByCount(@RequestParam int count) {
        // TODO: Implement logic, potentially with multiple API calls to NASA if there's a limit per request
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Not yet implemented");
    }

    @GetMapping("/images-by-date-range")
    public ResponseEntity<?> getImagesByDateRange(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        String url = NASA_APOD_ENDPOINT + "?api_key=" + apiKey + "&start_date=" + startDate + "&end_date=" + endDate;
        RestTemplate restTemplate = new RestTemplate();

        try {
            // TODO: Handle response, possibly an array of NasaAPODResponse objects
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Not yet implemented");
        } catch (RestClientException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching images from NASA");
        }
    }
}
