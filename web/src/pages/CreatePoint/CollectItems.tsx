import React, { useEffect, useState } from "react";
import api from "../../services/api";

type Item = {
  id: number;
  title: string;
  image_url: string;
};

const CollectItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get("items").then((resp) => {
      setItems(resp.data);
    });
  }, []);

  return (
    <ul className="items-grid">
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.image_url} alt={item.title} />
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CollectItems;
