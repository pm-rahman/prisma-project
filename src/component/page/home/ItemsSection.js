"use client";
import ItemCard from "@/component/core/itemCard";
import { useEffect, useState } from "react";
const ItemsSection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // const items=[{},{},{}]
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <ItemCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ItemsSection;
