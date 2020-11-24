// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/labels
const Badge = ({ text }) => {
	return (
		<span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 uppercase last:mr-0 mr-1">
			{text}
		</span>
	)
}

const PostDetail = ({ 
	post = {},
	categories = [], 
  tags = [] 
 }) => {
	return (
		<div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
			<div className="mr-2 md:mr-4 ml-2">
				<h3 class="text-gray-900 font-serif text-3xl my-5 font-thin">
					<div dangerouslySetInnerHTML={{__html: post.title.rendered }}></div>
				</h3>
				{/* By Page. December 02, 2019 */}
				<span class="text-xs text-gray-800 font-thin block mb-5">
					{post.date}
				</span>
				<div class="article-body">
					<div dangerouslySetInnerHTML={{__html: post.content.rendered }}></div>
				</div>
				
				<div className="mt-6">
					<h5 className="inline-block my-4 mr-4">Categories</h5>
					{
						post.categories.map(cid => {
							const category = categories.find(c => c.id === cid)
							return <a key={cid} href={`/category/${category.slug}`}><Badge text={category.name} /></a>
						})
					}
				</div>
				<div>
					<h5 className="inline-block my-4 mr-4">Tags</h5>
					{
						post.tags.map(tid => {
							const tag = tags.find(t => t.id === tid)
							return tag ? <a key={tid} href={`/tag/${tag.slug}`}><Badge text={tag.name} /></a> : null
						})
					}
				</div>
			</div>
		</div>
	)
}

export default PostDetail