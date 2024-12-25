import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Adjust path if necessary

bootstrapApplication(AppComponent)
    .catch(err => console.error(err));
