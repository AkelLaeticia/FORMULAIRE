import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PageCoomentComponent } from './page-cooment/page-cooment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PageCoomentComponent,
    HighlightDirective,

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  

  
  ],
  exports: [ FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
