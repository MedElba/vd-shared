/* eslint-disable max-classes-per-file */
import { IsEnum, IsNumber, IsString } from 'class-validator';

// export enum FoodType = 'Breakfast' | 'Show All' | 'Lunch' | 'Dinner';
export enum FoodType {
  'Breakfast',
  'Show All',
  'Lunch',
  'Dinner',
}

export class IFood {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsEnum(FoodType)
  type: FoodType;
}

export class ISocialIcon {
  @IsString()
  iconUrl: string;

  @IsString()
  socialUrl: string;
}
