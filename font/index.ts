// app/layout.tsx (App Router) or pages/_app.tsx (Pages Router)
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',  
})

export default workSans