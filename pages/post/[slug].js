import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import styles from '../../styles/Post.module.css'

export const getServerSideProps = async ({params}) => {
  const tags = await (await fetch('https://run.mocky.io/v3/4591bf72-4523-45ce-8dfb-9c6513ce71b5')).json()
  const categories = await (await fetch('https://run.mocky.io/v3/710e69ce-6b48-4f4e-acf4-af55c0effe8f')).json()
	const posts = await (await fetch('https://run.mocky.io/v3/6c8b536d-6b39-4b48-b28d-33422f3f2b3d')).json()
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

 const Post = ({ post = {}, posts = [], categories = [], tags = [] }) => {
  return (
    <Layout>
      <Header />
			<section>
        <h3>
          <div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
        </h3>
        <small>{post.date}</small>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered }}></div>
        <div>
          <h5>Categories</h5>
          {
            post.categories.map(cid => {
              const category = categories.find(c => c.id === cid)
              return <a href={`/category/${category.slug}`}>{category.name}</a>
            })
          }
        </div>
        <div>
          <h5>Tags</h5>
          {
            post.tags.map(tid => {
              const tag = tags.find(t => t.id === tid)
              return <a href={`/tag/${tag.slug}`}>{tag.name}</a>
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