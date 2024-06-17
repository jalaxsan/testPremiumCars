import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PhotoSliderComponent } from '../photo-slider/photo-slider.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CarPageComponent } from '../car-page/car-page.component';
import { TransparentHeaderComponent } from '../transparent-header/transparent-header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    HeaderComponent,
    FooterComponent,
    PhotoSliderComponent,
    ImageSliderComponent,
    CarPageComponent,
    TransparentHeaderComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  slides: any[] = [
    {
      url: 'assets/ferrari_back.jpg',
      title: 'Ferrari Back',
      description: 'carImage',
    },
    {
      url: 'assets/Lamborghini_huracan_back.jpg',
      title: 'Lamborghini Back',
      description: 'carImage',
    },
    {
      url: 'assets/RR_front.jpg',
      title: 'rolls royce front',
      description: 'carImage',
    },
    {
      url: 'assets/Ferrari.JPG',
      title: 'Ferrari',
      description: 'carImage',
    },
    {
      url: 'assets/Lamborghini_Aventador.JPG',
      title: 'Lamborghini Aventador',
      description: 'carImage',
    },
    {
      url: 'assets/RR.JPG',
      title: 'rolls royce',
      description: 'carImage',
    },
    {
      url: 'assets/Lamborghini_Aventador_2.JPG',
      title: 'Lamborghini Aventador 2',
      description: 'carImage',
    },
    {
      url: 'assets/Lamborghini_Huracan.JPG',
      title: 'Lamborghini Huracan',
      description: 'carImage',
    },
    {
      url: 'assets/Lamborghini_AI.JPG',
      title: 'Lamborghini AI',
      description: 'carImage',
    },
  ];

  imageObject = [
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.',
    },
  ];
}
