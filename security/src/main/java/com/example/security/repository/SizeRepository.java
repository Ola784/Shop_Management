package com.example.security.repository;

import com.example.security.models.ERole;
import com.example.security.models.ESize;
import com.example.security.models.Role;
import com.example.security.models.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long> {
    Optional<Size> findByName(ESize name);
}
