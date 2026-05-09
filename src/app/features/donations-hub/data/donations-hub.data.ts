import type {
  DonationCategory,
  FeatureCard,
  ProcessStep,
  SimpleLink,
  StatItem,
  TrustBarItem,
  UserRole,
  ValidationNode,
} from '../models/donations-hub.model';

export const DH_LANG_STORAGE_KEY = 'donationsHub.lang';

/** Base path for this landing feature (must match `app-routing` lazy path). */
export const DONATIONS_HUB_ROUTE_PATH = '/donations-hub';

const img = (file: string) => `assets/images/donations-hub/${file}`;

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
  { icon: 'no_accounts', labelKey: 'donationsHub.trustBar.noCash' },
  { icon: 'id_card', labelKey: 'donationsHub.trustBar.verifiedReps' },
  { icon: 'photo_camera', labelKey: 'donationsHub.trustBar.proof' },
  { icon: 'groups', labelKey: 'donationsHub.trustBar.community' },
];

export const STATS: StatItem[] = [
  { target: 120, suffix: '+', labelKey: 'donationsHub.stats.facilities' },
  { target: 850, suffix: '+', labelKey: 'donationsHub.stats.donors' },
  { target: 300, suffix: '+', labelKey: 'donationsHub.stats.requests' },
  { target: 190, suffix: '+', labelKey: 'donationsHub.stats.fulfilled' },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: 'fact_check',
    titleKey: 'donationsHub.features.verifiedTitle',
    descriptionKey: 'donationsHub.features.verifiedDesc',
  },
  {
    icon: 'inventory_2',
    titleKey: 'donationsHub.features.physicalTitle',
    descriptionKey: 'donationsHub.features.physicalDesc',
  },
  {
    icon: 'task_alt',
    titleKey: 'donationsHub.features.proofTitle',
    descriptionKey: 'donationsHub.features.proofDesc',
  },
  {
    icon: 'visibility',
    titleKey: 'donationsHub.features.validationTitle',
    descriptionKey: 'donationsHub.features.validationDesc',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    titleKey: 'donationsHub.process.s1Title',
    subtitleKey: 'donationsHub.process.s1Sub',
  },
  {
    number: 2,
    titleKey: 'donationsHub.process.s2Title',
    subtitleKey: 'donationsHub.process.s2Sub',
  },
  {
    number: 3,
    titleKey: 'donationsHub.process.s3Title',
    subtitleKey: 'donationsHub.process.s3Sub',
  },
  {
    number: 4,
    titleKey: 'donationsHub.process.s4Title',
    subtitleKey: 'donationsHub.process.s4Sub',
  },
  {
    number: 5,
    titleKey: 'donationsHub.process.s5Title',
    subtitleKey: 'donationsHub.process.s5Sub',
  },
  {
    number: 6,
    titleKey: 'donationsHub.process.s6Title',
    subtitleKey: 'donationsHub.process.s6Sub',
  },
  {
    number: 7,
    titleKey: 'donationsHub.process.s7Title',
    subtitleKey: 'donationsHub.process.s7Sub',
    highlight: true,
  },
];

export const USER_ROLES: UserRole[] = [
  {
    icon: 'mosque',
    titleKey: 'donationsHub.roles.facilityTitle',
    descriptionKey: 'donationsHub.roles.facilityDesc',
    actionLabelKey: 'donationsHub.roles.facilityBtn',
  },
  {
    icon: 'volunteer_activism',
    titleKey: 'donationsHub.roles.donorTitle',
    descriptionKey: 'donationsHub.roles.donorDesc',
    actionLabelKey: 'donationsHub.roles.donorBtn',
  },
  {
    icon: 'storefront',
    titleKey: 'donationsHub.roles.vendorTitle',
    descriptionKey: 'donationsHub.roles.vendorDesc',
    actionLabelKey: 'donationsHub.roles.vendorBtn',
  },
  {
    icon: 'handshake',
    titleKey: 'donationsHub.roles.charityTitle',
    descriptionKey: 'donationsHub.roles.charityDesc',
    actionLabelKey: 'donationsHub.roles.charityBtn',
  },
];

export const DONATION_CATEGORIES: DonationCategory[] = [
  { imageSrc: img('donate-carpets.jpg'), labelKey: 'donationsHub.donate.carpetsLabel', altKey: 'donationsHub.donate.carpetsAlt' },
  { imageSrc: img('donate-fans-ac.jpg'), labelKey: 'donationsHub.donate.fansLabel', altKey: 'donationsHub.donate.fansAlt' },
  { imageSrc: img('donate-sound.jpg'), labelKey: 'donationsHub.donate.soundLabel', altKey: 'donationsHub.donate.soundAlt' },
  { imageSrc: img('donate-furniture.jpg'), labelKey: 'donationsHub.donate.furnitureLabel', altKey: 'donationsHub.donate.furnitureAlt' },
  { imageSrc: img('donate-cleaning.jpg'), labelKey: 'donationsHub.donate.cleaningLabel', altKey: 'donationsHub.donate.cleaningAlt' },
  { imageSrc: img('donate-maintenance.jpg'), labelKey: 'donationsHub.donate.maintenanceLabel', altKey: 'donationsHub.donate.maintenanceAlt' },
  { imageSrc: img('donate-painting.jpg'), labelKey: 'donationsHub.donate.paintingLabel', altKey: 'donationsHub.donate.paintingAlt' },
  { imageSrc: img('donate-lighting.jpg'), labelKey: 'donationsHub.donate.lightingLabel', altKey: 'donationsHub.donate.lightingAlt' },
];

export const VALIDATION_NODES: ValidationNode[] = [
  { icon: 'shield', labelKey: 'donationsHub.validation.identity', variant: 'primary' },
  { icon: 'add_photo_alternate', labelKey: 'donationsHub.validation.visualProof', variant: 'primary' },
  { icon: 'verified_user', labelKey: 'donationsHub.validation.localValidation', variant: 'accent' },
];

export const FOOTER_QUICK_LINKS: SimpleLink[] = [
  { labelKey: 'donationsHub.footer.aboutUs', href: '#about' },
  { labelKey: 'donationsHub.footer.howItWorks', href: '#how-it-works' },
  { labelKey: 'donationsHub.footer.trust', href: '#trust-validation' },
  { labelKey: 'donationsHub.footer.facilityReg', href: '#about' },
];

export const FOOTER_LEGAL_LINKS: SimpleLink[] = [
  { labelKey: 'donationsHub.footer.vendorPortal', href: '#about' },
  { labelKey: 'donationsHub.footer.privacy', href: '#footer' },
];

export const HERO_IMAGE = img('hero-mosque.jpg');
