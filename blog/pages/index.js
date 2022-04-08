import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  { title: 'Getting Started With NextJs', 
    image: 'getting-started-with-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR', 
    date: '2022-02-10 ', 
    slug: 'getting-started-with-nextjs',
  },
  { title: 'Getting Started With NextJs', 
    image: 'getting-started-with-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR', 
    date: '2022-02-10 ', 
    slug: 'getting-started-with-nextjs2',
  },
  { title: 'Getting Started With NextJs', 
    image: 'getting-started-with-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR', 
    date: '2022-02-10 ', 
    slug: 'getting-started-with-nextjs3',
  },
  { title: 'Getting Started With NextJs', 
    image: 'getting-started-with-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR', 
    date: '2022-02-10 ', 
    slug: 'getting-started-with-nextjs4',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  );
}


// Hero => Present ourselves
// Featured Posts