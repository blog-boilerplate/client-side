import * as S from "./style";
import Link from "next/link";

export default function CategoriesCard({ post }) {
  if (post) {
    console.log(post.name);
  }

  return (
    <>
      {post ? (
        <Link href={post.uri}>
          <S.ContainerCard city={post.name}>
            <S.CategoryName>{post.name}</S.CategoryName>
          </S.ContainerCard>
        </Link>
      ) : (
        <S.ContainerCard desativado>
          <S.CategoryName></S.CategoryName>
        </S.ContainerCard>
      )}
    </>
  );
}
