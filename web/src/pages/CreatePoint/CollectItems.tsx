import React, { useEffect, useState, MouseEventHandler } from "react";
import api from "../../services/api";

type Item = {
  id: number;
  title: string;
  image_url: string;
};

type CollectItemsProps = {
  selectedItems: number[];
  onClick: Function;
};

const CollectItems = (props: CollectItemsProps) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get("items").then((resp) => {
      setItems(resp.data);
    });
  }, []);

  return (
    <ul className="items-grid">
      {items.map((item) => (
        <li
          className={props.selectedItems.includes(item.id) ? "selected" : ""}
          key={item.id}
          onClick={() => props.onClick(item.id)}
        >
          <img src={item.image_url} alt={item.title} />
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CollectItems;
