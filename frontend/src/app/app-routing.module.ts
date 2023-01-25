import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  {
    path : 'add',component : NewArticleComponent
  },
  {
    path : 'register',component : RegisterComponent
  },
  {
    path : 'login',component : LoginComponent
  },
  {
    path : 'edit/:customerId',component : EditArticleComponent
  },
  {
    path : 'apply', component: ApplyComponent
  },
  {
    path : 'transactions', component: ArticlesComponent
  },
  {
    path : '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
