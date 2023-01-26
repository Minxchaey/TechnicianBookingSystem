import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SettingsTechnicianComponent } from './settings-technician/settings-technician.component';
import { RequestTechnicianComponent } from './request-technician/request-technician.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ApplyComponent,
    LandingPageComponent,
    CustomerComponent,
    CustomerRegisterComponent,
    AboutUsComponent,
    SettingsTechnicianComponent,
    RequestTechnicianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
