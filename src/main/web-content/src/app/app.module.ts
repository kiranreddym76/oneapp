import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { ThemeMenuComponent } from './layout/theme-menu/theme-menu.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { OneappUiModule } from './components/oneapp-ui/oneapp-ui.module'




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ThemeMenuComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentDateAdapter,
    ReactiveFormsModule,
    MediaDeviceInfo,
    AppRoutingModule,
    OneappUiModule
   
  ]
})
export class AppModule { }
