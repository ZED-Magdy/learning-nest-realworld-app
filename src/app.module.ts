import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '3789000@Bdo',
    database: 'nestjs',
    entities: [],
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource){}
}
