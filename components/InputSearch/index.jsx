import * as S from "./style";
import { useState, useRef, useEffect } from "react";
import SearchResults from "../SearchResults";

export default function InputSearch({ value, change }) {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (value == "") {
      setData([]);
    }

    if (!value) {
      return;
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
        <S.Input
          name="search"
          placeholder="Pesquisar..."
          id="search"
          value={value}
          onChange={handleInputChange}
          ref={inputRef}
        />
      <SearchResults data={data} />
    </S.Container>
  );
}
