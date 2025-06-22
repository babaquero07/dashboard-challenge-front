interface Product {
  id: number;
  name: string;
  price: number;
  totalSold: number;
}

export const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Crocs Zuecos clásicos unisex, para adultos",
    price: 39,
    totalSold: 626103,
  },
  {
    id: 2,
    name: "Gildan Camisetas de cuello redondo, paquete múltiple, estilo G1100, para hombre",
    price: 20,
    totalSold: 310758,
  },
  {
    id: 3,
    name: "Botella de agua aislada de acero inoxidable.",
    price: 32,
    totalSold: 145625,
  },
  {
    id: 4,
    name: "Amazon Basics Báscula digital de cocina con pantalla LCD",
    price: 60,
    totalSold: 102281,
  },
  {
    id: 5,
    name: "Apple Auriculares inalámbricos AirPods Pro 2",
    price: 249,
    totalSold: 29760,
  },
];
