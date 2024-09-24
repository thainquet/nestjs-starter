import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './dto/user.dto';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // Query to get all users
  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async users() {
    return this.usersService.findAll();
  }

  // Query to get a user by ID
  @Query(() => User)
  async user(@Args('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Mutation to create a new user
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  // Mutation to update an existing user
  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  // Mutation to suspend a user account
  @Mutation(() => User)
  async suspendUser(@Args('id') id: string) {
    return this.usersService.suspend(id);
  }
}
