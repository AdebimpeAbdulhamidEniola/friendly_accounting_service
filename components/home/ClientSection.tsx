import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

type Client = {
  value: string;
  title: string;
  location: string;
  testimonial: string;
  name: string;
  src: string;
  imageWidth: number;
  imageHeight: number;
};

const clients: Client[] = [
  {
    value: "graphic-designer",
    title: "Graphic Designer",
    location: "Ontario, Canada",
    testimonial:
      "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.",
    name: "Taylor M., 28 years old",
    src: "/images/firstperson.jpg",
    imageWidth: 93,
    imageHeight: 97,
  },
  {
    value: "commercial-photographer",
    title: "Commercial Photographer",
    location: "Ontario, Canada",
    testimonial:
      "From invoicing to tax prep, Noble Finance has been a game-changer for my freelance",
    name: "Markus N., 31 years old",
    src: "/images/secondperson.jpg",
    imageWidth: 93,
    imageHeight: 97,
  },
  {
    value: "stylist",
    title: "Stylist",
    location: "Austin Texas",
    testimonial:
      "I used to worry about missing deductions but with Noble Finance, I know I'm maximizing my savings",
    name: "Margaret L., 24 years old",
    src: "/images/thirdperson.png",
    imageWidth: 47,
    imageHeight: 49,
  },
];

const ClientSection = () => {
  return (
    <div className="w-full bg-background  py-8 md:py-16 px-4 md:px-8 mx-auto">
      <h2 className="text-[32px] md:text-5xl font-light text-foreground text-center mb-5">
        Hear From Our Happy Clients
      </h2>
      
      <Tabs defaultValue="graphic-designer" className="md:flex md:flex-row gap-0 max-w-7xl mx-auto">
        <TabsList className="flex flex-row md:flex-col items-stretch bg-transparent gap-0 w-full md:w-85 h-fit overflow-x-auto">
          {clients.map((client, index) => (
            <TabsTrigger 
              key={client.value} 
              value={client.value} 
              className="data-[state=active]:bg-primary data-[state=inactive]:bg-transparent text-left rounded-none border-0 p-0 data-[state=active]:text-primary-foreground data-[state=inactive]:text-foreground rounded-lg flex-shrink-0 min-w-[100px] md:min-w-[120px]"
            >
              <div className="w-full px-4 py-4 md:px-8 md:py-6">
                <hr className="border-t-primary data-[state=active]:border-primary-foreground data-[state=inactive]:border-border mb-2" />
                <p className="text-[12px] md:text-lg data-[state=active]:text-primary-foreground data-[state=inactive]:text-foreground font-normal mb-1 whitespace-normal">
                  {client.title}
                </p>
                <p className="text-xs data-[state=active]:text-primary-foreground data-[state=inactive]:text-muted-foreground font-light whitespace-normal">
                  {client.location}
                </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1 md:ml-15 md:border-l border-border md:pl-20 pl-0 py-12">
          {clients.map((client) => (
            <TabsContent key={client.value} value={client.value} className="mt-0">
              <div className="space-y-8">
                <p className="text-3xl md:text-3xl font-light text-foreground leading-relaxed text-lg md:text-3xl">
                  {`"${client.testimonial}"`}
                </p>
                <div className="flex items-center gap-4">
                  <Image 
                    src={client.src} 
                    width={client.imageWidth} 
                    height={client.imageHeight} 
                    alt="Client photo"
                    className="rounded-full object-cover w-12 h-12 md:w-auto md:h-auto"
                  />
                  <span className="text-base text-foreground">{client.name}</span>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ClientSection;