import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorComponent } from './component/author/author.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, AuthorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-growable-list';
}
