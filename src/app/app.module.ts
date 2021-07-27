import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './ui/components';
import { ControllerComponent } from './ui/components/controller/controller.component';
import { JoystickComponent } from './ui/components/joystick/joystick.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ControllerComponent,
    JoystickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
