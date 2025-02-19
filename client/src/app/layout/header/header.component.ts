import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import{MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [
    MatBadge, MatButton, MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
