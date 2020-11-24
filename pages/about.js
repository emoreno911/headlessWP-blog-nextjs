import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const About = () => {
  return (
    <Layout>
			<Header />
			<main className="max-w-5xl mx-auto pb-10 pt-10 my-10">
				<h3 className="font-bold text-2xl font-serif mb-4">About</h3>
		
				<p className="mb-4">I’m a React developer playing with the WordPress Rest API. </p>

				<p className="mb-4">All the post here are old news taken from the <a className="text-indigo-600" href="https://archive.org/web/">wayback machine</a> just with educational purposes.</p>

				<p className="mb-4">Have fun reading some old old news!</p>

			</main>
			<Footer />
		</Layout>
  )
}

export default About