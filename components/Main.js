import PostCard from './PostCard'

const Main = ({ posts, categories }) => {
	return (
		<div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
			<div className="flex flex-wrap mr-2 md:mr-4 ml-2">
			{
				posts.map((post, index) => (
					<PostCard key={post.id} index={index} post={post} />
				))
			}
			</div>
		</div>
	)
}

export default Main