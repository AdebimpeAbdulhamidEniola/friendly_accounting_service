import { Button } from "../ui/button"
import Image from "next/image"

const TaxCallToAction = () => {
    return (
        <div className="bg-[#f4f7f5] px-6 py-12 md:px-16 md:py-15 lg:py-24">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-10">
                {/* Text Section */}
                <div className="flex flex-col items-center lg:items-start ">
                    <h2 className="text-[32px] md:text-[48px] text-center lg:text-[60px] p-4 text-foreground mb-8 lg:mb-10 font-regular leading-none">
                       <span>Say goodbye to</span><br /><span>taxes of the past</span>
                    </h2>
                    <Button className="p-8 rounded-full">
                        Connect with our experts
                    </Button>
                </div>

                
                    <Image
                        src="/images/Calculator.png"
                        width={348}
                        height={360}
                        alt="Calculator"
                        className="w-[280px] md:w-[320px] lg:w-[348px] xl:w-[400px] h-auto -order-1 md:order-1" 
                    />
            </div>
        </div>
    
    )
}

export default TaxCallToAction