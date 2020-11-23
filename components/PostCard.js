import { fixExcerpt } from './utilities'
import styles from '../styles/Home.module.css'

 const PostCard = ({ post }) => {
  return (
    <article data-slug={post.slug}>
			<a href={`/post/${post.slug}`}>
				<h3 dangerouslySetInnerHTML={{__html: post.title.rendered }}></h3>
			</a>
			<div>
				<small>{post.date}</small>
			</div>
			<div dangerouslySetInnerHTML={{__html: fixExcerpt(post.excerpt.rendered) }}></div>
			<p>Continue reading this article <a href={`/post/${post.slug}`}>here</a></p>
		</article>
  )
}

export default PostCard