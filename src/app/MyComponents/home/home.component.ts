import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  dynamicText: string = '';
  texts: string[] = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Node.js Developer",
    "JavaScript Enthusiast",
    "Web Developer"
  ];
  index: number = 0;
  isDeleting: boolean = false;

  private typingSpeed: number = 150; // Speed of typing
  private deletingSpeed: number = 100; // Speed of deleting
  private pauseBetween: number = 2000; // Pause between full word typing/deleting

  constructor() {}

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    this.typeText();
  }

  private typeText(): void {
    if (this.isDeleting) {
      this.dynamicText = this.texts[this.index].slice(0, this.dynamicText.length - 1);
      if (this.dynamicText.length === 0) {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.texts.length; // Move to the next text
        setTimeout(() => this.typeText(), this.pauseBetween);
      } else {
        setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    } else {
      this.dynamicText = this.texts[this.index].slice(0, this.dynamicText.length + 1);
      if (this.dynamicText.length === this.texts[this.index].length) {
        this.isDeleting = true;
        setTimeout(() => this.typeText(), this.pauseBetween);
      } else {
        setTimeout(() => this.typeText(), this.typingSpeed);
      }
    }
  }
}
