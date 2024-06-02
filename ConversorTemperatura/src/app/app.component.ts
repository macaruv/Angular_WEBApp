import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CategoriaProductos';
  nombre: string = 'Cesar Lopez';
  celsius: number = 0;
  fahrenheit: number = 0;
  alertClass: string = '';

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
      this.setAlertClass();
    } else {
      this.fahrenheit = 0;
      this.alertClass = '';
    }
  }

  setAlertClass() {
    if (this.fahrenheit <= 32) {
      this.alertClass = 'alert alert-warning';
    } else if (this.fahrenheit >= 100) {
      this.alertClass = 'alert alert-danger';
    } else {
      this.alertClass = 'alert alert-success';
    }
  }
}
