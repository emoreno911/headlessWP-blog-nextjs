import { fixExcerpt } from './utilities'
import styles from '../styles/Home.module.css'

 const PostCard = ({ post }) => {
  return (
    <article data-slug={post.slug}>
			<h3>
				<div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
			</h3>
			<small>{post.date}</small>
			<div dangerouslySetInnerHTML={{__html: fixExcerpt(post.excerpt.rendered) }}></div>
		</article>
  )
}

export default PostCard