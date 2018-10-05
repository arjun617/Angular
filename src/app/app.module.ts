import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DivBottomLeftComponent } from './div-bottom-left/div-bottom-left.component';
import { DivBottomRightComponent } from './div-bottom-right/div-bottom-right.component';
import { InputRegisterComponent } from './input-register/input-register.component';
import { InputRegisterLargeComponent } from './input-register-large/input-register-large.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    NavbarComponent,
    DivBottomLeftComponent,
    DivBottomRightComponent,
    InputRegisterComponent,
    InputRegisterLargeComponent,
    DropdownComponent,
    RadiobuttonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
