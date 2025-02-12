import styles from "../styles/global.module.css";
import { getcars } from "@/sanity/schemas/sanity-fonc";
import { Car } from "@/types/Cars";

export default async function Home() {
  const cars = await getcars();

  return (
    <div className={styles.container}>
      {cars.map((car: Car) => (
        <div key={car._id} className={styles.carCard}>
          <h1 className={styles.carTitle}>{car.name}</h1>
          <p className={styles.carInfo}><strong>Marque:</strong> {car.brand}</p>
          <p className={styles.carInfo}><strong>Modèle:</strong> {car.model}</p>
          <p className={styles.carInfo}><strong>Année:</strong> {car.year}</p>
          <p className={styles.carInfo}><strong>Prix:</strong> {car.price} $</p>
          <p className={styles.carInfo}><strong>Carburant:</strong> {car.fuelType}</p>
          <p className={styles.carInfo}><strong>Puissance:</strong> {car.horsepower} ch</p>
          <p className={styles.carInfo}><strong>Couple:</strong> {car.torque} Nm</p>
          <img className={styles.carImage} src={car.imageUrl} alt={car.name} />
          <p className={styles.carDescription}>{car.description}</p>
        </div>
      ))}
    </div>
  );
}
