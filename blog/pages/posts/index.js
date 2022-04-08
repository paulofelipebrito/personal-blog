import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/posts-util";

export default function AllPostPage({posts}){
  return (
    <AllPosts posts={posts}/> 
  );
};

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}