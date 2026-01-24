import { Button } from "../ui/button"
import Image from "next/image"

const BookingCallToAction = () => {
    return (
        <div className="bg-hero/50 px-3 py-12 md:px-10 md:py-15 lg:py-24">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-16">
                {/* Image Section */}
                <Image
                    src="/images/Clock.png"
                    width={510}
                    height={510}
                    alt="Clock"
                    className="w-[343px] md:w-[273px] lg:w-[510px] h-auto"
                />
                
                {/* Text Section */}
                <div className="flex flex-col items-start">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-foreground mb-4 lg:mb-6 font-normal leading-tight">
                      Book an <br />Appointment now
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-muted-foreground mb-8 lg:mb-10 max-w-md">
                        Serving individuals and small businesses since 1987
                    </p>
                    <Button className="p-6 px-8 rounded-full">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BookingCallToAction