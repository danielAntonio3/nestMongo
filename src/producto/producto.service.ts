import { Injectable } from '@nestjs/common';
// ?CUARTO PASO
// ?INCOMPORAMOS LA INTERFACE
// !fIN DE LA CONCEXION

// ?DESPUES HAY QUE DEFINIR EN EL CONTROLLER LAS CONSULTA
// *IMPORTACIONES NECESARIAS
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// *IMPORTAMOS LA INTERFACES
import { Producto } from './interfaces/producto.interface';

// *IMPORTAMOS EL DTO
import { CreateProductDTO } from './dto/produto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel('Producto') private readonly productoModel: Model<Producto>,
  ) {}
  // !FUCION PARA VER PRODUCTOS
  async getProductos(): Promise<Producto[]> {
    const produtos = await this.productoModel.find();
    return produtos;
  }
  // !FUNCION PARA VER UN PRODUCTO
  async getProducto(produtoID: string): Promise<Producto> {
    const produto = await this.productoModel.findById(produtoID);
    return produto;
  }
  // !FUNCION PARA CREAR UN PRODUCTO
  async createProducto(createProductoDTO: CreateProductDTO): Promise<Producto> {
    const ProductoNuevo = new this.productoModel(createProductoDTO);
    return await ProductoNuevo.save();
  }
  // !FUNCION PARA ELIMINRA UN PRODUCTO
  async deleteProducto(produtoID: string): Promise<Producto> {
    const ProductoEliminar = await this.productoModel.findByIdAndDelete(
      produtoID,
    );
    return ProductoEliminar;
  }
  // !FUNCION PARA ACTUALIZAR UN PRODUCTO
  async updateProducto(
    produtoID: string,
    createProductoDTO: CreateProductDTO,
  ): Promise<Producto> {
    const actualizarProducto = await this.productoModel.findByIdAndUpdate(
      produtoID,
      createProductoDTO,
      { new: true },
    );
    return actualizarProducto;
  }
}
