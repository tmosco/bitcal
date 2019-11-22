import React from "react";

import NewsItemList from "./newsItemList";
const NewsItem = ({ news, children }) => {
  const newsItem = news.map((x, index) => {
    return <NewsItemList key={index} item={x} />;
  });
  console.log(children);

  return (
    <>
      {children}
      {newsItem}
    </>
  );
};

export default NewsItem;
