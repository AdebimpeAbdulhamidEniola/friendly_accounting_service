import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full py-16  px-4 md:px-8 bg-[var(--light-gray)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[32px] md:text-[48px] lg:text-[50px] font-normal text-foreground mb-8 leading-tight">
          We believe that tax filing should be seamless, accurate, and stress-free. Get started with Noble Finance today!
        </h2>
        <Button 
          className="bg-primary font-normal  text-primary-foreground px-5 py-6.5 rounded-full text-base md:text-lg hover:bg-primary/90 transition-colors"
          size="default"
        >
          Connect with our experts
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
