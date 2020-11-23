import styles from '../styles/Category.module.css'

 const Aside = ({ posts = [], categories = [] }) => {
	const recent = posts.filter((p, i) => i < 3)
  return (
    <aside>
			<div>
				<h4>Subscribe to Newsletter</h4>
			</div>
			<div>
				<h4>Recent Posts</h4>
				{
					recent.map(post => (
						<div>
							<a key={post.id} href={`/post/${post.slug}`}>
								<div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
							</a>
						</div>
					))
				}
			</div>
			<div>
				<h4>Categories</h4>
				{
					categories.map(cat => (
						<div key={cat.id}>
							<a href={`/category/${cat.slug}`}>{cat.name}</a>
						</div>
					))
				}
			</div>
		</aside>
  )
}

export default Aside