const PostCard = ({ post, index }) => {
	const myclass = index%2 ? "article-card-left" : 'article-card-right'
  return (
		<article className={myclass}>
			<div>
				{/* <img className="article-image" src="./images/2-340x220.jpg" alt="" /> */}
				<h3 className="article-title">
					<a href={`/post/${post.slug}`} dangerouslySetInnerHTML={{__html: post.title.rendered }}></a>
				</h3>
				<div className="article-body" dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></div>
				<a href={`/post/${post.slug}`} className="readmore">Read More...</a>
				{/* <p>Continue reading this article <a href={`/post/${post.slug}`}>here</a></p> */}
			</div>
		</article>
  )
}

export default PostCard