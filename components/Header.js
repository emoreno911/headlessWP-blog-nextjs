const Header = () => {
	return (
		<>
		<header className="max-w-5xl mx-auto pt-5">
			<div className="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-2 my-2">

				<div className="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
						<h1 className="font-bold text-2xl font-serif">Wayback Blog</h1>
				</div>

				<nav className="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 md:text-left">
						<ul className="text-center">
								<li className="inline-block"><a className="block font-semibold px-3" href="/">Home</a></li>
								<li className="inline-block"><a className="block font-semibold px-3" href="/about">About</a></li>
								<li className="inline-block"><a className="block font-semibold px-3" href="#">Contact</a></li>
						</ul>
				</nav>
			
				<div className="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right">
						<a href="#" title="Facebook" className="inline-block w-6 mr-2">
								<svg className="fill-current" viewBox="-110 1 511 512" xmlns="http://www.w3.org/2000/svg"><path d="M180 512H98.008c-13.695 0-24.836-11.14-24.836-24.836V302.227H25.336C11.64 302.227.5 291.082.5 277.39v-79.246c0-13.696 11.14-24.836 24.836-24.836h47.836v-39.684c0-39.348 12.355-72.824 35.726-96.805C132.375 12.73 165.184 0 203.778 0l62.53.102c13.672.023 24.794 11.164 24.794 24.835v73.579c0 13.695-11.137 24.836-24.829 24.836l-42.101.015c-12.84 0-16.11 2.574-16.809 3.363-1.152 1.31-2.523 5.008-2.523 15.223v31.352h58.27c4.386 0 8.636 1.082 12.288 3.12 7.88 4.403 12.778 12.727 12.778 21.723l-.031 79.247c0 13.687-11.141 24.828-24.836 24.828h-58.47v184.941C204.84 500.86 193.696 512 180 512zm-76.813-30.016h71.633V288.79c0-9.144 7.442-16.582 16.582-16.582h66.727l.027-68.883h-66.758c-9.14 0-16.578-7.437-16.578-16.582v-44.789c0-11.726 1.192-25.062 10.043-35.086 10.696-12.117 27.551-13.515 39.301-13.515l36.922-.016V30.109l-57.332-.093c-62.024 0-100.566 39.703-100.566 103.609v53.117c0 9.14-7.438 16.582-16.579 16.582H30.516v68.883h56.093c9.141 0 16.579 7.438 16.579 16.582zM266.25 30.117h.004zm0 0"/></svg>
						</a>
						<a href="#" title="Twitter" className="inline-block w-6 mr-2">
								<svg className="fill-current" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/></svg>
						</a>
						<a href="#" title="Instagram" className="inline-block w-6">
								<svg className="fill-current" viewBox="0 -45 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M194.816 422.71c-85.453 0-152.992-14.929-185.304-40.952l-.63-.508-.57-.57C.638 373-1.877 362.926 1.418 353.043l.3-.82c4-10.004 13.802-16.739 24.423-16.801 21.859-.379 40.984-2.985 58.34-8.043-27.684-12.875-46.915-35.168-58.356-67.434-3.848-10.062-.527-21.218 8.34-27.87 2.187-1.645 4.66-2.887 7.277-3.72-15.383-17.757-26.746-37.964-33.11-59.335l-.198-.665-.137-.68c-2.16-10.808 2.672-21.921 11.527-26.706 3.715-2.133 7.75-3.239 11.801-3.332-4.367-9.407-7.543-19.063-9.426-28.778-5.226-26.921-.914-53.91 12.813-80.214l3.175-6.352a17.759 17.759 0 0113.004-9.563 17.76 17.76 0 0115.356 4.958l5.785 5.792c45.703 47.915 86.64 70.649 157.418 86.204 3.16-27.168 14.906-52.422 33.855-72.297C286.156 13.738 316.27.469 348.398.016h.211c23.442 0 52.52 13.382 70.106 22.82 15.086-4.938 33.262-12.582 52.12-20.664 8.825-4.14 19.704-2.246 26.642 4.691 6.8 6.801 8.687 16.39 5.078 25.711a126.223 126.223 0 01-4.657 11.227c2.582 1.183 4.946 2.789 6.942 4.785 6.035 6.035 8.55 15.48 6.406 24.066l-.23.817c-7.227 23.289-21.11 42.258-39.47 54.164C468.48 290.918 345.52 422.71 194.817 422.71zM38.305 365.036c30.449 17.227 88.476 27.649 156.511 27.649 65.41 0 127.137-28.082 173.805-79.075 47.05-51.41 72.961-119.68 72.961-192.234v-.816c0-6.57 3.617-12.567 9.438-15.653C462.828 98.652 472.39 88 478.61 74.38c-6.415 1.012-12.934-1.563-16.93-6.93a17.621 17.621 0 01-.13-20.957 97.453 97.453 0 006.692-10.59c-16.285 6.84-31.75 12.973-45.176 17.047-4.878 1.477-10.316.899-14.773-1.59-23.902-13.316-46.164-21.277-59.586-21.316-49.527.758-89.797 43.176-89.797 94.605 0 5.317-2.36 10.301-6.465 13.68a17.646 17.646 0 01-14.672 3.695c-81.609-16.078-129.968-40.187-180.257-90.722-7.207 17.27-9.176 34.664-5.844 51.84 3.379 17.398 12.367 34.832 25.996 50.414 5.18 5.914 5.867 14.375 1.71 21.05-4.14 6.653-12.01 9.762-19.577 7.735-5.914-1.586-11.352-3.668-16.508-6.344 10.504 22.816 28.57 43.918 51.281 59.48 6.582 4.512 9.332 12.922 6.692 20.454-2.645 7.543-10.032 12.398-18.016 11.804-8.7-.644-16.406-2.296-23.5-5.082 12.734 25.934 33.082 40.203 64.43 45.657a17.72 17.72 0 0114.465 14.668 17.714 17.714 0 01-9.2 18.43c-26.718 14.163-55.922 21.765-91.14 23.628zm0 0"/></svg>
						</a>
				</div>
				
			</div>
    </header>
		<div className="bg-gray-100">
			<div className="text-center max-w-5xl mx-auto py-12">
				<h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
					<span className="xl:inline">News from 20 </span>
					<span className="text-indigo-600 xl:inline">years ago</span>
				</h2>
			</div>
		</div>
		</>
	)
}

export default Header