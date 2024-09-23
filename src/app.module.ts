import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    MongooseModule.forRoot(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`),
    AuthModule,
  ],
})
export class AppModule {}
