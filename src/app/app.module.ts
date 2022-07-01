import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { RenderComponent } from './render/render.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    RenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
