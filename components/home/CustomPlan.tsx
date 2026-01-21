import {Card,CardHeader,CardContent, CardTitle} from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image"

const CustomPlan = () => {

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Card className="w-[295px] md:w-[350px] lg:w-[590px] bg-primary space-y-7 text-muted py-15 px-10 md:px-0">
                <CardHeader>
                    <CardTitle className="text-muted text-[28px] md:text-[34px] lg:text-[40px] font-normal">A custom built plan for you</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted text-lg">At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
                    <Button className="bg-white text-primary rounded-3xl mt-5">Learn More</Button>
                </CardContent>
            </Card>

            <Image src="/images/stack-woods.png" alt="Stack Woods" width={590} height={375} className="w-[295px] md:w-[350px] lg:w-[590px] h-auto -order-1 md:order-0" />
        </div>
    )

}

export default CustomPlan