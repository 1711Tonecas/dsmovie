package com.tonecas.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tonecas.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
