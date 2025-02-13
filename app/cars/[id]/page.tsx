import { getcars } from '@/sanity/schemas/sanity-fonc';
import { Car } from '@/types/Cars';
import styles from "../../../styles/global.module.css";
import Galerie from '@/app/galerie/page';
import Navbar from "@/app/topnav/page";

export default async function CarDetail({ params }: { params: { id: string } }) {
  const cars: Car[] = await getcars();
  const car = cars.find((c) => c._id === params.id);

  if (!car) return <p className={styles.notFound}>🚨 Voiture introuvable</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.carDetailContainer}>
        <h1 className={styles.carTitle}>{car.name}</h1>
        <p className={styles.carDescription}>{car.description}</p>
        <img className={styles.carImage} src={car.imageUrl} alt={car.name} />

        <div className={styles.gallery}>
          <Galerie images={car.gallery} />
        </div>
      </div>
    </div>
  );
}
