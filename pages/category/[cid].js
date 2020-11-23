import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/aside'
import PostCard from '../../components/PostCard'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT
} from '../../components/utilities'
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
  const categories = await (await fetch(CATEGORIES_ENDPOINT)).json()
  const paths = categories.map(({ slug }) => ({ params: { cid: slug } }))

  return {
    paths, 						// Statically generate all paths
    fallback: false, 	// Display 404 for everything else
  }
}

export const getStaticProps = async ({ params }) => {
  const categories = await (await fetch(CATEGORIES_ENDPOINT)).json()
  const allPosts = await (await fetch(POSTS_ENDPOINT)).json()
  const category = categories.find(c => c.slug === params.cid)
  const posts = allPosts.filter(p => p.categories.indexOf(category.id) !== -1)

  return {
    props: {
      posts,
      category,
      categories
    }
  }
}

const Category = ({ posts = [], categories = [], category = {} }) => {
  return (
    <Layout>
      <Header />
      <section>
        <h5>Category: {category.name}</h5>
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

export default Category