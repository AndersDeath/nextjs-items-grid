import React from "react";
import "./ItemCard.scss";
import { Item } from "../../interfaces";
import { formatPriceToEUR } from "../../Tools/priceFormatter";
import Image from "next/image";
interface ItemCardProps {
  data: Item;
}

const ItemCard = ({ data, ...props }: ItemCardProps) => {
  return (
    <div className="ItemCard">
      <Image
        loading="lazy"
        width={200}
        height={100}
        className="ItemCard__image"
        src={data.image}
        alt={data.title.en}
      />
      <div className="ItemCard__title">{data.title.en}</div>
      <div className="ItemCard__price">
        {formatPriceToEUR(data.price / 100)}
        <span className="ItemCard__price-postfix"> per month</span>
      </div>
    </div>
  );
};

export { ItemCard };
