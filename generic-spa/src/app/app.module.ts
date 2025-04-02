import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DataComponent } from './pages/data/data.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    AppComponent,
    AboutComponent,
    DataComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
})
export class AppModule { }
