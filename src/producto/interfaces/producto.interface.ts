// *IMPORTACIONES NECESARIAS
import { Document } from 'mongoose';
// ?QUINTO PASO
// ?CREAMOS LA INTERFACES
// ?DESPUES HAY QUE IR A PRODUCTO.SERVICE

export interface Producto extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
