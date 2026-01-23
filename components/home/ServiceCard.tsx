"use client"

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";


type ServiceTag = {
  id: string;
  label: string;
};

export type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: ServiceTag[];
  imageWidth: number;
  imageHeight: number;
  className?: string;
  reverse?: boolean;
};

const ServiceCard = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  description,
  className,
  tags,
  reverse = false,  // default false
}: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop version - with animations */}
      <Card 
        ref={ref}
        className={cn(
          "bg-hero/60 lg:w-[80%] pt-15 md:pr-5 hidden lg:block", 
          className,
          isVisible && (reverse ? "slide-in-right" : "slide-in-left")
        )}
      >
        <CardContent className={cn(
          "flex gap-5 md:gap-10 flex-col md:flex-row",  
          reverse && "md:flex-row-reverse"  
        )}>
          
          <div className="md:basis-1/2 flex justify-center">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={imageWidth} 
              height={imageHeight} 
            />
          </div>

          {/* Content */}
          <div className="md:basis-1/2 space-y-12">
            <h3 className="text-[40px]">{title}</h3>
            <p className="text-[16px]">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-[8px] bg-white p-3 text-[12px] font-medium shadow-sm"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Mobile version - no animations */}
      <Card className={cn(
        "bg-hero/60 w-full pt-15 md:pr-5 lg:hidden", 
        className
      )}>
        <CardContent className={cn(
          "flex gap-5 md:gap-10 flex-col md:flex-row",  
          reverse && "md:flex-row-reverse"  
        )}>
          
          <div className="md:basis-1/2 flex justify-center">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={imageWidth} 
              height={imageHeight} 
            />
          </div>

          {/* Content */}
          <div className="md:basis-1/2 space-y-12">
            <h3 className="text-[40px]">{title}</h3>
            <p className="text-[16px]">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-[8px] bg-white p-3 text-[12px] font-medium shadow-sm"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceCard;
