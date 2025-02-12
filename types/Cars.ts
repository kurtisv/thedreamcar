

export type Car = {
    _id: string;
    name: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    fuelType: string;
    horsepower: number;
    torque: number;
    imageUrl: string;
    url: string;
    description: string;  
    // Nouvelle structure pour la galerie
    gallery: {
        category: "interior_front" | "interior_back" | "exterior"; // Catégories définies
        imageUrl: string;
        description: string;
    }[];
};
