import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSectionComponent {}
