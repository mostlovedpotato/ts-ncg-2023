package net.javaguides.springboot;

import net.javaguides.springboot.model.Chart;
import net.javaguides.springboot.repository.ChartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private ChartRepository chartRepository;


	@Override
	public void run(String... args) throws Exception {
		Chart chart = new Chart();
		chart.setCname("Prime");
		chart.setChartType("hor");
		chart.setCountry("In");
		chart.setIndicator(1);
		chart.setStartDate(new Date());
		chart.setEndDate(new Date());
		chartRepository.save(chart);


	}
}
