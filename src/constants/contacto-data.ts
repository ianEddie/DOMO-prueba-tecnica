import GmailIcon from '@/icons/gmail-icon.astro'
import LinkeinIcon from '@/icons/linkedin-icon.astro'
import TelephoneIcon from '@/icons/telephone-icon.astro'
import WhatsappIcon from '@/icons/whatsapp-icon.astro'
import WebIcon from '@/icons/web-icon.astro'
import type { JSX } from 'astro/jsx-runtime'

interface Contact {
  icon: (props: any) => JSX.Element
  value: string
  name: string
}
type ContactData = Contact[]

export const CONTACTO = [
  {
    icon: GmailIcon,
    value: 'mailto:ianeddie2@gmail.com?Subject=DOMO%prueba%tecnica',
    name: 'ianeddie2@gmail.com'
  },
  {
    icon: LinkeinIcon,
    value: 'https://www.linkedin.com/in/ian-nicolas-ortiz',
    name: 'Linkedin'
  },
  {
    icon: TelephoneIcon,
    value: 'tel:+54 1173615762',
    name: 'Telefono'
  },
  {
    icon: WhatsappIcon,
    value: 'https://wa.me/541173615762',
    name: 'Whatsapp'
  },
  {
    icon: WebIcon,
    value: 'https://ian-ortiz-developer.vercel.app/',
    name: 'Portfolio'
  }
]
