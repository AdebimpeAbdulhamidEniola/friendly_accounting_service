import Image from "next/image";
import { Button } from "../ui/button";

const ServicesHero = () => {
  return (
    <div className="px-2 py-20 bg-white lg:px-20 lg:py-20 md:px-12.5 md:py-50">
      {/* Flex Container */}
      <div className="flex lg:gap-50 md:gap-10 flex-col md:flex-row">
        {/* First Flex - Text Content */}
        <div className="space-y-8">
          <h1 className="text-foreground text-[40px] md:text-[80px] font-normal">
            Your Financial Journey, Clearly Defined
          </h1>

          <p className="text-[16px] text-foreground">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>

          <Button className="rounded-full">
            <span>Connect with our experts</span>
          </Button>
        </div>

        {/* Second Flex - Image */}
        <div className="self-center lg:mt-[-7em] -order-1 md:order-1">
          <Image
            src="/images/services.png"
            alt="Financial services laptop and coins"
            width={320}
            height={254.82}
            className="w-[295px] md:w-[320px] lg:w-[560px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
