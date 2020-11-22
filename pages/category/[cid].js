import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import {
  fixExcerpt,
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT
} from '../../components/utilities'
import styles from '../../styles/Home.module.css'

export const getServerSideProps = async ({ params }) => {
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