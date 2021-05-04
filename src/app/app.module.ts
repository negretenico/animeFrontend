import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './registration/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RecommendationComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
