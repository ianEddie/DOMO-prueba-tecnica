import DesktopIcon from '@/icons/desktop-icon.astro'
import PageIcon from '@/icons/page-icon.astro'
import PencilIcon from '@/icons/ux-icon.astro'
import type { Services } from '@/types'

export const SERVICES_DATA: Services = [
  {
    id: 1,
    icon: PageIcon,
    title: 'Business & Product Concept',
    text: "Analyse bussines and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
  },
  {
    id: 2,
    icon: DesktopIcon,
    title: 'Web & Mobile Development',
    text: 'Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages.'
  },
  {
    id: 3,
    icon: PencilIcon,
    title: 'UX & UI Design',
    text: 'Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.'
  }
]
