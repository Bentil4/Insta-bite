import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { FeaturesSectionComponent } from './components/features-section/features-section';
import { RealLifeSectionComponent } from './components/real-life-section/real-life-section';
import { CtaSectionComponent } from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    FeaturesSectionComponent,
    RealLifeSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
