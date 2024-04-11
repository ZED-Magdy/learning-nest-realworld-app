import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { BrandsModule } from './brands/brands.module';
import { ScootersModule } from './scooters/scooters.module';
import { StationsModule } from './stations/stations.module';
import { PlacesModule } from './places/places.module';
import { ZonesModule } from './zones/zones.module';
import { PriceListsModule } from './price-lists/price-lists.module';
import { RidesModule } from './rides/rides.module';
import { WalletTransactionModule } from './wallet-transaction/wallet-transaction.module';
import { TransferBalanceRequestModule } from './transfer-balance-request/transfer-balance-request.module';
import { ConfigModule } from '@nestjs/config';
import { Brand } from './brands/entities/brand.entity';
import { Place } from './places/entities/place.entity';
import { PriceList } from './price-lists/entities/price-list.entity';
import { Ride } from './rides/entities/ride.entity';
import { Scooter } from './scooters/entities/scooter.entity';
import { Station } from './stations/entities/station.entity';
import { Zone } from './zones/entities/zone.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT as string, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
      Brand,
      Place,
      PriceList,
      Ride,
      Scooter,
      Station,
      Zone,
    ],
    synchronize: true,
  }),
  ScheduleModule.forRoot(),
  BrandsModule,
  ScootersModule,
  StationsModule,
  PlacesModule,
  ZonesModule,
  PriceListsModule,
  RidesModule,
  WalletTransactionModule,
  TransferBalanceRequestModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private datasource: DataSource){}
}
