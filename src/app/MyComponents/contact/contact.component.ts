import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, FontAwesomeModule], // Import FontAwesomeModule here
})
export class ContactComponent {
  constructor(private library: FaIconLibrary) {
    // Add icons in the component itself
    this.library.addIcons(faGithub, faLinkedin, faTwitter);
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);
      contactForm.reset(); // Optional: Reset the form after submission
    }
  }
}
