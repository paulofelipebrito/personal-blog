import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../utils/posts-util";

export default function PostDetailPage({posts}){
  return(
    <PostContent posts={posts}/>
  );
}

export function getStaticProps(context){
  const {params} = context;
  
  const { slug } = params;

  const postData = getPostData(slug);

  return { 
    props: {
      posts: postData
    },
    revalidate: 600,
  }
}

export function getStaticPaths(){
  const postFilesnames = getPostsFiles();

  const slugs = postFilesnames.map(filename => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: {slug: slug}})),
    fallback: false
  };
}