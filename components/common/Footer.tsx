import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground w-full">
      {/* Desktop View */}
      <div className="hidden lg:block px-8 py-12">
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Noble Finances</h3>
            <p className="text-lg mb-1">Financial Clarity You Can Trust</p>
            <p className="text-sm opacity-90">
              Trusted financial guidance for every stage of life and business since 1987
            </p>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-6">
              <Link href="/service" className="text-lg hover:opacity-80 transition-opacity">
                Services
              </Link>
              <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Book An Appointment
              </Button>
            </div>
            <p className="text-sm opacity-75">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Noble Finances</h3>
              <p className="text-base mb-1">Financial Clarity You Can Trust</p>
              <p className="text-xs opacity-90">
                Trusted financial guidance for every stage of life and business since 1987
              </p>
            </div>
            
            {/* Right Section */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4">
                <Link href="/service" className="text-base hover:opacity-80 transition-opacity">
                  Services
                </Link>
                <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-sm px-4 py-2">
                  Book An Appointment
                </Button>
              </div>
            </div>
          </div>
          <p className="text-xs opacity-75 text-center">© 2025 All Rights Reserved</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 py-8">
        <div className="max-w-sm mx-auto text-center">
          {/* Top Section - Services and Button */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <Link href="/service" className="text-sm hover:opacity-80 transition-opacity">
              Services
            </Link>
            <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-sm px-4 py-2 w-full max-w-[200px]">
              Book An Appointment
            </Button>
          </div>
          
          {/* Company Info - Now at bottom */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Noble Finances</h3>
            <p className="text-sm mb-1">Financial Clarity You Can Trust</p>
            <p className="text-xs opacity-90">
              Trusted financial guidance for every stage of life and business since 1987
            </p>
          </div>
          
          <p className="text-xs opacity-75">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
