import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SportsNewsComponent } from './news/sportsnews';
import { FinanceNewsComponent } from './news/financenews';
import { EquityNewsComponent } from './news/equitynews';
import { Product } from './product';
import { ProductDetails } from './productdetails';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent,
    SportsNewsComponent,
    FinanceNewsComponent,
    EquityNewsComponent,
    Product,
    ProductDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
