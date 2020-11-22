export const POSTS_ENDPOINT = 'https://run.mocky.io/v3/6c8b536d-6b39-4b48-b28d-33422f3f2b3d'
export const CATEGORIES_ENDPOINT = 'https://run.mocky.io/v3/710e69ce-6b48-4f4e-acf4-af55c0effe8f'
export const TAGS_ENDPOINT = "https://run.mocky.io/v3/4591bf72-4523-45ce-8dfb-9c6513ce71b5"

export const fixExcerpt = (str) => {
	return str.replace('http://waybackblog.byethost32.com', 'http://localhost:3000/post')
}