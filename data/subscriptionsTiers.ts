export type SubscriptionTierT = {
  name: string;
  priceInCents: number;
  stripePriceId: string | undefined;
  hasMostPopularBadge: boolean;
  canCustomWebsite: boolean;
  canCustomDomain: boolean;
  canRemoveBranding: boolean;
  hasUnlimitedDivers: boolean;
  hasUnlimitedStuff: boolean;
  hasUnlimitedEquipment: boolean;
};

const subscriptionTiers: Record<string, SubscriptionTierT> = {
  Free: {
    name: "Free",
    priceInCents: 0,
    stripePriceId: undefined,
    canCustomWebsite: false,
    canCustomDomain: false,
    canRemoveBranding: false,
    hasMostPopularBadge: false,
    hasUnlimitedDivers: true,
    hasUnlimitedStuff: true,
    hasUnlimitedEquipment: true,
  },
  Basic: {
    name: "Basic",
    priceInCents: 9.99 * 100,
    stripePriceId: process.env.STRIPE_PRICE_ID_BASIC,
    canCustomWebsite: true,
    canCustomDomain: false,
    canRemoveBranding: false,
    hasMostPopularBadge: false,
    hasUnlimitedDivers: true,
    hasUnlimitedStuff: true,
    hasUnlimitedEquipment: true,
  },
  Standard: {
    name: "Standard",
    priceInCents: 19.99 * 100,
    stripePriceId: process.env.STRIPE_PRICE_ID_STANDARD,
    canCustomWebsite: true,
    canCustomDomain: true,
    canRemoveBranding: false,
    hasMostPopularBadge: true,
    hasUnlimitedDivers: true,
    hasUnlimitedStuff: true,
    hasUnlimitedEquipment: true,
  },
  Pro: {
    name: "Pro",
    priceInCents: 29.99 * 100,
    stripePriceId: process.env.STRIPE_PRICE_ID_PRO,
    canCustomWebsite: true,
    canCustomDomain: true,
    canRemoveBranding: true,
    hasMostPopularBadge: false,
    hasUnlimitedDivers: true,
    hasUnlimitedStuff: true,
    hasUnlimitedEquipment: true,
  },
} as const;

export const SubscriptionTiersInOrder: SubscriptionTierT[] = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Pro,
] as const;
