import Image from 'next/image'
import { getPostSSLImages } from '../components/utilities'

const PostCard = ({ post, index }) => {
	const myclass = index%2 ? "article-card-left" : 'article-card-right'
	const images = getPostSSLImages()
  return (
		<article className={myclass}>
			<div className="relative">
				{/* <img className="article-image" src={`${images[post.id]}.md.jpg`} alt="" /> */}
				<div className="article-image">
					<Image 
						src={`${images[post.id]}.md.jpg`}
						alt={post.title.rendered}
						width={640}
						height={427}
						layout="intrinsic"
					/>
				</div> 
				<h3 className="article-title">
					<a href={`/post/${post.slug}`} dangerouslySetInnerHTML={{__html: post.title.rendered }}></a>
				</h3>
				<div className="article-body" dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></div>
				<p>Continue reading this <a className="readmore" href={`/post/${post.slug}`}>article</a></p>
			</div>
		</article>
  )
}

export default PostCard