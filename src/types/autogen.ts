export enum LinkType {
  OTHER = "Other",
  URL = "URL",
  PHONE = "Phone",
  EMAIL = "Email",
}

export interface C_footerLinks {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface Links {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_header {
  logo?: Image;
  links?: Links[];
}

export interface SiteStream {
  id: string;
  meta: any;
  name: string;
  c_facebook: string;
  c_youtube: string;
  c_twitter: string;
  c_linkedIn: string;
  c_instagram: string;
  c_copyrightMessage: string;
  c_footerLinks: C_footerLinks[];
  c_header: C_header;
  c_nearbySectionAPIKey: string;
  c_searchExperienceAPIKey: string;
  c_reviewsAPIKey: string;
  c_brand: string;
}

export interface C_meta {
  title?: string;
  description?: string;
}

export interface Dm_directoryParents {
  slug?: string;
  name?: string;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export interface Dm_directoryChildren {
  slug?: string;
  name?: string;
  address?: Address;
  hours?: Hours;
}

export interface DirectoryCity {
  id: string;
  uid: string;
  meta: any;
  name: string;
  slug: string;
  c_meta: C_meta;
  dm_directoryParents: Dm_directoryParents[];
  dm_directoryChildren: Dm_directoryChildren[];
}

export interface Dm_directoryChildren_1 {
  slug?: string;
  name?: string;
  dm_baseEntityCount?: string;
  dm_directoryChildren?: any;
}

export interface DirectoryRegion {
  id: string;
  uid: string;
  meta: any;
  name: string;
  slug: string;
  c_meta: C_meta;
  dm_directoryParents: Dm_directoryParents[];
  dm_directoryChildren: Dm_directoryChildren_1[];
}

export interface Dm_directoryChildren_2 {
  slug?: string;
  name?: string;
  dm_baseEntityCount?: string;
  dm_directoryChildren?: any;
}

export interface DirectoryRoot {
  id: string;
  uid: string;
  meta: any;
  name: string;
  slug: string;
  c_meta: C_meta;
  dm_directoryParents: Dm_directoryParents[];
  dm_directoryChildren: Dm_directoryChildren_2[];
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export interface Cta {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_aboutSection {
  image?: Image;
  title?: string;
  description?: string;
  cta?: Cta;
}

export interface C_bannerSection {
  text?: string;
  image?: Image;
}

export interface C_gallerySection {
  title?: string;
  images?: Image[];
}

export interface Cta1 {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface Cta2 {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_heroSection {
  background?: Image;
  cta1?: Cta1;
  cta2?: Cta2;
}

export interface C_nearbySection {
  title?: string;
  linkToLocator?: boolean;
  cta?: Cta;
}

export interface C_promoSection {
  title?: string;
  description?: string;
  image?: Image;
  cta?: Cta;
  googlePlayUrl?: string;
  appStoreUrl?: string;
}

export interface C_reviewsSection {
  title?: string;
}

export interface Dm_directoryParents_1 {
  name?: string;
  slug?: string;
}

export interface C_eventsSection {
  title?: string;
  events?: any;
}

export interface C_faqSection {
  title?: string;
  faqs?: any;
}

export interface C_insightsSection {
  title?: string;
  cta?: string;
  insights?: any;
}

export interface C_featuredProductsSection {
  title?: string;
  products?: any;
}

export interface Ref_reviewsAgg {
  reviewCount?: string;
}

export interface C_teamSection {
  title?: string;
  team?: any;
}

export interface Ref_listings {
  listingUrl?: string;
  publisher?: string;
}

export interface Locations {
  id: string;
  uid: string;
  logo: ComplexImage;
  c_meta: C_meta;
  name: string;
  address: Address;
  mainPhone: any;
  tollFreePhone: any;
  emails: string[];
  yextDisplayCoordinate: Coordinate;
  description: string;
  hours: Hours;
  googlePlaceId: string;
  photoGallery: ComplexImage[];
  additionalHoursText: string;
  services: string[];
  dm_baseEntityCount: string;
  slug: string;
  c_aboutSection: C_aboutSection;
  c_bannerSection: C_bannerSection;
  c_gallerySection: C_gallerySection;
  c_heroSection: C_heroSection;
  c_nearbySection: C_nearbySection;
  c_promoSection: C_promoSection;
  c_reviewsSection: C_reviewsSection;
  dm_directoryParents: Dm_directoryParents_1[];
  c_eventsSection: C_eventsSection;
  c_faqSection: C_faqSection;
  c_insightsSection: C_insightsSection;
  c_featuredProductsSection: C_featuredProductsSection;
  ref_reviewsAgg: Ref_reviewsAgg;
  c_teamSection: C_teamSection;
  ref_listings: Ref_listings;
}

export interface SearchPage {
  id: string;
  uid: string;
  meta: any;
  name: string;
  c_searchTitle: string;
  c_searchSubTitle: string;
  c_searchPlaceholderText: string;
}
