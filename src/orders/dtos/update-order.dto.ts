import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  client: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
