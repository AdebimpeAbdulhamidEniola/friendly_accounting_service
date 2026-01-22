import { Button } from "../ui/button"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Upper Part of Footer */}
        <div className="flex flex-col gap-6 mb-8">
          {/* Desktop: all in one row */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Left side - Company info */}
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold">Noble Finances</h3>
            </div>

            {/* Right side - Services and CTA */}
            <div className="flex items-center gap-6">
              <Link 
                href="/service" 
                className="text-primary-foreground hover:text-primary-foreground/80 cursor-pointer transition-colors"
              >
                Services
              </Link>
             
             <Link href="/book">
               <Button className="bg-white text-primary rounded-3xl hover:bg-card/90 ">Book An Appointment</Button>
             </Link>
            </div>
          </div>

          {/* Tablet: all in one row with justify-between */}
          <div className="hidden  md:hidden justify-between items-center w-full">
            {/* Left side - Company info */}
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold">Noble Finances</h3>
            </div>

            {/* Middle - Services */}
            <Link 
              href="/service" 
              className="text-primary-foreground hover:text-primary-foreground/80 cursor-pointer transition-colors"
            >
              Services
            </Link>
             
            {/* Right side - Book Appointment */}
            <Link href="/book">
              <Button className="bg-white text-primary rounded-3xl hover:bg-card/90 ">Book An Appointment</Button>
            </Link>
          </div>

          {/* Mobile: two rows */}
          <div className="flex flex-col gap-6 sm:hidden">
            {/* First row - Noble Finance */}
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold">Noble Finances</h3>
            </div>

            {/* Second row - Services and Book Appointment */}
            <div className="flex items-center gap-3 w-full">
              <Link 
                href="/service" 
                className="text-primary-foreground hover:text-primary-foreground/80 cursor-pointer transition-colors"
              >
                Services
              </Link>
             
             <Link href="/book" className="ml-auto">
               <Button className="bg-white text-primary rounded-3xl hover:bg-card/90 ">Book An Appointment</Button>
             </Link>
            </div>
          </div>
        </div>

        {/* Lower Part of Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 ">
          <div className="mb-4 md:mb-0">
            <h4 className="text-primary-foreground text-lg font-semibold mb-1">
              Financial Clarity You Can Trust
            </h4>
            <p className="text-primary-foreground/80 text-sm max-w-md">
              Trusted financial guidance for every stage of life and business since 1987
            </p>
          </div>
          <div className="text-primary-foreground/70 text-sm">
            &copy; 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;