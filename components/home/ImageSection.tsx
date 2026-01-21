import Image from "next/image";


const ImageSection = () => {
    return (
        <Image src={"/images/section-image.png"} 
        alt={"a person typing"} 
        width={1920}
        height={1080}
        className={"w-full h-auto"} 
        />
    )
}

export default ImageSection;