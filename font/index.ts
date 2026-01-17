// app/layout.tsx (App Router) or pages/_app.tsx (Pages Router)
import { Work_Sans,DM_Sans} from 'next/font/google'

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',  
  display: 'swap',
})


export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify the weights you need
  display: 'swap', // Prevents layout shift
  variable: '--font-dm-sans', // Define a CSS variable name
});

