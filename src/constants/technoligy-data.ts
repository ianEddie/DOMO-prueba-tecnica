import HtmlIcon from '@/icons/html-icon.astro'
import CssIcon from '@/icons/css-icon.astro'
import SassIcon from '@/icons/sass-icon.astro'
import JsIcon from '@/icons/js-icon.astro'
import AngularIcon from '@/icons/angular-icon.astro'
import PythonIcon from '@/icons/python-icon.astro'
import type { JSX } from 'astro/jsx-runtime'

interface Technology {
  icon: (props: any) => JSX.Element
  alt: string
}
type Technolgies = Technology[]

export const TECHNOLOGY_DATA: Technolgies = [
  {
    icon: HtmlIcon,
    alt: 'HTML5'
  },
  {
    icon: CssIcon,
    alt: 'CSS3'
  },
  {
    icon: SassIcon,
    alt: 'Sass'
  },
  {
    icon: JsIcon,
    alt: 'JavaScript'
  },
  {
    icon: AngularIcon,
    alt: 'Angular'
  },
  {
    icon: PythonIcon,
    alt: 'Python'
  }
]
