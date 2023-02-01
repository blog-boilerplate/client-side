import * as S from "./style";
import SearchPostCard from "../SearchPostCard";
import { useState } from "react";

export default function SearchResults({ data }) {
  if (!data || !data.length) return null;

  const resultList = data.map((item, index) => {
    const delay = `${index + 1}00ms`
    return <SearchPostCard delay={delay} key={item.id} title={item.title.rendered} />;
  });

  return <S.SearchResults>{resultList}</S.SearchResults>;
}
