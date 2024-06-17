import { Component, OnInit } from '@angular/core';

interface BannerImage {
  url: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: BannerImage[] = [
    { url: `./porsche.jpg` },
  ];
  currentImage: BannerImage | null = null;
  currentIndex = 0;

  ngOnInit(): void {
    this.showImage();
    setInterval(() => {
      this.showImage();
    }, 5000);
  }

  showImage(): void {
    this.currentImage = this.images[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  onClick(): void {
    this.showImage();
  }
}
