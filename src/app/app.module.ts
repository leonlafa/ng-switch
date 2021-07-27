import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ScreenComponent,
  ControllerComponent,
  JoystickComponent,
  ButtonComponent,
} from './ui/components';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ControllerComponent,
    JoystickComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
