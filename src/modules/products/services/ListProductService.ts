import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '@shared/erros/AppErro';
import Product from '../typeorm/entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> { 
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.find(); // adicionado "await" para aguardar a busca

    return products;
  }
}

export default ListProductService;
