import { fixExcerpt } from './utilities'
import styles from '../styles/Home.module.css'

 const PostCard = ({ post }) => {
  return (
    <article data-slug={post.slug}>
			<a href={`/post/${post.slug}`}>
				<h3 dangerouslySetInnerHTML={{__html: post.title.rendered }}></h3>
			</a>
			<small>{post.date}</small>
			<div dangerouslySetInnerHTML={{__html: fixExcerpt(post.excerpt.rendered) }}></div>
		</article>
  )
}

export default PostCard