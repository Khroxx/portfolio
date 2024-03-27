import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }
}
