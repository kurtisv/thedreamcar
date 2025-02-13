"use client";

import React, { useState } from "react";
import styles from "../../styles/global.module.css";

interface Image {
  imageUrl: string;
  description: string;
  category: string;
}

interface GalerieProps {
  images: Image[];
}

export default function Galerie({ images }: GalerieProps) {
  const [filter, setFilter] = useState<string>("exterior");

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  return (
    <div className={styles.gallery}>
      <h1 className={styles.galleryTitle}>Galerie</h1>
      
      {/* 🎚️ Boutons de filtre */}
      <div className={styles.galleryFilter}>
        <button onClick={() => handleFilter("exterior")} className={styles.galleryFilterButton}>
          Extérieur
        </button>
        <button onClick={() => handleFilter("interior_front")} className={styles.galleryFilterButton}>
          Intérieur Avant
        </button>
        <button onClick={() => handleFilter("interior_back")} className={styles.galleryFilterButton}>
          Intérieur Arrière
        </button>
      </div>

      {/* 🖼️ Conteneur des images filtrées */}
      <div className={styles.galleryContainer}>
        {images
          .filter((image) => image.category === filter)
          .map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={image.imageUrl} alt={image.description} className={styles.galleryImage} />
              <p className={styles.galleryDescription}>{image.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
