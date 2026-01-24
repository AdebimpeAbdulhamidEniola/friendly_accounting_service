import React from 'react'
import { dmSans } from '@/font'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Description = () => {
  return (
    <div className='space-y-5 text-center lg:px-20 lg:py-55 md:px-12.5 md:py-56.5 px-8 py-55 '>
        <div className={cn("text-foreground font-medium text-[15px]", dmSans.variable)}>Services</div>
        <p className="text-[60px]"> Let us handle the numbers so you can handle your success</p>
        <p>Serving individuals and small businesses since 1987</p>
        <Link href="/booking">
            <Button className='rounded-full'>Schedule a call</Button>
        </Link>
    </div>
  )
}

export default Description
