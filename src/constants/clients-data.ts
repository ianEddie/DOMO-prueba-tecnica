import GoogleIcon from '@/icons/google-icon.astro'
import NikeIcon from '@/icons/nike-icon.astro'
import AirbnbIcon from '@/icons/airbnb-icon.astro'
import TnwIcon from '@/icons/tnw-icon.astro'
import ItnewsIcon from '@/icons/itnews-icon.astro'
import type { JSX } from 'astro/jsx-runtime'

interface Client {
  icon: (props: any) => JSX.Element
  alt: string
}
type Clients = Client[]

export const CLIENTS_SPONSORS: Clients = [
  {
    icon: TnwIcon,
    alt: 'Tnw'
  },
  {
    icon: GoogleIcon,
    alt: 'Google'
  },
  {
    icon: NikeIcon,
    alt: 'Nike'
  },
  {
    icon: AirbnbIcon,
    alt: 'Airbnb'
  },
  {
    icon: ItnewsIcon,
    alt: 'It news Africa'
  }
]
