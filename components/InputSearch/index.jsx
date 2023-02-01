import * as S from "./style";
import { useState, useRef, useEffect } from "react";
import SearchResults from "../SearchResults";

export default function InputSearch({ value, change }) {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) {
      return;
      setData([]);
    }

    const url = `https://suriblogcms.online/wp-json/wp/v2/posts?search=${value}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    if (inputRef) inputRef.current.focus();
  }, []);

  return (
    <S.Container>
      <S.Form>
        <label htmlFor="search">Pesquisar...</label>
        <input
          name="search"
          id="search"
          value={value}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </S.Form>
      <SearchResults data={data} />
    </S.Container>
  );
}
