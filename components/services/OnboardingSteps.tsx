
type OnBoardingStep = {
    step: number,
    description: string,
    title: string,
    image:string,
    alt: string
}

const onboardingSteps :OnBoardingStep[] = [
  {
    step: 1,
    title: "Our tax advisors write you a plan",
    description: "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
    image: "/images/pencils.png",
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
    image: "/images/rubiks-cube.png",
    alt: "Rubik's cube"
  }
];

export default onboardingSteps;
