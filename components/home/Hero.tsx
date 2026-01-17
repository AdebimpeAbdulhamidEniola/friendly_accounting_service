import Image from "next/image";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="px-2 py-20 bg-hero lg:px-20 lg:py-20 md:px-12.5 md:py-50 rounded-bl-md rounded-br-md">
      {/* Flex Container */}
      <div className=" flex lg:gap-50 md:gap-10 flex-col md:flex-row">
        {/* First Flex */}
        <div className="space-y-8">
          <h1 className="text-foreground text-[40px] md:text-[80px] font-normal">
            Financial Clarity You Can Always Trust
          </h1>

          <p className="text-[16px] text-foreground">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>

          <Button className="rounded-full">
            <span>Connect with our experts</span>
          </Button>
        </div>

        {/* Second Flex */}
        <div className="self-center lg:mt-[-7em] -order-1 md:order-1">
          <Image
            src="/images/Globe-desktop.svg"
            alt="Financial Globe showing global reach"
            width={429}
            height={412}
           className="w-[343px] md:w-[273px] lg:w-[429px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
