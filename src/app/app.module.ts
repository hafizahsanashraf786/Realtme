import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
