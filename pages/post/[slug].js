import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../../components/utilities'
import styles from '../../styles/Post.module.css'

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
    <Layout metadata={metadata}>
      <Header />
			<section>
        <h3>
          <div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
        </h3>
        <div>
          <small>{post.date}</small>
        </div>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered }}></div>
        <div>
          <h5>Categories</h5>
          {
            post.categories.map(cid => {
              const category = categories.find(c => c.id === cid)
              return <a key={cid} href={`/category/${category.slug}`}>{category.name}</a>
            })
          }
        </div>
        <div>
          <h5>Tags</h5>
          {
            post.tags.map(tid => {
              const tag = tags.find(t => t.id === tid)
              return tag ? <a key={tid} href={`/tag/${tag.slug}`}>{tag.name}</a> : null
            })
          }
        </div>
      </section>
      <Aside 
        posts={posts}
        categories={categories}
      />
    </Layout>
  )
}

export default Post