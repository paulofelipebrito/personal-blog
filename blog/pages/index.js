import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../utils/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </>
  );
}


// Hero => Present ourselves
// Featured Posts

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    //revalidate: 600, Does not need it because the posts will not be updated frequently
  }
}