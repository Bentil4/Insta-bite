import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CtaSectionComponent } from '../home/components/cta-section/cta-section';
import { COMPANY_MISSION, COOKING_PHILOSOPHY, COMMUNITY_IMPACT } from './constants/about.constants';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CtaSectionComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  protected readonly companyMission = COMPANY_MISSION;
  protected readonly cookingPhilosophy = COOKING_PHILOSOPHY;
  protected readonly communityImpact = COMMUNITY_IMPACT;
}
