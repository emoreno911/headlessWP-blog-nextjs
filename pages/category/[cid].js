import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Aside from '../../components/aside'
import Main from '../../components/Main'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT
} from '../../components/utilities'

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
  const metadata = {
    title: "Wayback Blog",
    description: `Articles for category: ${category.name}`,
    image: "http://waybackblog.byethost32.com/wp-content/uploads/2020/11/onlineprinters-oIpJ8koLx_s-unsplash.jpg",
    url: `https://headless-wp-blog-nextjs.vercel.app/`,
    sitename: "Wayback Blog",
  }

  return (
    <Layout 
      metadata={metadata}
      title={`Wayback Blog - Category: ${category.name}`}
    >
      <Header />
      <main className="max-w-5xl mx-auto pb-10 pt-10">
        <h3 className="font-bold text-2xl font-serif mb-4">Category: {category.name}</h3>
			  <div className="flex flex-wrap overflow-hidden">
          <Main
            posts={posts}
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

export default Category