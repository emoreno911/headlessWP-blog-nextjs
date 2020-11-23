import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import PostCard from '../components/PostCard'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../components/utilities'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const tags = await (await fetch(TAGS_ENDPOINT)).json()
  const categories = await (await fetch(CATEGORIES_ENDPOINT)).json()
  const posts = await (await fetch(POSTS_ENDPOINT)).json()
	//let posts = await (await fetch('http://waybackblog.byethost32.com/wp-json/wp/v2/posts/')).json()

  return {
    props: {
      posts,
      categories,
			count: posts.length
    }
  }
}

const Home = ({ posts = [], categories = [] }) => {
  const metadata = {
    title: "Wayback Blog",
    description: "Wayback Blog, News from 20 years ago",
    image: "http://waybackblog.byethost32.com/wp-content/uploads/2020/11/onlineprinters-oIpJ8koLx_s-unsplash.jpg",
    url: `https://headless-wp-blog-nextjs.vercel.app/`,
    sitename: "Wayback Blog",
  }

  return (
    <Layout metadata={metadata}>
      <Header />
      <section>
        {
          posts.map(post => (<PostCard key={post.id} post={post} />))
        }
      </section>
      <Aside 
        posts={posts}
        categories={categories}
      />
    </Layout>
  )
}

export default Home