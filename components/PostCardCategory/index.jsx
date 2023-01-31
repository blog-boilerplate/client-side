import Link from "next/link";
import * as S from "./style";

export default function PostCardCategory({ post }) {
  return (
    <Link href={`${post.node.uri}`}>
      <S.PostCardContainer>
        <S.PostCard
          imgUrl={post.node.featuredImage?.node.mediaItemUrl}
        ></S.PostCard>
        <S.TitlePost>{post.node.title}</S.TitlePost>
      </S.PostCardContainer>
    </Link>
  );
}
