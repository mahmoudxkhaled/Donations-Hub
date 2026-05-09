import type {
  DonationCategory,
  FeatureCard,
  ProcessStep,
  SimpleLink,
  StatItem,
  TrustBarItem,
  UserRole,
  ValidationNode,
} from '../models/masajid-work.model';

export const MW_LANG_STORAGE_KEY = 'mw.lang';

/** Base path for this landing feature (must match `app-routing` lazy path). */
export const MASAJID_WORK_ROUTE_PATH = '/masajid-work';

const img = (file: string) => `assets/images/masajid-work/${file}`;

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
  { icon: 'no_accounts', labelKey: 'masajidWork.trustBar.noCash' },
  { icon: 'id_card', labelKey: 'masajidWork.trustBar.verifiedReps' },
  { icon: 'photo_camera', labelKey: 'masajidWork.trustBar.proof' },
  { icon: 'groups', labelKey: 'masajidWork.trustBar.community' },
];

export const STATS: StatItem[] = [
  { target: 120, suffix: '+', labelKey: 'masajidWork.stats.facilities' },
  { target: 850, suffix: '+', labelKey: 'masajidWork.stats.donors' },
  { target: 300, suffix: '+', labelKey: 'masajidWork.stats.requests' },
  { target: 190, suffix: '+', labelKey: 'masajidWork.stats.fulfilled' },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: 'fact_check',
    titleKey: 'masajidWork.features.verifiedTitle',
    descriptionKey: 'masajidWork.features.verifiedDesc',
  },
  {
    icon: 'inventory_2',
    titleKey: 'masajidWork.features.physicalTitle',
    descriptionKey: 'masajidWork.features.physicalDesc',
  },
  {
    icon: 'task_alt',
    titleKey: 'masajidWork.features.proofTitle',
    descriptionKey: 'masajidWork.features.proofDesc',
  },
  {
    icon: 'visibility',
    titleKey: 'masajidWork.features.validationTitle',
    descriptionKey: 'masajidWork.features.validationDesc',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    titleKey: 'masajidWork.process.s1Title',
    subtitleKey: 'masajidWork.process.s1Sub',
  },
  {
    number: 2,
    titleKey: 'masajidWork.process.s2Title',
    subtitleKey: 'masajidWork.process.s2Sub',
  },
  {
    number: 3,
    titleKey: 'masajidWork.process.s3Title',
    subtitleKey: 'masajidWork.process.s3Sub',
  },
  {
    number: 4,
    titleKey: 'masajidWork.process.s4Title',
    subtitleKey: 'masajidWork.process.s4Sub',
  },
  {
    number: 5,
    titleKey: 'masajidWork.process.s5Title',
    subtitleKey: 'masajidWork.process.s5Sub',
  },
  {
    number: 6,
    titleKey: 'masajidWork.process.s6Title',
    subtitleKey: 'masajidWork.process.s6Sub',
  },
  {
    number: 7,
    titleKey: 'masajidWork.process.s7Title',
    subtitleKey: 'masajidWork.process.s7Sub',
    highlight: true,
  },
];

export const USER_ROLES: UserRole[] = [
  {
    icon: 'mosque',
    titleKey: 'masajidWork.roles.facilityTitle',
    descriptionKey: 'masajidWork.roles.facilityDesc',
    actionLabelKey: 'masajidWork.roles.facilityBtn',
  },
  {
    icon: 'volunteer_activism',
    titleKey: 'masajidWork.roles.donorTitle',
    descriptionKey: 'masajidWork.roles.donorDesc',
    actionLabelKey: 'masajidWork.roles.donorBtn',
  },
  {
    icon: 'storefront',
    titleKey: 'masajidWork.roles.vendorTitle',
    descriptionKey: 'masajidWork.roles.vendorDesc',
    actionLabelKey: 'masajidWork.roles.vendorBtn',
  },
  {
    icon: 'handshake',
    titleKey: 'masajidWork.roles.charityTitle',
    descriptionKey: 'masajidWork.roles.charityDesc',
    actionLabelKey: 'masajidWork.roles.charityBtn',
  },
];

export const DONATION_CATEGORIES: DonationCategory[] = [
  { imageSrc: img('donate-carpets.jpg'), labelKey: 'masajidWork.donate.carpetsLabel', altKey: 'masajidWork.donate.carpetsAlt' },
  { imageSrc: img('donate-fans-ac.jpg'), labelKey: 'masajidWork.donate.fansLabel', altKey: 'masajidWork.donate.fansAlt' },
  { imageSrc: img('donate-sound.jpg'), labelKey: 'masajidWork.donate.soundLabel', altKey: 'masajidWork.donate.soundAlt' },
  { imageSrc: img('donate-furniture.jpg'), labelKey: 'masajidWork.donate.furnitureLabel', altKey: 'masajidWork.donate.furnitureAlt' },
  { imageSrc: img('donate-cleaning.jpg'), labelKey: 'masajidWork.donate.cleaningLabel', altKey: 'masajidWork.donate.cleaningAlt' },
  { imageSrc: img('donate-maintenance.jpg'), labelKey: 'masajidWork.donate.maintenanceLabel', altKey: 'masajidWork.donate.maintenanceAlt' },
  { imageSrc: img('donate-painting.jpg'), labelKey: 'masajidWork.donate.paintingLabel', altKey: 'masajidWork.donate.paintingAlt' },
  { imageSrc: img('donate-lighting.jpg'), labelKey: 'masajidWork.donate.lightingLabel', altKey: 'masajidWork.donate.lightingAlt' },
];

export const VALIDATION_NODES: ValidationNode[] = [
  { icon: 'shield', labelKey: 'masajidWork.validation.identity', variant: 'primary' },
  { icon: 'add_photo_alternate', labelKey: 'masajidWork.validation.visualProof', variant: 'primary' },
  { icon: 'verified_user', labelKey: 'masajidWork.validation.localValidation', variant: 'accent' },
];

export const FOOTER_QUICK_LINKS: SimpleLink[] = [
  { labelKey: 'masajidWork.footer.aboutUs', href: '#about' },
  { labelKey: 'masajidWork.footer.howItWorks', href: '#how-it-works' },
  { labelKey: 'masajidWork.footer.trust', href: '#trust-validation' },
  { labelKey: 'masajidWork.footer.facilityReg', href: '#about' },
];

export const FOOTER_LEGAL_LINKS: SimpleLink[] = [
  { labelKey: 'masajidWork.footer.vendorPortal', href: '#about' },
  { labelKey: 'masajidWork.footer.privacy', href: '#footer' },
];

export const HERO_IMAGE = img('hero-mosque.jpg');
