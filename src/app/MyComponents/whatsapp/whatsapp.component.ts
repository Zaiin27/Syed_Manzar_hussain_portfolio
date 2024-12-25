import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
  phoneNumber: string = '+971508544351'; // Replace with your WhatsApp number
  message: string = 'Hello, I would like to know more about your services.';

  handleWhatsAppRedirect(): void {
    const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(whatsappURL, '_blank');
  }
}
