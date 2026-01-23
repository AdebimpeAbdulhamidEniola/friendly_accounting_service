import Image from "next/image";

type OnBoardingStep = {
  step: number,
  description: string,
  title: string,
  image: string,
  alt: string
}

const onboardingSteps: OnBoardingStep[] = [
  {
    step: 1,
    title: "Our tax advisors write you a plan",
    description: "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
    image: "/images/pencil.png",
    alt: "Two pencils"
  },
  {
    step: 2,
    title: "Onboard us to your finances",
    description: "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
    image: "/images/money.png",
    alt: "Hand holding various currencies"
  },
  {
    step: 3,
    title: "We solve the rest",
    description: "Maintain organized financial records and provide clear reports to support business growth and financial health.",
    image: "/images/rubik.png",
    alt: "Rubik's cube"
  }
];

const OnBoarding = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 mx-auto">
      <div className="space-y-4 mb-12">
        <p className="text-[15px] font-regular text-left text-foreground">How it works</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-left text-foreground font-medium">A simple onboarding</h2>
        <p className="text-foreground text-[12px] ">Serving individuals and small businesses since 1987</p>
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        {onboardingSteps.map(onBoardingStep => (
          <div key={onBoardingStep.step} className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <p className="font-extralight text-[80px] text-foreground md:text-[112px] lg:text-[152px]  leading-none">
                {onBoardingStep.step}
              </p>
            </div>
            <div className="flex-1 max-w-2xl">
              <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
                {onBoardingStep.title}
              </h3>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                {onBoardingStep.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src={onBoardingStep.image} 
                alt={onBoardingStep.alt}
                width={373}
                height={373}
                className="w-[279px] md:w-[592px] lg:w-[372px] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default OnBoarding;
