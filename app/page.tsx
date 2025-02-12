import styles from "../styles/global.module.css";
import { getcars } from "@/sanity/schemas/sanity-fonc";
import { Car } from "@/types/Cars";
import Navbar from "@/app/topnav/page";

export default async function Home() {
  const cars = await getcars();

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {cars.map((car: Car) => (
          <div key={car._id} className={styles.carCard}>
            <h1 className={styles.carTitle}>{car.name}</h1>
            <div className={styles.carDetails}>
              <img
                className={styles.carImage}
                src={car.imageUrl}
                alt={car.name}
              />
              <p className={styles.carDescription}>{car.description}</p>
            </div>
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
