import ItemsSection from "@/component/page/home/ItemsSection";
import AddModal from "@/component/page/items/addModal";
import Link from "next/link";

const Items = () => {
  return (
    <>
      <AddModal/>
      <ItemsSection />
    </>
  );
};

export default Items;
