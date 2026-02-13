import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSectionComponent {}
