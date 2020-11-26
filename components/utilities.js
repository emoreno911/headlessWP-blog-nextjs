export const POSTS_ENDPOINT = "https://run.mocky.io/v3/2c9903d4-ab6c-431c-b486-25c3deb9389c"
export const CATEGORIES_ENDPOINT = "https://run.mocky.io/v3/d35dcc90-865a-40d9-bd84-b3365b050f53"
export const TAGS_ENDPOINT = "https://run.mocky.io/v3/972f398f-e941-4109-b214-11b82a3b1328"

export const fixExcerpt = (str) => {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	return str.replace('http://waybackblog.byethost32.com', `${baseURL}/post`)
}

export const getPostSSLImages = () => {
	return {
		63 : "https://iili.io/FVWwiv",
		60 : "https://iili.io/FVWjWJ",
		58 : "https://iili.io/FVWhxa",
		56 : "https://iili.io/FVWWDg",
		54 : "https://iili.io/FVWelp",
		52 : "https://iili.io/FVWOfR",
		47 : "https://iili.io/FVW8JI",
		49 : "https://iili.io/FVWkUN",
		5 : "https://iili.io/FVWSRt",
		13 : "https://iili.io/FVWUOX",
		9 : "https://iili.io/FVWgbn",
		17 : "https://iili.io/FVW4xs"
	}
}