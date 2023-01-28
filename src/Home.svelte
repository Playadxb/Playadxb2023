<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({
		url
	}) => ({
		props: {
			url
		}
	});

	import Footer from './Footer.svelte'
	import PageTransition from './PageTransition.svelte'
	import Navbar from './Navbar.svelte'
	export let url;
	/** @type {import('@sveltejs/kit').Load} */

	let hideLogo = true;
	let isTransparent = true;
</script>



<main class="h-full bg-black text-white main-content relative ">

	<Navbar bind:hideLogo={hideLogo} bind:isTransparent={isTransparent} />

	<PageTransition {url}>
		<section
			class="min-h-full lg:max-h-full flex flex-row justify-center text-center sm:bg-no-repeat xl:bg-repeat xl:bg-contain lg:bg-cover md:bg-cover landing-hero">
			<div style="background-image:url('/3 WAVES CLOCK.jpg')" class=" invisible lg:visible absolute top-0 w-full h-screen background-img">
				<div class="blur"></div>
			</div>
			<div class="z-10 self-center flex-auto lg:w-1/2">
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
				<a href="/Drinks Menu.pdf" target="_blank"><svg class="absolute bottom-0 left-auto" style="left:20%; top:20%" id="icon-1" width="54" height="54"
					viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_3967_116)">
						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
						</g>
						<path d="M29 49H26V54H29V49Z" fill="#C4BABA"/>
						<path d="M46 22.6359C46 27.5289 44.0509 32.2216 40.5815 35.6815C37.1121 39.1414 32.4065 41.0851 27.5 41.0851C22.5935 41.0851 17.8879 39.1414 14.4185 35.6815C10.9491 32.2216 9 27.5289 9 22.6359" fill="#C4BABA"/>
						<path d="M45.7756 10.1093L44.8213 9.39551L27.6467 32.2321L28.601 32.9459L45.7756 10.1093Z" fill="#C4BABA"/>
						<path d="M31.0954 29.6291L30.1411 28.9153L27.6467 32.2321L28.601 32.9459L31.0954 29.6291Z" fill="#EBEBEA"/>
						<path d="M33.5329 29.3055C34.7002 28.0168 34.7707 26.1833 33.6906 25.2103C32.6104 24.2373 30.7885 24.4933 29.6213 25.782C28.454 27.0707 28.3835 28.9041 29.4637 29.8771C30.5438 30.8501 32.3657 30.5942 33.5329 29.3055Z" fill="#EBEBEA"/>
						<path d="M37.4284 24.5119C38.5957 23.2232 38.6662 21.3897 37.5861 20.4167C36.5059 19.4437 34.684 19.6997 33.5168 20.9884C32.3495 22.2771 32.279 24.1105 33.3592 25.0835C34.4393 26.0565 36.2612 25.8006 37.4284 24.5119Z" fill="#EBEBEA"/>
						<path d="M31.3871 41.0826H23.9214V48.5279H31.3871V41.0826Z" fill="#C4BABA"/>
						<path d="M29.4142 43.05H25.8916V46.563H29.4142V43.05Z" fill="#ECEBEB"/>
						<path d="M28.3898 44.0719H26.9165V45.5411H28.3898V44.0719Z" fill="#C4BABA"/>
						<defs>
						<filter id="filter0_b_3967_116" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_116"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_116" result="shape"/>
						</filter>
						</defs>
				</svg></a>
				<a href="/Pool & Beach Menu.pdf" target="_blank"><svg class="absolute bottom-0 left-auto" style="left:15%; top:52%" id="icon-2"  width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_3967_115)">
						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
						</g>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.4308V22.1183C0.135767 22.124 0.271881 22.1269 0.408262 22.127C2.80626 22.1284 5.12267 21.2563 6.9243 19.6737L7.1617 19.4805C8.59384 18.2191 10.3615 17.4008 12.2499 17.125C14.1383 16.8492 16.0662 17.1278 17.7992 17.9269C18.9531 18.4134 20.0066 19.1098 20.9064 19.9807C22.6096 21.3062 24.7072 22.0241 26.8655 22.0201C29.0238 22.0161 31.1187 21.2904 32.817 19.9586C33.6975 19.1115 34.724 18.4307 35.8468 17.949C37.5839 17.1368 39.5202 16.8491 41.4183 17.1212C43.3164 17.3932 45.094 18.2131 46.533 19.4805L46.7704 19.6737C48.5002 21.1932 50.7045 22.0577 53 22.123V22.4308H0Z" fill="#C4BABA"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.8403V27.5277C0.135767 27.5334 0.271881 27.5363 0.408262 27.5364C2.80626 27.5378 5.12267 26.6657 6.9243 25.0832L7.1617 24.8899C8.59384 23.6285 10.3615 22.8102 12.2499 22.5344C14.1383 22.2587 16.0662 22.5372 17.7992 23.3364C18.9531 23.8228 20.0066 24.5192 20.9064 25.3901C22.6096 26.7156 24.7072 27.4335 26.8655 27.4295C29.0238 27.4255 31.1187 26.6999 32.817 25.368C33.6975 24.5209 34.724 23.8401 35.8468 23.3584C37.5839 22.5463 39.5202 22.2585 41.4183 22.5306C43.3164 22.8026 45.094 23.6226 46.533 24.8899L46.7704 25.0832C48.5002 26.6026 50.7045 27.4672 53 27.5324V27.8403H0Z" fill="#C4BABA"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.2507V32.9381C0.135767 32.9438 0.271881 32.9467 0.408262 32.9468C2.80626 32.9482 5.12267 32.0761 6.9243 30.4936L7.1617 30.3003C8.59384 29.0389 10.3615 28.2206 12.2499 27.9448C14.1383 27.6691 16.0662 27.9476 17.7992 28.7468C18.9531 29.2332 20.0066 29.9296 20.9064 30.8005C22.6096 32.126 24.7072 32.8439 26.8655 32.8399C29.0238 32.8359 31.1187 32.1103 32.817 30.7784C33.6975 29.9313 34.724 29.2505 35.8468 28.7688C37.5839 27.9567 39.5202 27.6689 41.4183 27.941C43.3164 28.213 45.094 29.033 46.533 30.3003L46.7704 30.4936C48.5002 32.013 50.7045 32.8776 53 32.9428V33.2507H0Z" fill="#C4BABA"/>
						<defs>
						<filter id="filter0_b_3967_115" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_115"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_115" result="shape"/>
						</filter>
						</defs>
				</svg></a>
				<a href="/Food Menu.pdf" target="_blank"><svg class="absolute bottom-0 left-auto" style="left:45%; top:80%" id="icon-3" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_3967_114)">

						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
						</g>
						<path d="M20.7681 42.6757C20.5598 42.4681 20.4428 42.1865 20.4428 41.8929V26.2821M20.7681 42.6757V12.3243C20.5598 12.5319 20.4428 12.8135 20.4428 13.1071V23.7239C20.3576 23.6912 20.2742 23.6547 20.1928 23.6148M20.7681 42.6757C20.9764 42.8834 21.2589 43 21.5535 43C21.8481 43 22.1306 42.8834 22.3389 42.6757H20.7681ZM20.4428 26.2821C19.1884 26.0269 18.061 25.3475 17.2514 24.3589C16.4418 23.3703 15.9997 22.1333 16 20.8571M20.4428 26.2821H20.1928V26.4827M20.4428 26.2821L20.3929 26.5271C20.3259 26.5135 20.2591 26.4987 20.1928 26.4827M16 20.8571V13.1071C16 12.8135 16.117 12.5319 16.3253 12.3243C16.5336 12.1166 16.8161 12 17.1107 12C17.4053 12 17.6878 12.1166 17.8961 12.3243C18.1044 12.5319 18.2214 12.8135 18.2214 13.1071V20.8571C18.221 21.5443 18.4345 22.2146 18.8323 22.7758C19.1782 23.2637 19.6487 23.6481 20.1928 23.8908V23.6148M16 20.8571L15.75 20.8571M16 20.8571H15.75C15.7497 22.1911 16.2119 23.4841 17.058 24.5173C17.8608 25.4976 18.9626 26.1869 20.1928 26.4827M20.1928 23.6148C19.7326 23.3891 19.3344 23.0517 19.0363 22.6312C18.6684 22.1123 18.4711 21.4925 18.4714 20.8573V20.8571V13.1071C18.4714 12.7469 18.3278 12.4017 18.0726 12.1472C17.8173 11.8928 17.4713 11.75 17.1107 11.75C16.7501 11.75 16.4041 11.8928 16.1488 12.1472C15.8936 12.4017 15.75 12.7469 15.75 13.1071V20.8571M20.1928 23.6148L15.75 20.8571M22.9142 23.8908V23.6148C22.8327 23.6547 22.7493 23.6912 22.6642 23.7239L22.9142 23.8908ZM22.9142 23.8908C22.8324 23.9272 22.7491 23.9604 22.6642 23.9904L22.9142 23.8908ZM15.75 20.8571L20.1928 26.4827M27.357 20.8571L27.107 20.8571H27.357C27.357 20.8571 27.357 20.8571 27.357 20.8571ZM22.9142 26.4827V26.2821H22.6642L22.714 26.5271C22.7811 26.5135 22.8478 26.4987 22.9142 26.4827ZM34.0211 28.3571V16.0469C35.5297 17.9846 36.4912 19.8017 36.9348 21.4833C37.4561 23.4645 37.7832 25.7551 37.9079 28.3571H34.0211ZM34.0211 31.0714H40.4353H40.6853V30.8214C40.6853 26.9712 40.313 23.6273 39.5663 20.7935C38.8119 17.9298 36.9292 14.9398 33.9518 11.8272L33.8779 11.75H33.7711H31.5497H31.2997V12V41.8929C31.2997 42.2531 31.4433 42.5983 31.6986 42.8528C31.9538 43.1072 32.2998 43.25 32.6604 43.25C33.021 43.25 33.3671 43.1072 33.6223 42.8528C33.8776 42.5983 34.0211 42.2531 34.0211 41.8929V31.0714Z" fill="#C5BABA" stroke="#C5BABA" stroke-width="0.5"/>
						<defs>
						<filter id="filter0_b_3967_114" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_114"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_114" result="shape"/>
						</filter>
						</defs>
						</svg>
						</a>
						
						<a href="/menus"><svg class="absolute bottom-0 left-auto" style="left:75%; top:76%" id="icon-4" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_3967_112)">
							<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
							</g>
							<path d="M25.7847 20.6818L25.0728 24.2166H28.5407L27.7935 20.6818L26.8067 20.0903L25.7847 20.6818Z" fill="#C4BABA"/>
							<path d="M25.0728 27.991H28.5407L27.716 24.2168H25.8622L25.0728 27.991Z" fill="#C4BABA"/>
							<path d="M25.0728 31.7722H28.5407L27.716 27.991H25.8622L25.0728 31.7722Z" fill="#C4BABA"/>
							<path d="M25.0728 35.5464H28.5407L27.716 31.7722H25.8622L25.0728 35.5464Z" fill="#C4BABA"/>
							<path d="M25.0728 39.3206H28.5407L27.716 35.5464H25.8622L25.0728 39.3206Z" fill="#C4BABA"/>
							<path d="M25.0728 42.8978H28.5407L27.716 39.1235H25.8622L25.0728 42.8978Z" fill="#C4BABA"/>
							<path d="M25.0728 46.6719H28.5407L27.716 42.8977H25.8622L25.0728 46.6719Z" fill="#C4BABA"/>
							<path d="M25.0728 50.4461H28.5407L27.716 46.6719H25.8622L25.0728 50.4461Z" fill="#C4BABA"/>
							<path d="M24.417 54.2274H29.1466L27.7157 50.4462H25.862L24.417 54.2274Z" fill="#C4BABA"/>
							<path d="M10.7852 31.554C10.7875 29.6358 11.2484 27.7459 12.1297 26.0418C13.011 24.3376 14.2871 22.8684 15.8518 21.7566C17.4164 20.6447 19.2244 19.9224 21.125 19.6497C23.0256 19.3771 24.9639 19.562 26.7785 20.189" fill="#C4BABA"/>
							<path d="M7 20.4426C8.10419 18.8719 9.5684 17.5879 11.2705 16.6977C12.9725 15.8075 14.8631 15.3369 16.7843 15.3252C18.7055 15.3135 20.6017 15.761 22.3145 16.6304C24.0273 17.4998 25.5071 18.7658 26.6304 20.3229" fill="#C4BABA"/>
							<path d="M9.28369 11.3732C10.9855 10.4827 12.8759 10.0119 14.797 10.0002C16.7181 9.98858 18.6141 10.4364 20.3266 11.3063C22.0391 12.1761 23.5183 13.4427 24.6407 15.0003C25.7631 16.5579 26.4961 18.3612 26.7784 20.2595" fill="#C4BABA"/>
							<path d="M42.2147 32.061C42.2159 30.1409 41.757 28.2484 40.8762 26.5418C39.9954 24.8352 38.7184 23.364 37.1519 22.2514C35.5855 21.1388 33.7751 20.417 31.8723 20.1464C29.9694 19.8758 28.0294 20.0643 26.2144 20.6961" fill="#C4BABA"/>
							<path d="M46 20.9495C44.8954 19.3798 43.4313 18.0966 41.7297 17.2067C40.0281 16.3168 38.1382 15.846 36.2176 15.8336C34.2969 15.8212 32.4011 16.2675 30.6881 17.1354C28.9751 18.0032 27.4944 19.2674 26.3696 20.8227" fill="#C4BABA"/>
							<path d="M43.716 11.873C42.0128 10.9859 40.1221 10.5181 38.2012 10.5085C36.2804 10.4988 34.385 10.9477 32.6729 11.8177C30.9608 12.6877 29.4815 13.9536 28.3581 15.5102C27.2347 17.0667 26.4997 18.8687 26.2144 20.7664" fill="#C4BABA"/>
							<defs>
							<filter id="filter0_b_3967_112" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_112"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_112" result="shape"/>
							</filter>
							</defs>
						</svg>
						</a>
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
				<img class="absolute bottom-0 lg:top-0 left-44 2xl:ml-40 2xl:w-80 lg:ml-20 lg:w-64 md:w-64 w-48 menu-item-2" alt="Drinks" />

				<img class="bottom-0 lg:top-0 left-0 mt-14 2xl:ml-40 lg:ml-20 2xl:w-80 w-52 menu-item-1"
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
				<a href="/menus" class="text-red capitalize cursor-pointer">
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
			class="h-auto w-auto items-center bg-rose-gold dark:bg-black-1 flex flex-row-reverse justify-center text-center md:pt-24 lg:pt-8 px-12 lg:px-16">
			<div class="flex w-screen my-8 xl:my-16 xl:space-x-24 space-x-12">
				<img src="/book-now-1.png" alt="book-1" class=" hidden lg:block w-48 object-cover h-auto md:h-96 " />
				<img src="/book-now-2.png" alt="book-2" class=" hidden lg:block w-48 object-cover h-auto md:h-96" />
				<img src="/book-now-3.png" alt="book-3" class=" hidden lg:block w-48 object-cover h-auto md:h-96" />
				<div class="flex flex-grow flex-col justify-center space-y-6">
					<img class="mr-auto" src="/book_sun.svg" alt="sun" />
					<h1 class="text-red text-bold capitalize text-left text-4xl xl:text-8xl lg:text-6xl w-1/2">Book Now.</h1>
					<a href="/book" target="_blank" ><svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z"
							fill="#EF5758" />
					</svg></a>
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
.background-img{
background-image:url('/3 WAVES CLOCK.jpg') ;
background-size:cover;

}

@media only screen and  (min-width:1200px) {
	.shaddow{
		bottom:10.25%;
	}
}

</style>