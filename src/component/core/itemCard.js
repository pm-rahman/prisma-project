import Image from "next/image";
import image from "@/assets/banner.jpg";
import UpdateItem from "../page/items/updateItem";
import DeleteItem from "../page/items/deleteItem";

const ItemCard = ({ item }) => {
  return (
    <div className="border rounded">
      <Image
        height={150}
        width={150}
        className="h-auto rounded w-full"
        src={image}
        alt="item image"
      />
      <div className="p-3">
        <h4 className="font-semibold uppercase">{item?.title}</h4>
        <p>{item?.description}</p>
        <div className="grid grid-cols-2 gap-2">
          <UpdateItem item={item} />
          <DeleteItem id={item.id} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
