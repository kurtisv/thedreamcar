import { createClient, groq } from "next-sanity";

export async function getcars() {
  const client = createClient({
    projectId: "wrbrkepp",
    dataset: "production",
    apiVersion: "2025-02-11",
    useCdn: false, // Optionnel, mettre à true pour des requêtes plus rapides en prod
  });

  return client.fetch(
    groq`*[_type == "car"] {
      _id,
      name,
      brand,
      model,
      year,
      price,
      fuelType,
      horsepower,
      torque,
      "imageUrl": image.asset->url,
      description
    }`
  );
}
