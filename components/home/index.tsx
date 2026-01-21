import ClientSection from "./ClientSection"
import Description from "./Description"
import ServicesSection from "./ServiceSection"
import ImageSection from "./ImageSection"
import WhyUsSection from "./WhyUsSection"
import CustomPlan from "./CustomPlan"
import CallToActionSection from "./CallToActionSection"

const MainBody = () => {
    return(
      <>
      <Description />
      <ServicesSection />
      <ClientSection />
      <ImageSection />
      <WhyUsSection />
      <CustomPlan />
      <CallToActionSection />

      </>
    )
}

export default MainBody
