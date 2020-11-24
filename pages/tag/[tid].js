import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Aside from '../../components/aside'
import Main from '../../components/Main'
import {
  CATEGORIES_ENDPOINT,
  POSTS_ENDPOINT,
  TAGS_ENDPOINT
} from '../../components/utilities'

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

const Tag = ({ posts = [], categories = [], tag = {} }) => {
  const metadata = {
    title: "Wayback Blog",
    description: `Articles for tag: ${tag.name}`,
    image: "http://waybackblog.byethost32.com/wp-content/uploads/2020/11/onlineprinters-oIpJ8koLx_s-unsplash.jpg",
    url: `https://headless-wp-blog-nextjs.vercel.app/`,
    sitename: "Wayback Blog",
  }

  return (
    <Layout 
      metadata={metadata}
      title={`Wayback Blog - Tag: ${tag.name}`}
    >
      <Header />
      <main className="max-w-5xl mx-auto pb-10 pt-10">
        <h3 className="font-bold text-2xl font-serif mb-4">Tag: {tag.name}</h3>
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

export default Tag