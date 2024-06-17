import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './pages/website/footer/footer.component';
import { HeaderComponent } from './pages/website/header/header.component';
import { LandingComponent } from './pages/website/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConfirmDialogModule,
    ButtonModule,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bigbasket_ecommerce_angular';
}
