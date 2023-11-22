import { BadgePreset, defineConfig, presets } from 'sponsorkit'

const pastPreset: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: pastPreset,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Individual Insider',
      monthlyDollars: 15,
      preset: presets.base,
    },
    {
      title: 'Business Insider',
      monthlyDollars: 50,
      preset: presets.base,
    },
    {
      title: 'Bronze Sponsor',
      monthlyDollars: 100,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsor',
      monthlyDollars: 250,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsor',
      monthlyDollars: 500,
      preset: presets.xl,
    }
  ]
})