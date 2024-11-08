import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // 5000ms = 5 seconds for each image
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % 4; // Assuming 4 images
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
