import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet, ClickOutsideDirective],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  profileDropdownOpen = false;
  isAuthenticated = false; // À remplacer par un service d'auth
  userName = 'John Doe'; // À récupérer du service
  userEmail = 'john@example.com';

  toggleProfileDropdown() {
    this.profileDropdownOpen = !this.profileDropdownOpen;
  }

  closeProfileDropdown() {
    this.profileDropdownOpen = false;
  }

  logout() {
    this.isAuthenticated = false;
    this.profileDropdownOpen = false;
    // TODO: Appeler le service d'authentification
  }
}
