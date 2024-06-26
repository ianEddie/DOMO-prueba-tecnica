interface HeaderElement {
  name: string
  value: string
  color: string
}
type Header = HeaderElement[]

export const HEADER_DATA: Header = [
  {
    name: 'Home',
    value: '#home',
    color: 'var(--text-color-primary)'
  },
  {
    name: 'Services',
    value: '#services',
    color: 'var(--text-color-secondary)'
  },
  {
    name: 'Technology',
    value: '#technology',
    color: 'var(--text-color-secondary)'
  },
  {
    name: 'Case studies',
    value: '#footer',
    color: 'var(--text-color-secondary)'
  },
  {
    name: 'About',
    value: '#clients',
    color: 'var(--text-color-secondary)'
  },
  {
    name: 'Hire us',
    value: '#footer',
    color: 'var(--text-color-primary)'
  }
]
