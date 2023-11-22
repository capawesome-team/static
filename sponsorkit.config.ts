import { BadgePreset, Sponsorship, defineConfig, presets } from 'sponsorkit'

const OC_SPONSORSHIPS: Sponsorship[] = [
  {
    monthlyDollars: 300,
    sponsor: {
      avatarUrl: 'https://images.opencollective.com/appscreens/62776aa/avatar/256.png?height=256',
      login: 'appscreens',
      name: 'AppScreens',
      type: 'Organization',
      websiteUrl: 'https://appscreens.com/?_locale=en&utm_source=github&utm_medium=referral&utm_campaign=capawesome&gclid=capawesome',
      linkUrl: 'https://opencollective.com/appscreens',
    },
    isOneTime: false,
  },
  {
    monthlyDollars: 50,
    sponsor: {
      avatarUrl: 'https://images.opencollective.com/nfc21/9d1232a/logo/256.png?height=256',
      login: 'nfc21',
      name: 'NFC 21',
      type: 'Organization',
      websiteUrl: 'https://nfc21.de/',
      linkUrl: 'https://opencollective.com/nfc21',
    },
    isOneTime: false
  },
  {
    monthlyDollars: 50,
    sponsor: {
      avatarUrl: 'https://images.opencollective.com/erik-geers/avatar/256.png?height=256',
      login: 'erikgeers',
      name: 'Erik Geers',
      type: 'User',
      linkUrl: 'https://opencollective.com/erik-geers',
    },
    isOneTime: false
  },
  {
    monthlyDollars: 500,
    sponsor: {
      avatarUrl: 'https://images.opencollective.com/colorful-casting/4e2c691/logo/256.png?height=256',
      login: 'colorful-casting',
      name: 'Colorful Casting',
      type: 'Organization',
      linkUrl: 'https://opencollective.com/colorful-casting',
    },
    isOneTime: false
  }
]

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
    },
  ],
  onSponsorsFetched: (sponsors: Sponsorship[]) => {
    sponsors = [...sponsors, ...OC_SPONSORSHIPS]
    return sponsors
  }
})
