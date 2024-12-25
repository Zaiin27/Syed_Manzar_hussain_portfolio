import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true, // This makes the component standalone
})
export class ServicesComponent {
  services = [
    {
      image: 'https://img.freepik.com/free-photo/web-development-concept-with-programming-code_23-2148479847.jpg',
      title: 'Web Development',
      description: 'Building responsive, user-friendly, and visually stunning websites tailored to your needs. Our website development services ensure seamless performance, modern design, and optimized functionality to help your business thrive in the digital world.',
    },
    {
      image: 'https://img.freepik.com/free-photo/user-interface-designer-working-his-project_23-2148652385.jpg',
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning user experiences, our UI/UX design services focus on creating designs that captivate users while ensuring functionality and seamless navigation.',
    },
    {
      image: 'https://img.freepik.com/free-photo/digital-marketing-team-working-with-new-startup-project_23-2148859351.jpg',
      title: 'Digital Marketing',
      description: 'Transform your ideas into powerful, user-friendly mobile applications. Our mobile app development services deliver custom solutions with intuitive designs',
    },
    {
      image: 'https://img.freepik.com/free-photo/cybersecurity-data-protection_23-2148848521.jpg',
      title: 'Cybersecurity',
      description: 'Create stunning, functional, and fully customizable websites with our expert WordPress development services. From themes and plugins to seamless integrations, we bring your vision to life with a user-friendly approach.',
    },
    {
      image: 'https://img.freepik.com/free-photo/artificial-intelligence-concept-with-3d-rendering-robot-with-digital-brain_23-2148582924.jpg',
      title: 'AI Solutions',
      description: ' Boost your website s visibility and drive organic traffic with our expert SEO services. From keyword research to on-page optimization and link building, we help your business rank higher and grow faster',
    },
    {
      image: 'https://img.freepik.com/free-photo/web-development-concept-with-programming-code_23-2148479847.jpg',
      title: 'Web Development',
      description: 'Building responsive, user-friendly, and visually stunning websites tailored to your needs. Our website development services ensure seamless performance, modern design, and optimized functionality to help your business thrive in the digital world.',
    },
  ];
}
