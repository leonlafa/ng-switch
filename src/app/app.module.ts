import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './ui/components';
import { ControllerComponent } from './ui/components/controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
