package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Chart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChartRepository extends JpaRepository<Chart,Long> {
}
