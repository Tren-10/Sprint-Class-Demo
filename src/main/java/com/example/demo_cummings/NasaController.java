package com.example.demo_cummings;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
//public class NasaController {
    @RestController
    public class NasaController {

        @Value("${nasa.api.key}")
        private String apiKey;

        private final String NASA_APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

        @GetMapping("/nasa/apod")
        public ResponseEntity<NasaAPODResponse> getNasaApod(
                @RequestParam(value = "date", required = false) String date,
                @RequestParam(value = "hd", required = false) Boolean hd) {

            String url = NASA_APOD_ENDPOINT + "?api_key=" + apiKey;
            if (date != null) {
                url += "&date=" + date;
            }
            if (hd != null) {
                url += "&hd=" + hd;
            }

            RestTemplate restTemplate = new RestTemplate();
            NasaAPODResponse response = restTemplate.getForObject(url, NasaAPODResponse.class);

            return ResponseEntity.ok(response);
        }
    }

