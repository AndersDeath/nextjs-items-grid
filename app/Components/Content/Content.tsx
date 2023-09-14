import React from "react";
import "./Content.scss";
import { Item, WowData } from "../../interfaces";
import useFetch from "../../Tools/useFetch";
import { ItemCard } from "../ItemCard";
import { Loading } from "../Loading/";
import { ContentHeader } from "../ContentHeader";
import { GET_APARTMENTS } from "../../constants";
interface ContentProps {}

const Content = ({ ...props }: ContentProps) => {
  const { data, loading, error, reload } = useFetch<WowData>(GET_APARTMENTS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ContentHeader
        title="Something went wrong"
        subtitle="Please retry by clicking button below"
        buttonText="Try again"
        reload={reload}
      />
    );
  }
  return (
    <section className="Content">
      <ContentHeader
        title="Homes in Berlin"
        subtitle={`More than ${data && data.listings.length} homes found`}
        buttonText="Reload results"
        reload={reload}
      />
      <section className="Content__area">
        {data &&
          data.listings.map((item: Item) => {
            return <ItemCard key={item._id} data={item} />;
          })}
      </section>
    </section>
  );
};

export { Content };
