export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

// list all entities

export class ListAllEntities {
  limit: number;
}

// UpdateCatDto

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}
