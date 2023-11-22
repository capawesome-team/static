import { BadgePreset, Sponsorship, defineConfig, presets } from 'sponsorkit'

const SPONSORSHIP_APP_SCREENS: Sponsorship = {
  monthlyDollars: 300,
  sponsor: {
    avatarUrl: 'https://images.opencollective.com/appscreens/62776aa/avatar/256.png?height=256',
    login: 'appscreens',
    name: 'AppScreens',
    type: 'Organization',
    websiteUrl: 'https://appscreens.com/?_locale=en&utm_source=github&utm_medium=referral&utm_campaign=capawesome&gclid=capawesome',
  },
  isOneTime: false,
}

const SPONSORSHIP_NFC21: Sponsorship = {
  monthlyDollars: 50,
  sponsor: {
    avatarUrl: 'https://images.opencollective.com/nfc21/9d1232a/logo/256.png?height=256',
    login: 'nfc21',
    name: 'NFC 21',
    type: 'Organization',
  },
  isOneTime: false
}

const SPONSORSHIP_ERIK_GEERS: Sponsorship = {
  monthlyDollars: 50,
  sponsor: {
    avatarUrl: 'https://images.opencollective.com/erik-geers/avatar/256.png?height=256',
    login: 'erikgeers',
    name: 'Erik Geers',
    type: 'User',
  },
  isOneTime: false
}

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
    },
  ],
  onSponsorsFetched: (sponsors: Sponsorship[]) => {
    sponsors = [...sponsors]
    sponsors.push(SPONSORSHIP_APP_SCREENS)
    sponsors.push(SPONSORSHIP_NFC21)
    sponsors.push(SPONSORSHIP_ERIK_GEERS)
    return sponsors
  }
})