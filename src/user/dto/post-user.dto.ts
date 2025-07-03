import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class PostUserDto {
  @IsOptional()
  @IsUUID(4, { message: 'El id debe ser un UUID' })
  id?: string;

  @IsString({ message: 'El nombre debe ser un string' })
  name: string;

  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  email: string;
}
