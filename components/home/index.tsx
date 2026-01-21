import ClientSection from "./ClientSection"
import Description from "./Description"
import ServicesSection from "./ServiceSection"
import ImageSection from "./ImageSection"
import WhyUsSection from "./WhyUsSection"

const MainBody = () => {
    return(
      <>
      <Description />
      <ServicesSection />
      <ClientSection />
      <ImageSection />
      <WhyUsSection />
      </>
    )
}

export default MainBody
