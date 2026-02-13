import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSectionComponent {
  protected readonly featuresList = [
    {
      icon: '/assets/images/icon-whole-food-recipes.svg',
      title: 'Whole-food recipes',
      description: 'Each dish uses everyday, unprocessed ingredients.',
    },
    {
      icon: '/assets/images/icon-minimum-fuss.svg',
      title: 'Minimum fuss',
      description: 'All recipes are designed to make eating healthy quick and easy.',
    },
    {
      icon: '/assets/images/icon-search-in-seconds.svg',
      title: 'Search in seconds',
      description: 'Filter by name or ingredient and jump straight to the recipe you need.',
    },
  ];
}
