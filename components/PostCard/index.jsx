import Link from "next/link";
import * as S from "./style";

export default function PostCard({ post }) {
  return (
    <Link href={post.uri}>
      <S.PostCardContainer>
        <S.PostCard imgUrl={post.featuredImage?.node.mediaItemUrl}>
          <S.TitlePost>{post.title}</S.TitlePost>
        </S.PostCard>
      </S.PostCardContainer>
    </Link>
  );
}
