import * as S from "./style";
import { Category } from "@styled-icons/boxicons-regular/Category";
import { Search } from "@styled-icons/material/Search";
import { Home } from "@styled-icons/entypo/Home";
import { BookInformation } from "@styled-icons/fluentui-system-filled/BookInformation";
import { useState, useEffect } from "react";

export default function Footer() {
  const [select, setSelect] = useState(2);
  const [showButton, setShowButton] = useState(true);

  let lastScrollTop = 0;

  const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.Footer active={showButton}>
        {select == 2 ? (
          <S.Icon className="select flash" onClick={() => setSelect(2)}>
            <div>
              <Home />
              <p>Home</p>
            </div>
          </S.Icon>
        ) : (
          <S.Icon className="flash" onClick={() => setSelect(2)}>
            <div>
              <Home />
              <p>Home</p>
            </div>
          </S.Icon>
        )}
        {select == 1 ? (
          <S.Icon className="select flash" onClick={() => setSelect(1)}>
            <div>
              <Category />
              <p>Categorias</p>
            </div>
          </S.Icon>
        ) : (
          <S.Icon className="flash" onClick={() => setSelect(1)}>
            <div>
              <Category />
              <p>Categorias</p>
            </div>
          </S.Icon>
        )}

        {select == 3 ? (
          <S.Icon className="select flash" onClick={() => setSelect(3)}>
            <div>
              <Search />
              <p>Buscar</p>
            </div>
          </S.Icon>
        ) : (
          <S.Icon className="flash" onClick={() => setSelect(3)}>
            <div>
              <Search />
              <p>Buscar</p>
            </div>
          </S.Icon>
        )}
        {select == 4 ? (
          <S.Icon className="select flash" onClick={() => setSelect(4)}>
            <div>
              <BookInformation />
              <p>Sobre nós</p>
            </div>
          </S.Icon>
        ) : (
          <S.Icon className="flash" onClick={() => setSelect(4)}>
            <div>
              <BookInformation />
              <p>Sobre nós</p>
            </div>
          </S.Icon>
        )}
      </S.Footer>
    </>
  );
}
