import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  //* Para poder insertar en la base de datos se debe de hacer inyeccion de dependdenvcia en este caso del repositorio

  constructor(
    @InjectRepository(Item)
    private readonly itemsRepositorty: Repository<Item>,
  ){}

  async create(createItemInput: CreateItemInput): Promise<Item>{
    const newItem = this.itemsRepositorty.create(createItemInput);

    return await this.itemsRepositorty.save(newItem); 
    //* Save tambein devuelve la instancia que se graba en base de datos
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
