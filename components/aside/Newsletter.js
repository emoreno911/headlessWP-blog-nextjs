const Newsletter = () => {
	return (
		<div className="mt-10 bg-gray-100 rounded-sm p-5">
			<div className="pb-6">
				<div className="w-10 mx-auto mt-6 text-gray-900">
						<svg className="fill-current" viewBox="-1 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505.668 246.465c-.89-.906-54.297-54.309-55.668-55.68V55c0-30.328-24.672-55-55-55H115C84.672 0 60 24.672 60 55v135.785C.379 250.406 0 248.301 0 257v210c0 24.813 20.188 45 45 45h420c24.813 0 45-20.188 45-45V257c0-3.855-1.54-7.71-4.332-10.535zm-35.992 6.426L450 262.73v-29.516zM115 30h280c13.785 0 25 11.215 25 25v222.73l-120 60V197c0-8.285-6.715-15-15-15H135c-8.285 0-15 6.715-15 15v95.73l-30-15V55c0-13.785 11.215-25 25-25zm155 257.973l-66.68-44.453a15.004 15.004 0 00-15.027-.938L150 261.73V212h120zm-120 7.297l43.922-21.961L270 324.027v28.703l-15 7.5-105-52.5zm-90-32.54l-19.676-9.84L60 233.216zM465 482H45c-8.27 0-15-6.73-15-15V281.27l218.293 109.148a15.008 15.008 0 0013.414 0L480 281.27V467c0 8.27-6.73 15-15 15zm0 0"/><path d="M195 91h120c8.285 0 15-6.715 15-15s-6.715-15-15-15H195c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M135 151h240c8.285 0 15-6.715 15-15s-6.715-15-15-15H135c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M375 181h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M375 241h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0"/></svg>
				</div>
				<h2 className="font-light text-xl mb-2 text-center pt-5 text-gray-900">Subscribe to our newsletter</h2>
				<span className="block text-center article-body text-xs italic">Get the news right in your inbox!</span>
				<form action="">
						<div className="bg-white border border-gray-400 mt-5 rounded-sm overflow-hidden">
								<label className="hidden" htmlFor="fn">First Name</label>
								<input className="bg-transparent w-full p-3" type="text" name="name" id="fn" placeholder="First Name" />
						</div>
						<div className="bg-white border border-gray-400 mt-3 rounded-sm overflow-hidden">
								<label className="hidden" htmlFor="em">Email Address</label>
								<input className="bg-transparent w-full p-3" type="email" name="email" id="em" placeholder="Email Address" />
						</div>
						<div className="mt-3 article-body text-xs italic">
								<span className="inline-block pr-1">
										<input type="checkbox" name="" id="privacy-check" />
								</span>
								<label htmlFor="privacy-check">By checking this you agree to our <a href="" className="text-orange-500">Privacy Policy</a>.</label>
						</div>
						<button type="submit" aria-label="Get Newsletter" className="w-full rounded-sm bg-indigo-600 text-white tracking-widest text-sm uppercase font-medium py-3 mt-5 h-12">Subscribe</button>
				</form>
			</div>
		</div>
	)
}

export default Newsletter