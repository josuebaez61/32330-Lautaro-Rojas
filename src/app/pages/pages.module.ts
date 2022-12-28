import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPageComponent } from './street-page/street-page.component';
import { CarsModule } from '../shared/modules/cars/cars.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonItemComponent } from '../shared/components/pokemon-item/pokemon-item.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [StreetPageComponent, PokemonComponent, PokemonItemComponent],
  imports: [
    CommonModule,
    CarsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [StreetPageComponent, PokemonComponent, PokemonItemComponent],
})
export class PagesModule {}