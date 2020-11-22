import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import {
  fixExcerpt,
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../../components/utilities'
import styles from '../../styles/Home.module.css'

export const getServerSideProps = async ({ params }) => {
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
          posts.map(post => (
            <article key={post.id} data-slug={post.slug}>
              <h3>
                <div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
              </h3>
              <small>{post.date}</small>
              <div dangerouslySetInnerHTML={{__html: fixExcerpt(post.excerpt.rendered) }}></div>
            </article>
          ))
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