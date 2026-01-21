import {Card,CardHeader,CardContent, CardTitle} from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image"

const CustomPlan = () => {

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-muted-foreground">A custom built plan for you</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
                    <Button className="bg-white">Learn More</Button>
                </CardContent>
            </Card>

            <Image src="/stack-woods.png" alt="Stack Woods" width={590} height={375} className="w-[295px] md:w-[350px] lg:w-[590px] h-auto" />
        </div>
    )

}

export default CustomPlan