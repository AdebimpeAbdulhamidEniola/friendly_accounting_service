import { User, Users, Building2, LucideIcon } from "lucide-react";

type WhyUsCard = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
};

const whyUsData: WhyUsCard[] = [
  {
    icon: User,
    title: "For Freelancers",
    subtitle: "Simplicity & Control",
    description: "Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love."
  },
  {
    icon: Users,
    title: "For Families",
    subtitle: "Stability & Security",
    description: "From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly."
  },
  {
    icon: Building2,
    title: "For Small Businesses",
    subtitle: "Stability & Security",
    description: "Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business."
  }
];

const WhyUsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - Desktop: side by side, Mobile/Tablet: stacked */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center mb-16 md:mb-40 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-foreground leading-tight tracking-tight flex-1">
            Smart Finance for everyone
          </h2>
          <p className="text-base lg:text-lg text-foreground leading-relaxed tracking-tight flex-1 max-w-2xl">
            At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you're a solo entrepreneur, managing a growing family, or running a small business.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-5">
          {whyUsData.map((card, index) => {
            const Icon = card.icon;
            const isFirstCard = index === 0;
            const isLastCard = index === whyUsData.length - 1;
            
            return (
              <div 
                key={card.title}
                className={`relative pl-0 lg:pl-12 pr-0 ${isLastCard || !isFirstCard ? 'lg:pr-10' : 'lg:pr-0'} py-5 border-t lg:border-t-0 lg:border-l border-primary`}
              >
                <div className="space-y-7">
                  <div className="w-8 h-8">
                    <Icon className="w-full h-full text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-foreground leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-foreground font-normal leading-tight tracking-tight">
                    {card.subtitle}
                  </p>
                  <p className="text-base text-foreground leading-tight tracking-tight">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
