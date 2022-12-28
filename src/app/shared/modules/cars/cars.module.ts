import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car1Component } from '../../components/cars/car1/car1.component';
import { Car2Component } from '../../components/cars/car2/car2.component';
import { Car3Component } from '../../components/cars/car3/car3.component';

@NgModule({
  declarations: [Car1Component, Car2Component, Car3Component],
  imports: [CommonModule],
  exports: [Car1Component, Car2Component, Car3Component],
})
export class CarsModule {}
