import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { StoriesModule } from "./components/stories/stories.module";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutUsComponent },
    {
        path: 'stories',
        loadChildren: () => StoriesModule ,
        canActivate: [AuthGuard]
    },
    { path:'**', redirectTo: '/login' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }