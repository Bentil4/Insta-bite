import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SOCIAL_MEDIA_LINKS } from '../../shared/constants/social-media.constants';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly socialMediaLinks = SOCIAL_MEDIA_LINKS;
}
