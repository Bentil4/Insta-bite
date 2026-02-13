import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-real-life-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './real-life-section.html',
  styleUrl: './real-life-section.css',
})
export class RealLifeSectionComponent {}
