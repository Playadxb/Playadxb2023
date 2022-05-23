<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({
		url
	}) => ({
		props: {
			url
		}
	});
</script>

<script>
	import Footer from './Footer.svelte'
	import PageTransition from './PageTransition.svelte'
	import Navbar from './Navbar.svelte'
	export let url;
	/** @type {import('@sveltejs/kit').Load} */

	export const load = async ({
		url
	}) => ({
		props: {
			url
		}
	});
	let hideLogo = true;
	let isTransparent = true;
</script>


<main class="h-full bg-black text-white main-content relative ">

	<Navbar bind:hideLogo={hideLogo} bind:isTransparent={isTransparent} />

	<PageTransition {url}>
		<section
			class="min-h-full flex flex-row justify-center text-center sm:bg-no-repeat xl:bg-repeat xl:bg-contain lg:bg-cover md:bg-cover landing-hero">
			<div class="self-center flex-auto lg:w-1/2">
				<div class="flex flex-col m-auto w-4/5 lg:w-1/2 space-y-6">
					<img class="m-auto" src="/logo.png" alt="Playa Logo" />
					<p class="text-sm xl:text-xl sm:text-center lg:text-left text-white leading-6">PLAYA is the ideal
						hideaway on the serene Palm Jumeirah beach. With the shamanic house music, authentic savoury
						cuisine with nourishing foods that fuel your spirit, and the diverse events that revitalise your
						soul, Playa's experience allows you to re-energize. Playa is life renewed!
					</p>
				</div>
			</div>
			<div class="relative hidden lg:block">
				<img src="/clock_ring.svg" class="w-auto h-auto" alt="clock ring" />
				<img src="/monument.svg" alt="monument" class="absolute" style="left:55%; top:31%; z-index:2;" />
				<div class="absolute inset-0"></div>
				<img class="absolute inset-0 left-auto lg:w-32/50" src="/up-right-shaddow.svg" alt="" />

				<svg class="absolute inset-0 left-auto  shaddow one" id="shaddow-1" xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 399.26 542.39">
					<defs>
						<style>
							.cls-1 {
								fill: #231f20;
								stroke: #231f20;
								stroke-miterlimit: 10;
								stroke-width: 1.11px;
							}
						</style>
					</defs>
					<g id="Layer_1-2">
						<path class="cls-1"
							d="M398.65,1.31l-22.18,540.5C227.5,535.74,94.72,469.77,.78,367.82L398.65,1.31Z" />
					</g>
				</svg>
				<svg class="absolute bottom-0 left-auto" style="left:20%; top:20%" id="icon-1" width="54" height="54"
					viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_195_199)">
						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.19" />
					</g>
					<path
						d="M20.5625 19.8333L17.6458 16.9167H36.6042L33.6875 19.8333H20.5625ZM25.6667 28.5833V37.3333H18.375V40.25H35.875V37.3333H28.5833V28.5833L40.25 16.9167V14H14V16.9167L25.6667 28.5833Z"
						fill="#C5BABA" />
					<defs>
						<filter id="filter0_b_195_199" x="-10" y="-10" width="74" height="74"
							filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feGaussianBlur in="BackgroundImage" stdDeviation="5" />
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_195_199" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_195_199"
								result="shape" />
						</filter>
					</defs>
				</svg>
				<svg class="absolute bottom-0 left-auto" style="left:15%; top:52%" id="icon-2"  width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_195_167)">
						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56" />
					</g>
					<path
						d="M33.7144 39.3236C32.2886 39.3259 30.8763 39.0496 29.5586 38.5105C28.2409 37.9714 27.0436 37.1801 26.0355 36.182C24.7749 34.9366 23.0666 34.2371 21.2856 34.2371C19.5046 34.2371 17.7963 34.9366 16.5357 36.182C16.3434 36.3724 16.115 36.5235 15.8638 36.6265C15.6125 36.7295 15.3431 36.7826 15.0712 36.7826C14.7992 36.7826 14.5298 36.7295 14.2786 36.6265C14.0273 36.5235 13.799 36.3724 13.6066 36.182C13.4143 35.9917 13.2617 35.7656 13.1577 35.5169C13.0536 35.2681 13 35.0015 13 34.7323C13 34.463 13.0536 34.1964 13.1577 33.9477C13.2617 33.6989 13.4143 33.4729 13.6066 33.2825C15.6452 31.2702 18.4067 30.1402 21.2856 30.1402C24.1645 30.1402 26.9259 31.2702 28.9645 33.2825C30.2257 34.5269 31.9337 35.2257 33.7144 35.2257C35.4951 35.2257 37.2032 34.5269 38.4643 33.2825C38.6566 33.0921 38.885 32.9411 39.1362 32.838C39.3875 32.735 39.6568 32.682 39.9288 32.682C40.2008 32.682 40.4702 32.735 40.7214 32.838C40.9727 32.9411 41.201 33.0921 41.3934 33.2825C41.5857 33.4729 41.7383 33.6989 41.8423 33.9477C41.9464 34.1964 42 34.463 42 34.7323C42 35.0015 41.9464 35.2681 41.8423 35.5169C41.7383 35.7656 41.5857 35.9917 41.3934 36.182C40.3854 37.1804 39.1882 37.9719 37.8704 38.511C36.5526 39.0501 35.1403 39.3262 33.7144 39.3236ZM33.7144 31.1212C32.2886 31.1235 30.8763 30.8472 29.5586 30.3081C28.2409 29.769 27.0436 28.9777 26.0355 27.9796C24.7749 26.7342 23.0666 26.0347 21.2856 26.0347C19.5046 26.0347 17.7963 26.7342 16.5357 27.9796C16.1473 28.3641 15.6205 28.5801 15.0712 28.5801C14.5219 28.5801 13.995 28.3641 13.6066 27.9796C13.2182 27.5951 13 27.0736 13 26.5299C13 25.9861 13.2182 25.4646 13.6066 25.0801C15.6452 23.0678 18.4067 21.9378 21.2856 21.9378C24.1645 21.9378 26.9259 23.0678 28.9645 25.0801C30.2257 26.3245 31.9337 27.0233 33.7144 27.0233C35.4951 27.0233 37.2032 26.3245 38.4643 25.0801C38.8527 24.6956 39.3795 24.4796 39.9288 24.4796C40.4781 24.4796 41.005 24.6956 41.3934 25.0801C41.7818 25.4646 42 25.9861 42 26.5299C42 27.0736 41.7818 27.5951 41.3934 27.9796C40.3854 28.978 39.1882 29.7695 37.8704 30.3086C36.5526 30.8477 35.1403 31.1238 33.7144 31.1212ZM33.7144 22.9187C32.2886 22.9211 30.8763 22.6448 29.5586 22.1057C28.2409 21.5666 27.0436 20.7753 26.0355 19.7772C24.7749 18.5318 23.0666 17.8323 21.2856 17.8323C19.5046 17.8323 17.7963 18.5318 16.5357 19.7772C16.3434 19.9676 16.115 20.1186 15.8638 20.2217C15.6125 20.3247 15.3431 20.3777 15.0712 20.3777C14.7992 20.3777 14.5298 20.3247 14.2786 20.2217C14.0273 20.1186 13.799 19.9676 13.6066 19.7772C13.4143 19.5868 13.2617 19.3608 13.1577 19.1121C13.0536 18.8633 13 18.5967 13 18.3274C13 18.0582 13.0536 17.7916 13.1577 17.5428C13.2617 17.2941 13.4143 17.0681 13.6066 16.8777C15.6452 14.8654 18.4067 13.7354 21.2856 13.7354C24.1645 13.7354 26.9259 14.8654 28.9645 16.8777C30.2257 18.1221 31.9337 18.8209 33.7144 18.8209C35.4951 18.8209 37.2032 18.1221 38.4643 16.8777C38.8527 16.4932 39.3795 16.2772 39.9288 16.2772C40.4781 16.2772 41.005 16.4932 41.3934 16.8777C41.7818 17.2622 42 17.7837 42 18.3274C42 18.8712 41.7818 19.3927 41.3934 19.7772C40.3854 20.7756 39.1882 21.567 37.8704 22.1062C36.5526 22.6453 35.1403 22.9214 33.7144 22.9187Z"
						fill="#C5BABA" />
					<defs>
						<filter id="filter0_b_195_167" x="-10" y="-10" width="74" height="74"
							filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feGaussianBlur in="BackgroundImage" stdDeviation="5" />
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_195_167" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_195_167"
								result="shape" />
						</filter>
					</defs>
				</svg>
				<svg class="absolute bottom-0 left-auto" style="left:45%; top:80%" id="icon-3" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_3737_158)">
						<circle cx="27" cy="27" r="27" fill="#515254"/>
						</g>
						<path d="M20.7681 42.6757C20.5598 42.4681 20.4428 42.1865 20.4428 41.8929V26.2821M20.7681 42.6757V12.3243C20.5598 12.5319 20.4428 12.8135 20.4428 13.1071V23.7239C20.3576 23.6912 20.2742 23.6547 20.1928 23.6148M20.7681 42.6757C20.9764 42.8834 21.2589 43 21.5535 43C21.8481 43 22.1306 42.8834 22.3389 42.6757H20.7681ZM20.4428 26.2821C19.1884 26.0269 18.061 25.3475 17.2514 24.3589C16.4418 23.3703 15.9997 22.1333 16 20.8571M20.4428 26.2821H20.1928V26.4827M20.4428 26.2821L20.3929 26.5271C20.3259 26.5135 20.2591 26.4987 20.1928 26.4827M16 20.8571V13.1071C16 12.8135 16.117 12.5319 16.3253 12.3243C16.5336 12.1166 16.8161 12 17.1107 12C17.4053 12 17.6878 12.1166 17.8961 12.3243C18.1044 12.5319 18.2214 12.8135 18.2214 13.1071V20.8571C18.221 21.5443 18.4345 22.2146 18.8323 22.7758C19.1782 23.2637 19.6487 23.6481 20.1928 23.8908V23.6148M16 20.8571L15.75 20.8571M16 20.8571H15.75C15.7497 22.1911 16.2119 23.4841 17.058 24.5173C17.8608 25.4976 18.9626 26.1869 20.1928 26.4827M20.1928 23.6148C19.7326 23.3891 19.3344 23.0517 19.0363 22.6312C18.6684 22.1123 18.4711 21.4925 18.4714 20.8573V20.8571V13.1071C18.4714 12.7469 18.3278 12.4017 18.0726 12.1472C17.8173 11.8928 17.4713 11.75 17.1107 11.75C16.7501 11.75 16.4041 11.8928 16.1488 12.1472C15.8936 12.4017 15.75 12.7469 15.75 13.1071V20.8571M20.1928 23.6148L15.75 20.8571M22.9142 23.8908V23.6148C22.8327 23.6547 22.7493 23.6912 22.6642 23.7239L22.9142 23.8908ZM22.9142 23.8908C22.8324 23.9272 22.7491 23.9604 22.6642 23.9904L22.9142 23.8908ZM15.75 20.8571L20.1928 26.4827M27.357 20.8571L27.107 20.8571H27.357C27.357 20.8571 27.357 20.8571 27.357 20.8571ZM22.9142 26.4827V26.2821H22.6642L22.714 26.5271C22.7811 26.5135 22.8478 26.4987 22.9142 26.4827ZM34.0211 28.3571V16.0469C35.5297 17.9846 36.4912 19.8017 36.9348 21.4833C37.4561 23.4645 37.7832 25.7551 37.9079 28.3571H34.0211ZM34.0211 31.0714H40.4353H40.6853V30.8214C40.6853 26.9712 40.313 23.6273 39.5663 20.7935C38.8119 17.9298 36.9292 14.9398 33.9518 11.8272L33.8779 11.75H33.7711H31.5497H31.2997V12V41.8929C31.2997 42.2531 31.4433 42.5983 31.6986 42.8528C31.9538 43.1072 32.2998 43.25 32.6604 43.25C33.021 43.25 33.3671 43.1072 33.6223 42.8528C33.8776 42.5983 34.0211 42.2531 34.0211 41.8929V31.0714Z" fill="#C5BABA" stroke="#C5BABA" stroke-width="0.5"/>
						<defs>
						<filter id="filter0_b_3737_158" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3737_158"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3737_158" result="shape"/>
						</filter>
						</defs>
					</svg>
					<svg class="absolute bottom-0 left-auto" style="left:75%; top:76%" id="icon-4" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_3737_171)">
							<circle cx="27" cy="29" r="27" fill="#515254"/>
							</g>
							<path d="M11.6256 20.933C12.6267 21.5079 13.9044 21.1625 14.4793 20.1614C15.0542 19.1603 14.7087 17.8827 13.7076 17.3078C12.7065 16.7328 11.429 17.0783 10.854 18.0794C10.2791 19.0805 10.6245 20.3581 11.6256 20.933Z" fill="#C5BABA"/>
							<path d="M41.5181 20.4085C42.5192 20.9834 43.7969 20.6379 44.3718 19.6369C44.9467 18.6358 44.6013 17.3581 43.6002 16.7832C42.5991 16.2082 41.3215 16.5538 40.7466 17.5549C40.1716 18.5559 40.5171 19.8335 41.5181 20.4085Z" fill="#C5BABA"/>
							<path d="M41.7859 15.9485C42.4658 16.3389 43.3334 16.1043 43.7238 15.4244C44.1143 14.7446 43.8797 13.877 43.1999 13.4865C42.52 13.0961 41.6523 13.3307 41.2619 14.0105C40.8714 14.6904 41.1061 15.558 41.7859 15.9485Z" fill="#C5BABA"/>
							<path d="M11.8936 16.4724C12.5734 16.8628 13.4411 16.6282 13.8315 15.9483C14.2219 15.2685 13.9874 14.4009 13.3075 14.0104C12.6277 13.62 11.76 13.8546 11.3696 14.5344C10.9791 15.2143 11.2138 16.0819 11.8936 16.4724Z" fill="#C5BABA"/>
							<path d="M35.3556 37.2321L35.4128 37.2109L35.4185 37.2322L41.8608 37.1185C43.3614 37.0898 44.554 35.8589 44.5253 34.3584L44.5275 34.2607L44.5487 34.2549L44.3376 22.2971L40.8857 22.3564L41.0476 31.5966C41.0504 31.6072 41.0466 31.614 41.0495 31.6246C41.0712 32.7614 40.1685 33.6911 39.0317 33.7128L33.3972 33.8138L30.788 33.8623C29.9802 33.8751 29.297 34.3912 29.0323 35.1026L28.9711 31.6226L28.9349 29.5871L30.7151 29.5572C31.551 29.5425 32.2307 28.8445 32.216 28.0086L32.1782 25.8193L32.1566 24.6196L32.1567 24.5567C32.1472 24.0565 31.7301 23.6552 31.23 23.6647L31.1778 23.6617L28.2608 23.7134C27.9774 23.7215 27.7428 23.4878 27.7414 23.2082C27.7333 22.9248 27.967 22.6902 28.2466 22.6889L28.5824 22.6838L31.1248 22.6419C31.625 22.6323 32.0264 22.2153 32.0168 21.7151L31.9597 18.5882L31.9348 17.1439L31.9028 17.2154L31.8971 17.1312L31.9281 17.14C31.9233 16.6785 31.539 16.3139 31.0776 16.3187L29.2239 16.3514C28.9791 16.3548 28.7773 16.1579 28.774 15.9132C28.7707 15.6684 28.9675 15.4667 29.2123 15.4634L32.0557 15.4144L32.5384 15.4038C33.591 15.3877 34.4595 14.6273 34.66 13.6361L35.158 11.9074L35.2461 11.4723C35.2374 11.0176 34.8666 10.6607 34.4119 10.6694C33.9572 10.6781 33.6004 11.0488 33.6091 11.5035L33.6156 11.6332C33.5538 12.4612 33.4736 13.3056 32.7874 13.8739C32.6004 14.0273 32.3844 14.1371 32.1637 14.2082L24.9887 14.4858L23.5443 14.5107C20.9457 14.5564 18.8478 16.5805 18.6623 19.1273L18.6652 19.138C18.6533 19.284 18.6481 19.434 18.6536 19.581C18.6552 19.7349 18.6713 19.879 18.6836 20.03L18.9307 34.0862L16.7414 34.124C15.6046 34.1457 14.6749 33.243 14.6532 32.1063C14.6503 32.0956 14.6543 32.0889 14.6514 32.0783L14.4895 22.838L11.0377 22.8973L11.2488 34.8551L11.2661 34.8561L11.2708 34.9577C11.2994 36.4582 12.5303 37.6508 14.0309 37.6222L20.4732 37.5084L20.4742 37.491L20.536 37.5085C20.9065 37.5055 21.2292 37.7267 21.3571 38.0521L21.5087 46.6838L34.7223 46.4474L34.5707 37.8157C34.674 37.4792 34.9851 37.2351 35.3556 37.2321ZM26.9779 35.8295L26.9043 35.8322C26.8882 34.7797 26.0146 33.9361 24.9649 33.9628L24.2828 33.9759L24.1972 29.2857C24.4666 29.5213 24.8252 29.6643 25.217 29.6555L26.8607 29.6281L26.9779 35.8295Z" fill="#C5BABA"/>
							<defs>
							<filter id="filter0_b_3737_171" x="-10" y="-8" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3737_171"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3737_171" result="shape"/>
							</filter>
						</defs>
						</svg>
						
				<svg class="absolute bottom-0 left-auto shaddow" id="shaddow-2" width="1147" height="477"
					viewBox="0 0 1147 477" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1147 0L671 477H-3V0H1103.5H1147Z" fill="black" fill-opacity="0.39" />
				</svg>

				<svg class="hidden absolute inset-0 " style="right:44%" width="1147" height="477" viewBox="0 0 1147 477"
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1147 0L671 477H-3V0H1103.5H1147Z" fill="black" fill-opacity="0.39" />
				</svg>
				<svg class="hidden absolute inset-0 " style="right:44%" width="479" height="477" viewBox="0 0 479 477"
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M479 0L478 478L265.5 479L0 477L264.5 216L479 0Z" fill="black" fill-opacity="0.55" />
				</svg>

			</div>
		</section>

		<section
			class="h-auto items-center bg-white dark:bg-light-purple flex flex-col-reverse lg:flex-row justify-center text-center md:pt-24 lg:pt-8">
			<div class="relative self-center h-auto  flex-auto w-full lg:w-1/2 xl:ml-24 lg:mt-24 md:mt-0">
				<img class="absolute bottom-0 lg:top-0 left-44 2xl:ml-40 2xl:w-80 lg:ml-20 lg:w-64 md:w-64 w-48"
					src="/menu-item-2.png" alt="Drinks" />

				<img class="bottom-0 lg:top-0 left-0 mt-14 2xl:ml-40 lg:ml-20 2xl:w-80 w-52" src="/menu-item-1.png"
					alt="Workplace" />
			</div>
			<div class="flex flex-col mx-auto w-4/5 lg:w-1/2 space-y-6 self-baseline lg:mt-16 xl:mt-24 mt-10 "
				id="drinks-section">
				<img class="mr-auto lg:h-24 xl:h-auto" src="/drinks-menu.png" alt="Drinks" />
				<img class="mr-auto lg:h-24 xl:h-auto hidden" src="/drinks-menu-light.png" alt="Drinks" />
				<h1 class="text-red font-bold capitalize text-left text-6xl  lg:text-4xl xl:text-8xl">Menu.</h1>
				<p class="text-sm lg:text-lg xl:text-xl text-light-red text-left leading-6 mr-auto lg:w-1/2 uppercase">
					We are pleased to offer you a selection of authentic Peruvian cuisine and beverages at Playa. The
					vibrant colours and flavours of the Peruvian culture will enliven your senses with our menu.
					Come in and indulge in our luscious Peruvian dishes!
				</p>
				<a href="./Playa-Menu.pdf" class="text-red capitalize cursor-pointer" target="_blank" >
					<p class="lg:text-lg xl:text-xl text-left text-red leading-6">
						View Menu
					</p>
				</a>
			</div>

		</section>

		<section
			class="h-auto  bg-white dark:bg-light-purple flex flex-col-reverse lg:flex-row-reverse lg:items-end relative justify-center text-center md:pt-24 lg:pt-24">
			<img class="h-auto lg:w-1/2 z-10" src="/concept_tent.png" alt="Tent" />

			<div class="flex relative lg:flex-col flex-col w-4/5 mx-auto lg:w-1/2 p-auto space-y-6 mt-10 self-baseline lg:mt-6 lg:pl-24 z-10"
				id="concept-section">
				<img class="mr-auto lg:h-24 xl:h-auto" src="/fire.png" alt="fire" />
				<img class="mr-auto lg:h-24 xl:h-auto hidden" src="/fire-light.png" alt="fire" />
				<h1 class="text-red font-bold capitalize text-left text-6xl  lg:text-4xl xl:text-8xl">Concept.</h1>
				<p class="text-sm lg:text-lg xl:text-xl text-light-red text-left leading-6 mr-auto lg:w-1/2 uppercase">
					Playa is a concept that combines a variety of events and activities for customers of all ages. It
					provides breathtaking views of the Palm Jumeirah and a taste of Peruvian flavours and culture.</p>
				<a href="/concept" class="text-red capitalize cursor-pointer">
					<p class="lg:text-lg xl:text-xl text-left text-red leading-6 pb-2">
						View Concept
					</p>
				</a>
			</div>

			<object class="absolute bottom-0 left-0 z-0 hidden wave-1 h-10 lg:h-72 xl:h-96 " title="wave"
				data="wave.svg"> </object>
			<object class="absolute bottom-0 left-0 z-0 dark:hidden wave-2 h-10 lg:h-72 xl:h-96" title="wave"
				data="wave-2.svg"> </object>
		</section>

		<section
			class="h-auto w-auto items-center bg-rose-gold dark:bg-black-1 flex flex-row-reverse justify-center text-center md:pt-24 lg:pt-8">
			<div class="flex w-screen p-8 xl:p-16 my-8 xl:my-16 xl:space-x-24 space-x-12">
				<img src="/book-now-1.png" alt="book-1" class="2xl:h-auto hidden lg:block md:h-96" />
				<img src="/book-now-2.png" alt="book-2" class="2xl:h-auto hidden lg:block md:h-96" />
				<img src="/book-now-3.png" alt="book-3" class="2xl:h-auto hidden lg:block md:h-96" />
				<div class="flex flex-grow flex-col justify-center space-y-6">
					<img class="mr-auto" src="/book_sun.svg" alt="sun" />
					<h1 class="text-red text-bold capitalize text-left text-6xl lg:text-8xl w-1/2">Book Now.</h1>
					<svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z"
							fill="#EF5758" />
					</svg>
				</div>
			</div>
		</section>

		<section class="h-auto items-center bg-cover bg-no-repeat" id="events-hero">
			<div class="flex flex-col items-center lg:py-24 xl:py-52 xl:space-y-10 lg:space-y-8 space-y-6 py-12">
				<img src="./dance-statue.webp" alt="Dance Statue" class="h-24 xl:h-auto" srcset="" />
				<h1 class="text-white capitalize text-center lg:text-5xl xl:text-8xl">events</h1>
				<p class="lg:text-lg xl:text-xl text-white text-center leading-6 capitalize w-3/4 lg:w-1/4 mx-auto">
					Brunches, pool events and vibrant night parties and more! Create unforgettable memories with us!
					Check out our events!</p>
				<a href="/events" class="text-red capitalize cursor-pointer">
					<p class="lg:text-lg xl:text-xl text-left text-white leading-6">
						View Calendar
					</p>
				</a>
			</div>
		</section>

		<Footer />
	</PageTransition>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

	* {
		font-family: 'Montserrat', sans-serif !important;
	}

	@keyframes rotate {
		to {
			stroke-dashoffset: 0;
		}
	}




	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	#events-hero {
		background-image: url('/events-background.png');
	}

	@media (min-width: 1524px) {

		.shaddow {
			right: 44%;
		}
	}

	.shaddow {
		max-height: 47%;
		bottom: 6.25%;
		top: auto;
		right: 44%;
		transform: rotate(111deg);
		opacity: 0.95;
	}

	#shaddow-2 {
		display: none;
		right: 43%;
		top: auto;
		transform: rotate(111deg);
	}

	#shaddow-1 {
		-webkit-animation-name: color2;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0s;
		transform-origin: top right;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}

	#icon-4 path{
		-webkit-animation-name: color3;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0s;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}

	#icon-3 path{
		-webkit-animation-name: color3;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 10s;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}

	#icon-2 path{
		-webkit-animation-name: color3;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 17s;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}

	#icon-1 path{
		-webkit-animation-name: color3;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 22s;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}


	#icon-1 path{
		-webkit-animation-name: color3;
		-webkit-animation-duration: 30s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 22s;
		-webkit-transition: -webkit-transform .8s ease-in-out;
		-ms-transition: -ms-transform .8s ease-in-out;
		transition: transform .8s ease-in-out;
	}

	#countText {}

	@-webkit-keyframes color2 {


		15% {
			transform: rotate(-50deg);
			-webkit-transform: rotate(-50deg);
		}
	}

	@-webkit-keyframes color3 {


0% {
	fill: #EF5758;
}
40%{
	fill: #C4BABA;
}
}
</style>