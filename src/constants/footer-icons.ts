import TwitterIcon from '@/icons/twitter-icon.astro'
import DribleIcon from '@/icons/drible-icon.astro'
import FacebookIcon from '@/icons/facebook-icon.astro'
import InstagramIcon from '@/icons/instagram-icon.astro'
import type { JSX } from 'astro/jsx-runtime'

interface Icons {
  icon: (props: any) => JSX.Element
  alt: string
}
type FooterIcons = Icons[]

export const FOOTER_ICONS: FooterIcons = [
  {
    icon: TwitterIcon,
    alt: 'Twitter'
  },
  {
    icon: DribleIcon,
    alt: 'Drible'
  },
  {
    icon: FacebookIcon,
    alt: 'Facebook'
  },
  {
    icon: InstagramIcon,
    alt: 'Instagram'
  }
]
