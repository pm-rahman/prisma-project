import Image from "next/image";
import image from "@/assets/banner.jpg";

const ItemCard = () => {
  return (
    <div className="border rounded">
      <Image
        height={150}
        width={150}
        className="h-auto rounded w-full"
        src={image}
        alt="item image"
      />
      <div className="p-5">
        <h4 className="font-semibold uppercase">Item name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non illo doloribus eius quos vero quis autem cum ea cumque.</p>
      </div>
    </div>
  );
};

export default ItemCard;
