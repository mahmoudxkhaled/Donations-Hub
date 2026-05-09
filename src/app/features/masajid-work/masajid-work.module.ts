import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MasajidWorkRoutingModule } from './masajid-work-routing.module';
import { MasajidWorkLandingComponent } from './pages/masajid-work-landing/masajid-work-landing.component';
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

@NgModule({
  declarations: [
    MasajidWorkLandingComponent,
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
  imports: [CommonModule, TranslateModule.forChild(), MasajidWorkRoutingModule],
})
export class MasajidWorkModule {}
