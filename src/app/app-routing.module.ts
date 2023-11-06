import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { SignupComponent } from './components/signup/signup.component';
import { TermspageComponent } from './components/termspage/termspage.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermspageComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
