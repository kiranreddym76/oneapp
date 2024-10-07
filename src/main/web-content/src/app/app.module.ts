import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { MainComponent } from './layout/main/main/main.component';
import { ThemeMenuComponent } from './layout/theme-menu/theme-menu/theme-menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ThemeMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
