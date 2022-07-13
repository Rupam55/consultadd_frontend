import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { USDComponent } from './usd/usd.component';
import { AUDComponent } from './aud/aud.component';
import { EROComponent } from './ero/ero.component';
import { CADComponent } from './cad/cad.component';
import { JPYComponent } from './jpy/jpy.component';

@NgModule({
  declarations: [
    AppComponent,
    USDComponent,
    AUDComponent,
    EROComponent,
    CADComponent,
    JPYComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
