// src/app/app.component.ts
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./MyComponents/about/about.component";
import { ProjectsComponent } from "./MyComponents/projects/projects.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { ContactComponent } from "./MyComponents/contact/contact.component";
import { HomeComponent } from './MyComponents/home/home.component';
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { WhatsappComponent } from "./MyComponents/whatsapp/whatsapp.component";
import { BlogsComponent } from "./MyComponents/blogs/blogs.component";
import { ServicesComponent } from "./MyComponents/ourServices/services.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark this component as standalone to avoid importing the entire Angular Router module
  imports: [
    RouterOutlet,
    AboutComponent,
    ProjectsComponent,
    NavbarComponent,
    HomeComponent, // Include only components that are used in the root component
    ContactComponent,
    FooterComponent,
    WhatsappComponent,
    BlogsComponent,
    ServicesComponent
]
})
export class AppComponent {
  title = 'portfolio';
}
