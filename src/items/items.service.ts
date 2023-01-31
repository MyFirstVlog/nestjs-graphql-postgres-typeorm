import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(): Promise<Item[]> {
    return this.itemsRepositorty.find();
  }

  async findOne(id: string): Promise<Item> {

    const item = await this.itemsRepositorty.findOneBy({id});

    if(!item) throw new NotFoundException(`The item with id ${id} not found`);

    return item;
  }

  async update(id: string, updateItemInput: UpdateItemInput): Promise<Item> {

    const item = await this.itemsRepositorty.preload(updateItemInput); //* Prerecarga la informacion y libera la instancia con las modificaciones ya realizadas dentro del objeto
    //* Se manda el objeto porque el preload pro defecto trata de encontrar el valor del id

    if(!item) throw new NotFoundException(`The item with id ${id} not found`);

    return this.itemsRepositorty.save(item);

  }

  async remove(id: string):Promise<Item> {

    const item = await this.findOne(id);

    await this.itemsRepositorty.remove(item);

    return {...item, id};
  }
}
