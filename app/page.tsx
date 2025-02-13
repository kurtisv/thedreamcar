"use client";

import { useRouter } from "next/navigation"; // Correct import
import styles from "../styles/global.module.css";
import { getcars } from "@/sanity/schemas/sanity-fonc";
import { Car } from "@/types/Cars";
import Navbar from "@/app/topnav/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const router = useRouter(); // Utiliser useRouter dans un composant client

  useEffect(() => {
    async function fetchCars() {
      const data = await getcars();
      setCars(data);
    }
    fetchCars();
  }, []);

  return (
    // Ajout de la Navbar
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        {cars.map((car: Car) => (
          <div
            key={car._id}
            className={styles.carCard}
            onClick={() => router.push(`/cars/${car._id}`)} // Navigation Next.js
            style={{ cursor: "pointer" }} // Ajoute un effet interactif
          >
            <h1 className={styles.carTitle}>{car.name}</h1>
              <img className={styles.carImagehome} src={car.imageUrl} alt={car.name} />
            <h2 className={styles.carSubtitle}>Informations</h2>
            <p className={styles.carInfo}>
              <strong>Marque:</strong> {car.brand}
            </p>
            <div className={styles.carSeparator}>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Modèle:</span>
                <span>{car.model}</span>
              </div>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Année:</span>
                <span>{car.year}</span>
              </div>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Prix:</span>
                <span>{car.price} $</span>
              </div>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Carburant:</span>
                <span>{car.fuelType}</span>
              </div>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Puissance:</span>
                <span>{car.horsepower} ch</span>
              </div>
              <div className={styles.carRow}>
                <span className={styles.carLabel}>Couple:</span>
                <span>{car.torque} Nm</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
