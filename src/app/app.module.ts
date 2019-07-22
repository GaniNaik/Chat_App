import { BrowserModule } from '@angular/platform-browser';       
import { HttpClientModule } from '@angular/common/http';                 // importing module required to perform crud operations with node and mongodb
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';         
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { WelcomeComponent } from './welcome/welcome.component';     // all component should be import here (all component used in project)
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [                                                  // specify the references of imported components like HomeComponent,etc
    AppComponent,
    WelcomeComponent,
    SidebarComponent,
    HomeComponent,
    MessageComponent,
    HighlightDirective
  ],
  imports: [                                                      // specify the references of imported modules like HttpClientModule,etc
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
  ],
  providers: [                                              //  services and providers can be used specified here
    
  ],      
  bootstrap: [AppComponent]                               // bootrapping the appcomponent
})
export class AppModule { }
