import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    ,RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"clock",component:ClockComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
