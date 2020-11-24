import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Aside from '../../components/aside'
import PostDetail from '../../components/PostDetail'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../../components/utilities'

export const getStaticPaths = async () => {
  const posts = await (await fetch(POSTS_ENDPOINT)).json()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths, 						// Statically generate all paths
    fallback: false, 	// Display 404 for everything else
  }
}

export const getStaticProps = async ({params}) => {
  const tags = await (await fetch(TAGS_ENDPOINT)).json()
  const categories = await (await fetch(CATEGORIES_ENDPOINT)).json()
	const posts = await (await fetch(POSTS_ENDPOINT)).json()
  const post = posts.find(p => p.slug === params.slug)
 
  return {
    props: {
      post,
      tags,
      posts,
      categories
    }
  }
}

const Post = ({ 
  post = {}, 
  posts = [], 
  categories = [], 
  tags = [] 
  }) => {
  
  const metadata = {
    title: "Wayback Blog",
    description: post.title.rendered,
    image: "http://waybackblog.byethost32.com/wp-content/uploads/2020/11/onlineprinters-oIpJ8koLx_s-unsplash.jpg",
    url: `https://headless-wp-blog-nextjs.vercel.app/post/${post.slug}`,
    sitename: "Wayback Blog",
  };

  return (
    <Layout 
      metadata={metadata}
      title={`Wayback Blog - ${post.title.rendered}`}
    >
      <Header />
      <main className="max-w-5xl mx-auto pb-10 pt-10">
			  <div className="flex flex-wrap overflow-hidden">
          <PostDetail
            post={post}
            categories={categories}
            tags={tags}
          />
          <Aside 
            posts={posts}
            categories={categories}
          />
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default Post