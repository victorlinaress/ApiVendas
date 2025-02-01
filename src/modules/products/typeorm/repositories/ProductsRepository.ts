import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";  // A importação correta para a entidade Product

@EntityRepository(Product)  // Define a classe como um repositório para a entidade Product
export class ProductRepository extends Repository<Product> {

  // Método para buscar um produto pelo nome
  public async findByName(name: string): Promise<Product | undefined> { //procurar o nome

    const product = await this.findOne({
      where: {
        name,
      },
    });

    return product;  // retorna o produto encontrado ou 'undefined' se não encontrado
  }
}
