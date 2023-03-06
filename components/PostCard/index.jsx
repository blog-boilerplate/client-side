import Link from "next/link";
import * as S from "./style";
import Image from "next/image"

export default function PostCard({ post }) {
  return (
    <Link href={post.uri}>
      <S.PostCardContainer>
        <S.PostCard>
        <div
            className="CardItem"
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <Image
              src={post.featuredImage?.node.mediaItemUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
            />
          </div>
          <S.TitlePost>{post.title}</S.TitlePost>
        </S.PostCard>
      </S.PostCardContainer>
    </Link>
  );
}
