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

const img = (file: string) => `assets/images/masajid-work/${file}`;

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
  { icon: 'no_accounts', label: 'No cash handled by platform' },
  { icon: 'id_card', label: 'Verified facility representatives' },
  { icon: 'photo_camera', label: 'Fulfillment proof required' },
  { icon: 'groups', label: 'Community validation after completion' },
];

export const STATS: StatItem[] = [
  { value: '120+', label: 'Registered Facilities' },
  { value: '850+', label: 'Active Donors' },
  { value: '300+', label: 'Donation Requests' },
  { value: '190+', label: 'Fulfilled Donations' },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: 'fact_check',
    title: 'Verified Facilities',
    description:
      'Rigorous vetting process for all masjid representatives and facility locations.',
  },
  {
    icon: 'inventory_2',
    title: 'Physical Donations Only',
    description:
      'Focusing strictly on tangible assets to ensure 100% of donor intent reaches the site.',
  },
  {
    icon: 'task_alt',
    title: 'Fulfillment Proof',
    description:
      'Donors and vendors upload visual confirmation upon delivery and installation.',
  },
  {
    icon: 'visibility',
    title: 'Later Validation',
    description:
      'The local community confirms the presence and utility of the donated item.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: 1, title: 'Request submission', subtitle: 'Masjid lists needed item' },
  { number: 2, title: 'Admin review', subtitle: 'Need verification check' },
  { number: 3, title: 'Donor browse', subtitle: 'Explore local needs' },
  { number: 4, title: 'Donor acceptance', subtitle: 'Commitment to fulfill' },
  { number: 5, title: 'Fulfillment & Proof', subtitle: 'Item delivery & photo' },
  { number: 6, title: 'Facility confirmation', subtitle: 'Representative receipt' },
  {
    number: 7,
    title: 'Community validation',
    subtitle: 'Final trust seal',
    highlight: true,
  },
];

export const USER_ROLES: UserRole[] = [
  {
    icon: 'mosque',
    title: 'Facility Representative',
    description:
      'Register your masjid to post verified physical needs and infrastructure requirements.',
    actionLabel: 'Register Facility',
  },
  {
    icon: 'volunteer_activism',
    title: 'Donor',
    description: 'Find and fulfill specific physical needs directly for communities in your area.',
    actionLabel: 'Register as Donor',
  },
  {
    icon: 'storefront',
    title: 'Vendor',
    description: 'Partner with donors to supply and install specialized equipment for masajid.',
    actionLabel: 'Join as Vendor',
  },
  {
    icon: 'handshake',
    title: 'Charity Rep',
    description:
      'Monitor and coordinate large-scale physical donation campaigns across multiple facilities.',
    actionLabel: 'Join Hub',
  },
];

export const DONATION_CATEGORIES: DonationCategory[] = [
  { imageSrc: img('donate-carpets.jpg'), label: 'Carpets', alt: 'Premium prayer carpets' },
  { imageSrc: img('donate-fans-ac.jpg'), label: 'Fans & AC', alt: 'Ceiling fans and air conditioning' },
  { imageSrc: img('donate-sound.jpg'), label: 'Sound Systems', alt: 'Mosque sound system equipment' },
  { imageSrc: img('donate-furniture.jpg'), label: 'Furniture', alt: 'Wooden furniture for masjid' },
  { imageSrc: img('donate-cleaning.jpg'), label: 'Cleaning Supplies', alt: 'Cleaning supplies for masjid' },
  { imageSrc: img('donate-maintenance.jpg'), label: 'Maintenance', alt: 'Maintenance work and tools' },
  { imageSrc: img('donate-painting.jpg'), label: 'Painting', alt: 'Interior painting renovation' },
  { imageSrc: img('donate-lighting.jpg'), label: 'Lighting', alt: 'Modern lighting fixtures' },
];

export const VALIDATION_NODES: ValidationNode[] = [
  { icon: 'shield', label: 'Vetted Identity', variant: 'primary' },
  { icon: 'add_photo_alternate', label: 'Visual Proof', variant: 'primary' },
  { icon: 'verified_user', label: 'Local Validation', variant: 'accent' },
];

export const FOOTER_QUICK_LINKS: SimpleLink[] = [
  { label: 'About Us', href: '#' },
  { label: 'How it Works', href: '#' },
  { label: 'Trust & Validation', href: '#' },
  { label: 'Facility Registration', href: '#' },
];

export const FOOTER_LEGAL_LINKS: SimpleLink[] = [
  { label: 'Vendor Portal', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

export const HERO_IMAGE = img('hero-mosque.jpg');
