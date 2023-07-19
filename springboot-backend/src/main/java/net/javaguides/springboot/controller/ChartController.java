package net.javaguides.springboot.controller;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Chart;
import net.javaguides.springboot.repository.ChartRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;
import org.springframework.http.HttpStatus;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/view")
public class ChartController {

    @Autowired
    private ChartRepository chartRepository;

    @PostMapping
    public Chart createChart(@RequestBody Chart chart) {
        return chartRepository.save(chart);
    }

    @GetMapping
    public List<Chart> getAllCharts() {
        return chartRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Chart> getChartById(@PathVariable long id) {
        Chart chart;
        chart = chartRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));

        return ResponseEntity.ok(chart);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteChart(@PathVariable long id) {
        Chart chart = chartRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Id not FOund" + id));
        chartRepository.delete(chart);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Chart> updateChart(@PathVariable long id, @RequestBody Chart chartDetails)
    {
        Chart updatedChart = chartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Doesn't Exist !! " + id));
        if(!chartDetails.getCname().isEmpty()) {
            updatedChart.setCname(chartDetails.getCname());
        }
        if(!chartDetails.getChartType().isEmpty()) {
            updatedChart.setChartType(chartDetails.getChartType());
        }
        if(!chartDetails.getCountry().isEmpty()) {
            updatedChart.setCountry(chartDetails.getCountry());
        }
        if(chartDetails.getIndicator() >=0 ) {
            updatedChart.setIndicator(chartDetails.getIndicator());
        }
//        if(chartDetails.containsKey()) {
            updatedChart.setStartDate(chartDetails.getStartDate());
//        }
//        if(!chartDetails.getEndDate().isEmpty()) {
            updatedChart.setEndDate(chartDetails.getEndDate());
//        }
        return ResponseEntity.ok(updatedChart);
    }




}
