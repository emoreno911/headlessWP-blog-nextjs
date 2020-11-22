import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import PostCard from '../../components/PostCard'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../../components/utilities'
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
  const tags = await (await fetch(TAGS_ENDPOINT)).json()
  const paths = tags.map(({ slug }) => ({ params: { tid: slug } }))

  return {
    paths, 						// Statically generate all paths
    fallback: false, 	// Display 404 for everything else
  }
}

export const getStaticProps = async ({ params }) => {
  const tags = await (await fetch(TAGS_ENDPOINT)).json()
  const categories = await (await fetch(CATEGORIES_ENDPOINT)).json()
  const allPosts = await (await fetch(POSTS_ENDPOINT)).json()
  const tag = tags.find(t => t.slug === params.tid)
  const posts = allPosts.filter(p => p.tags.indexOf(tag.id) !== -1)

  return {
    props: {
      tag,
      posts,
      categories
    }
  }
}

const Category = ({ posts = [], categories = [], tag = {} }) => {
  return (
    <Layout>
      <Header />
      <section>
        <h5>Tag: {tag.name}</h5>
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