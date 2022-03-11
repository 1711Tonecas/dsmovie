package com.tonecas.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tonecas.dsmovie.entities.Score;
import com.tonecas.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
