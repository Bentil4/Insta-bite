import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly socialMediaLinks = [
    {
      label: 'Follow us on Instagram',
      icon: '/assets/images/icon-instagram.svg',
      url: 'https://instagram.com',
    },
    {
      label: 'Follow us on Bluesky',
      icon: '/assets/images/icon-bluesky.svg',
      url: 'https://bsky.app',
    },
    {
      label: 'Follow us on TikTok',
      icon: '/assets/images/icon-tiktok.svg',
      url: 'https://tiktok.com',
    },
  ];
}
