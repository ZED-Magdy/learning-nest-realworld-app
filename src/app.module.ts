import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './datasource'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService|any) => (configService.get('typeorm'))
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
  constructor(){}
}
