import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}

export class UpdateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
}


@ObjectType()  // GraphQL object type
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  avatar?: string;  // Nullable field

  @Field({ nullable: true })
  suspended?: boolean;
}

@InputType()  // GraphQL input type
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()  // GraphQL input type for editing users
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  avatar?: string;
}