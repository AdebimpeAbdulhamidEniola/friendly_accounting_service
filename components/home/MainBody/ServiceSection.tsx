import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "tax-prep",
    title: "Tax Preparation & Filing",
    description:
      "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
    imageSrc: "/images/FirstImage.png",
    imageAlt: "Coins on a tablet",
    imageWidth: 393,
    imageHeight: 293,
    tags: [
      { id: "1099", label: "1099 taxes" },
      { id: "dependents", label: "Dependents" },
      { id: "trust", label: "Trust Taxes" },
    ],
    reverse: false,  
  },
  {
    id: "audit-assistance",
    title: "IRS Audit Assistance",
    description:
      "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
    imageSrc: "/images/Image-2.png",
    imageAlt: "Analytics dashboard",
    imageWidth: 407,
    imageHeight: 268,
    tags: [
      { id: "1099", label: "1099 taxes" },
      { id: "dependents", label: "Dependents" },
      { id: "trust", label: "Trust Taxes" },
    ],
    reverse: true,   // ← second image reversed (image right)
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    description:
      "Maintain organized financial records and provide clear reports to support business growth and financial health.",
    imageSrc: "/images/Image-3.png",
    imageAlt: "Safe and coins",
    imageWidth: 381,
    imageHeight: 320,
    tags: [
      { id: "1099", label: "1099 taxes" },
      { id: "dependents", label: "Dependents" },
      { id: "trust", label: "Trust Taxes" },
    ],
    reverse: false,  
  },
];

const ServicesSection = () => {
  return (
    <section className="space-y-3 md:space-y-5">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          imageHeight={service.imageHeight}
          imageWidth={service.imageWidth}
          tags={service.tags}
          reverse={service.reverse}  
        />
      ))}
    </section>
  );
};

export default ServicesSection;
