import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-photo-slider',
  standalone: true,
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PhotoSliderComponent implements OnInit {
  @Input() images: Slide[] = [
    { imgSrc: 'assets/Mercedes_GT-blue.JPG.jpg', imgAlt: 'porsche 1' },
    { imgSrc: 'assets/banner-fruits.jpg', imgAlt: 'porsche 2' },
    { imgSrc: 'assets/porsche.jpg', imgAlt: 'porsche 3' },
    { imgSrc: 'assets/porsche.jpg', imgAlt: 'porsche 4' },
    { imgSrc: 'assets/porsche.jpg', imgAlt: 'porsche 5' },
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextPhoto();
    }, 5000);
  }

  nextPhoto(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
