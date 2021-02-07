// *IMPORTACIONES NECESARIAS
import { Schema } from 'mongoose';

// ?SEGUNDO PASO PARA LA CONEXION
// ?CREAR EL SCHEMA

// ?DESPUES HAY QUE IR AL PRODUCTO.MODULE

export const ProductoSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});
