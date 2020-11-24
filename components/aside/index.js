import Search from './Search'
import Newsletter from './Newsletter'

const Aside = ({ 
	posts = [], 
	categories = [] 
}) => {
	const recent = posts.filter((p, i) => i < 3)

	return (
		<div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
			<div className="ml-2 md:ml-4 mr-2">
				<Search />
				<Newsletter />

				<div className="mt-10">
					<h4 className="font-light text-xl mb-5 text-gray-900 text-center">Categories</h4>
					<ul>
					{
						categories.map(cat => (
							<li key={cat.id} className="flex">
								<a href={`/category/${cat.slug}`} className="text-gray-900 font-thin font-serif text-lg py-2 block flex-1">
									{cat.name}
								</a>
								<span className="text-gray-700 text-lg font-thin p-2">
									{cat.count}
								</span>
							</li>
						))
					}
					</ul>
				</div>
				<div className="mt-10">
					<h4 className="font-light text-xl mb-5 text-gray-900 text-center">Recent Posts</h4>
					<ul>
					{
					recent.map(post => (
							<li className="mb-3" key={post.id}>
								<a href={`/post/${post.slug}`}>
									<h5
										className="text-gray-900 font-thin font-serif mb-2" 
										dangerouslySetInnerHTML={{__html: post.title.rendered }}
									>
									</h5>
									<span className="text-xs text-gray-800 font-thin block mb-5">
										{post.date}
									</span>
								</a>
							</li>
						))
					}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Aside