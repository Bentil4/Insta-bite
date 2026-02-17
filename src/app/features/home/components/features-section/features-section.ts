import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FEATURES_LIST } from '../../../../shared/constants/features.constants';

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSectionComponent {
  protected readonly featuresList = FEATURES_LIST;
}
