// COMPONENTS
import { MyMaterialModule } from './modules/my-material.module';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { MyContentComponent } from './components/my-content/my-content.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyFormLoginComponent } from './components/my-formLogin/my-formLogin.component';
import { MyErrorHelperComponent } from './my-errorHelper/my-errorHelper.component';
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsModule } from './components/cars/cars.module';
import { RouterModule } from '@angular/router';
import { CustomPOrDModule } from '../custom/custom-p-or-d.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    MyContentComponent,
    MyNavbarComponent,
    MyToolbarComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
  ],
  imports: [
    CustomPOrDModule,
    CommonModule,
    ReactiveFormsModule,
    MyMaterialModule,
    CarsModule,
    RouterModule,
  ],
  exports: [
    CarsModule,
    MyContentComponent,
    MyNavbarComponent,
    MyToolbarComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
  ],
})
export class SharedModule {}
