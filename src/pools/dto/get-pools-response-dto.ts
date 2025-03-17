import { Expose } from 'class-transformer';

export class GetPoolsResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
