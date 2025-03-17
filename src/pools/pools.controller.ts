import { Controller, Get } from '@nestjs/common';
import { PoolsService } from './pools.service';
import { GetPoolsResponseDto } from './dto/get-pools-response-dto';

@Controller('pools')
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {}

  @Get()
  getPools(): Promise<GetPoolsResponseDto[] | string> {
    return this.poolsService.getAllPools();
  }
}
