// // import { Component, HostListener } from '@angular/core';
// // import { CommonModule } from '@angular/common'; // Import CommonModule

// // @Component({
// //     selector: 'app-navbar',
// //     templateUrl: './navbar.component.html',
// //     styleUrls: ['./navbar.component.css'],
// //     standalone: true,
// //     imports: [CommonModule,] // Add CommonModule to imports
// // })
// // export class NavbarComponent {
// //     scrolled = false;
// //     isMenuOpen = false; // Track the state of the menu

// //     @HostListener('window:scroll', [])
// //     onWindowScroll() {
// //         this.scrolled = window.scrollY > 50; // Change the threshold as needed
// //     }

// //     toggleMenu() {
// //         this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
// //     }
// // }


// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//     selector: 'app-navbar',
//     templateUrl: './navbar.component.html',
//     styleUrls: ['./navbar.component.css'],
//     standalone: true,
//     imports: [CommonModule]
// })
// export class NavbarComponent {
//     scrolled = false;
//     isMenuOpen = false; // Track the state of the menu

//     @HostListener('window:scroll')
//     onWindowScroll() {
//         this.scrolled = window.scrollY > 50; // Adjust threshold as needed
//     }

//     toggleMenu() {
//         this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
//     }
// }

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class NavbarComponent {
    scrolled = false;
    isMenuOpen = false;

    @HostListener('window:scroll')
    onWindowScroll() {
        this.scrolled = window.scrollY > 50;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}