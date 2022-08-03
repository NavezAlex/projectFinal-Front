import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleAddComponent } from './components/admin-article-add/admin-article-add.component';
import { AdminArticleUpdateComponent } from './components/admin-article-update/admin-article-update.component';
import { AdminListArticleComponent } from './components/admin-list-article/admin-list-article.component';
import { AdminListClientComponent } from './components/admin-list-client/admin-list-client.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagePersoEditComponent } from './components/page-perso-edit/page-perso-edit.component';
import { PagePersoComponent } from './components/page-perso/page-perso.component';
import { PanierDetailsComponent } from './components/panier-details/panier-details.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'article/categorie/:idCat', component: ArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perso', component: PagePersoComponent, canActivate: [AuthGuard] },
  { path: 'perso/edit/:username', component: PagePersoEditComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: 'panier-details', component: PanierDetailsComponent },
  { path: 'article-add', component:AdminArticleAddComponent, canActivate: [AuthGuard] },
  { path: 'article-update/:id', component: AdminArticleUpdateComponent, canActivate: [AuthGuard] },
  { path: 'list-article', component: AdminListArticleComponent, canActivate: [AuthGuard] },
  { path: 'list-client', component: AdminListClientComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
