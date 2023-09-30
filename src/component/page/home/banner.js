import banner from "@/assets/banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <figure className="h-[70vh] rounded overflow-hidden flex items-center">
      <Image
        height={400}
        width={600}
        className="rounded w-screen"
        src={banner}
        alt="banner image"
      />
    </figure>
  );
};

export default Banner;
