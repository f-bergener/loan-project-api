import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pool } from './pool.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { GetPoolsResponseDto } from './dto/get-pools-response-dto';

@Injectable()
export class PoolsService {
  constructor(
    @InjectRepository(Pool)
    private poolsRepository: Repository<Pool>,
  ) {}

  async getAllPools(): Promise<GetPoolsResponseDto[] | string> {
    try {
      const pools = await this.poolsRepository.find();
      if (pools.length) {
        return pools.map((pool) => plainToClass(GetPoolsResponseDto, pool));
      } else {
        return 'Pools not found';
      }
    } catch (error) {
      return 'Error finding pools';
    }
  }
}
