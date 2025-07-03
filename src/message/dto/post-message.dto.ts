import { IsDefined, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class PostMessageDto {
  @IsOptional()
  @IsUUID(4, { message: 'El id debe ser un UUID' })
  id?: string;

  @IsDefined({message:'La propiedad content es obligatoria'})
  @IsString({ message: 'El contenido debe ser un texto' })
  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  content: string;

  @IsOptional()
  createdAt?: string;

  @IsDefined({message:'La propiedad userId es obligatoria'})
  @IsUUID(4, { message: 'El userId debe ser un UUID' })
  userId: string;
}
