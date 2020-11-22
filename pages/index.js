import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const categories = await (await fetch('https://run.mocky.io/v3/710e69ce-6b48-4f4e-acf4-af55c0effe8f')).json()
  const tags = await (await fetch('https://run.mocky.io/v3/4591bf72-4523-45ce-8dfb-9c6513ce71b5')).json()
	const posts = await (await fetch('https://run.mocky.io/v3/6c8b536d-6b39-4b48-b28d-33422f3f2b3d')).json()
	//let posts = await (await fetch('http://waybackblog.byethost32.com/wp-json/wp/v2/posts/')).json()

  return {
    props: {
      posts,
      categories,
			count: posts.length
    }
  }
}

const Home = ({ posts = [], categories = [], count }) => {
  const fixExcerpt = (str) => {
    return str.replace('http://waybackblog.byethost32.com', 'http://localhost:3000/post')
  }
  return (
    <Layout>
      <Header />
      <section>
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

export default Home