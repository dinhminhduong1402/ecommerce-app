import { DM_Sans, Crimson_Text } from 'next/font/google'

const primaryFont = DM_Sans({ 
  subsets: ['latin'],
})

const subFont = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export {primaryFont, subFont}