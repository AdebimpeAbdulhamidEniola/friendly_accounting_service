import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navigation = () => {
  return (
    <div className="p-4  md:p-6 lg:py-10 lg:px-8 bg-bg-hero text-foreground text-sm md:text-md lg:text-lg flex gap-2.5 ">
      <div className="mr-auto font-medium text-primary text-2xl">Noble Finances</div>
      <Link href="/service" className="text-sm  font-bold self-center">Services</Link>
      <div>
        <Button className="rounded-full">
          <span className="block sm:hidden">Book</span>
          <span className="hidden sm:block">Book an appointment</span>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
