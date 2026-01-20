import ClientSection from "./ClientSection"
import Description from "./Description"
import ServicesSection from "./ServiceSection"
import OfferSection from "./OfferSection"


const MainBody = () => {
    return(
      <>
      <Description />
      <ServicesSection />
      <ClientSection />
      <OfferSection/>
      </>
    )
}

export default MainBody