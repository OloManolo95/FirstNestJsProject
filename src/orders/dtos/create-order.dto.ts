import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  client: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
