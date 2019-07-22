import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';                     // import routes and routermodule required for routing
import { WelcomeComponent } from './welcome/welcome.component';             // import the welcome component 
import { HomeComponent } from './home/home.component';   
import  { MessageComponent } from './message/message.component'                   // import home component for routing

const routes: Routes = [
  {
    path:'',                                        // default path when amgular application load(first page open in browser)
    component: WelcomeComponent
  },
  {
    path:'home',                                  // path to home page
    component: HomeComponent
  },
  {
    path:'message',                                  // path to home page
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
