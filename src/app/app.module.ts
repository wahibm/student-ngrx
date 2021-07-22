import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule  } from "@angular/material/toolbar";
import {MatIconModule}from "@angular/material/icon";
import {StoreDevtoolsModule} from "@ngrx/store-devtools"
import {EffectsModule,Actions}from "@ngrx/effects";
import { HttpClientModule } from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";
import { CustomSerializer } from "./shared/utils";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({router: routerReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule ,
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),

  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
