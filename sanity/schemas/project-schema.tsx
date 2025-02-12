import { defineField } from "sanity";

const projectSchemaCar = {
  name: "car",
  title: "Cars",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "fuelType",
      title: "Fuel Type",
      type: "string",
      options: {
        list: ["Petrol", "Diesel", "Electric", "Hybrid"],
      },
    }),
    defineField({
      name: "horsepower",
      title: "Horsepower",
      type: "number",
    }),
    defineField({
      name: "torque",
      title: "Torque (Nm)",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
    }),
      // 🖼️ Nouvelle galerie organisée par catégorie
      defineField({
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string',
                options: {
                  list: [
                    { title: 'Intérieur Avant', value: 'interior_front' },
                    { title: 'Intérieur Arrière', value: 'interior_back' },
                    { title: 'Extérieur', value: 'exterior' },
                  ],
                },
              },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }
        ],
        options: { layout: 'grid' }
      }),
  ],
};

export default projectSchemaCar;
