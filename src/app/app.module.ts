import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginComponent } from './components/login/login.component';
import { PagePersoComponent } from './components/page-perso/page-perso.component';
import { PanierDetailsComponent } from './components/panier-details/panier-details.component';
import { PagePersoEditComponent } from './components/page-perso-edit/page-perso-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminArticleAddComponent } from './components/admin-article-add/admin-article-add.component';
import { AdminArticleUpdateComponent } from './components/admin-article-update/admin-article-update.component';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { AdminListArticleComponent } from './components/admin-list-article/admin-list-article.component';
import { AdminListClientComponent } from './components/admin-list-client/admin-list-client.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    CategorieComponent,
    NavigationComponent,
    LoginStatusComponent,
    LoginComponent,
    PagePersoComponent,
    PanierDetailsComponent,
    PagePersoEditComponent,
    RegisterComponent,
    AdminArticleAddComponent,
    AdminArticleUpdateComponent,
    AdminListArticleComponent,
    AdminListClientComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
