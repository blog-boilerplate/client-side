import Link from "next/link";
import Image from "next/image";
import * as S from "./style";

export default function PostCardCategory({ post }) {

  console.log(post.node.featuredImage?.node.mediaItemUrl)

  return (
    <Link href={`${post.node.uri}`}>
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
              src={post.node.featuredImage?.node.mediaItemUrl}
              alt={post.node.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
            />
          </div>
          <S.TitlePost>{post.node.title}</S.TitlePost>
        </S.PostCard>
      </S.PostCardContainer>
    </Link>
  );
}
