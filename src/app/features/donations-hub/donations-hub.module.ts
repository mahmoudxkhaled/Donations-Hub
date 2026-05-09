import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DonationsHubRoutingModule } from './donations-hub-routing.module';
import { DonationsHubLandingComponent } from './pages/donations-hub-landing/donations-hub-landing.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TrustBarSectionComponent } from './components/trust-bar-section/trust-bar-section.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { HowItWorksSectionComponent } from './components/how-it-works-section/how-it-works-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ValidationSectionComponent } from './components/validation-section/validation-section.component';
import { CallToActionSectionComponent } from './components/call-to-action-section/call-to-action-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { ThemePreferenceService } from './services/theme-preference.service';
import { DhScrollRevealDirective } from './directives/dh-scroll-reveal.directive';

@NgModule({
  declarations: [
    DhScrollRevealDirective,
    DonationsHubLandingComponent,
    HeaderSectionComponent,
    HeroSectionComponent,
    TrustBarSectionComponent,
    StatsSectionComponent,
    FeaturesSectionComponent,
    HowItWorksSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ValidationSectionComponent,
    CallToActionSectionComponent,
    FooterSectionComponent,
  ],
  imports: [CommonModule, TranslateModule.forChild(), DonationsHubRoutingModule],
  providers: [ThemePreferenceService],
})
export class DonationsHubModule {}
