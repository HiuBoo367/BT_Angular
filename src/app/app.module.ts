import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopHeaderMenuComponent } from './top-header/top-header-menu/top-header-menu.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { ProductListComponent } from './product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopHeaderMenuComponent,
    HeaderMenuComponent,
    ProductListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
