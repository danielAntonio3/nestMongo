// ? DTO (AYUDA A SABER QUE VALORES RECIBIRA)
export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
