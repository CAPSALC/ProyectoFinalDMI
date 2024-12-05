import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Importa los módulos de las páginas
import { HomePageModule } from './pages/home/home.module';
import { AcercaPageModule } from './pages/acerca/acerca.module';
import { CartPageModule } from './pages/cart/cart.module';
import { DetailsPageModule } from './pages/details/details.module';
import { LoginPageModule } from './pages/login/login.module';
import { RegisterPageModule } from './pages/register/register.module';
import { SearchBooksPageModule } from './pages/search-books/search-books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // Importa los módulos de las páginas
    HomePageModule,
    AcercaPageModule,
    CartPageModule,
    DetailsPageModule,
    LoginPageModule,
    RegisterPageModule,
    SearchBooksPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
