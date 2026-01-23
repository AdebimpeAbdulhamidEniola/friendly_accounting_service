import Image from "next/image";

const ImageSection = () => {
    return (
        <Image 
            src={"/images/cityscape.png"} 
            alt={"Cityscape showing urban financial landscape"} 
            width={1280}
            height={720}
            className="w-full h-auto" 
        />
    )
}

export default ImageSection;
