import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerElementComponent,
    CockpitComponent,
    CurrencyConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserAuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
