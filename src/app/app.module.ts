import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselsComponent } from './components/carousels/carousels.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { TermspageComponent } from './components/termspage/termspage.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CarouselsComponent,
    FaqComponent,
    ContactformComponent,
    TermspageComponent,
    ShopComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
