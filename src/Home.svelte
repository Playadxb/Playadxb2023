<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
  </script>

<script>
	import Footer from './Footer.svelte'
	import PageTransition from './PageTransition.svelte'
	export let url;
		  /** @type {import('@sveltejs/kit').Load} */

	export const load = async ({ url }) => ({ props: { url } });

</script>


<main class="h-full bg-black text-white main-content relative ">

	<nav class="block bg-transparent px-6 lg:px-16 border-gray-200  sm:px-4 py-6 dark:bg-gray-800 absolute top-0 w-full z-10">
		<div class="lg:container lg:flex flex-wrap justify-end mx-auto">
			<div class=" flex justify-end lg:justify-between items-center w-full md:flex md:w-auto md:order-1"
				id="mobile-menu-3">
				<div class="flex flex-col h-14 space-x-9 md:flex-row md:mt-0 ">
					<button href="#" class="xl:w-16 xl:h-16 w-14 h-14 rounded-full bg-rose-gold hidden lg:block" aria-current="page">
						<svg width="18" height="22" viewBox="0 0 18 22" class="m-auto" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
								stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path
								d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
								stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
					<button href="#" class="xl:w-16 xl:h-16 w-14 h-14 rounded-full bg-rose-gold hidden lg:block" aria-current="page">
						<svg width="15" height="20" viewBox="0 0 15 20" class="m-auto" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.45979 6.29957C1.18898 4.51409 2.44991 2.90631 4.37612 2.31636C4.71813 2.21169 5.08719 2.24143 5.40801 2.39953C5.72884 2.55764 5.97726 2.83218 6.1026 3.16717L6.72027 4.81618C6.81958 5.08143 6.83739 5.37031 6.77141 5.64575C6.70543 5.92119 6.55867 6.17065 6.34996 6.36212L4.51259 8.04738C4.42198 8.13063 4.35445 8.23592 4.31659 8.353C4.27872 8.47008 4.27181 8.59497 4.29651 8.71551L4.31286 8.78943L4.35835 8.97495C4.39887 9.13132 4.45999 9.35166 4.546 9.61465C4.71658 10.1371 4.98881 10.8393 5.39396 11.5409C5.7991 12.2424 6.27106 12.8295 6.63782 13.2382C6.82884 13.451 7.0285 13.6559 7.2363 13.8523L7.29316 13.9049C7.38506 13.9863 7.49648 14.0425 7.61656 14.068C7.73664 14.0936 7.86128 14.0876 7.97835 14.0506L10.3566 13.3022C10.6268 13.2172 10.9163 13.215 11.1878 13.2956C11.4593 13.3763 11.7005 13.5362 11.8805 13.7549L13.0057 15.1211C13.4748 15.6897 13.4194 16.5256 12.8799 17.0281C11.4057 18.402 9.37859 18.6842 7.9684 17.5498C6.23989 16.1557 4.78269 14.4554 3.66961 12.5338C2.54732 10.6135 1.79759 8.49867 1.45979 6.30028V6.29957ZM5.7856 8.80863L7.31093 7.40981C7.72836 7.02687 8.02187 6.52796 8.15383 5.97707C8.28579 5.42618 8.25018 4.84843 8.05156 4.31792L7.43319 2.66891C7.18091 1.99518 6.68119 1.44303 6.03589 1.125C5.39059 0.806971 4.64829 0.747015 3.96031 0.957353C1.56854 1.68946 -0.351986 3.83388 0.05458 6.51281C0.338892 8.38429 0.994942 10.7633 2.44067 13.2489C3.64122 15.321 5.21287 17.1546 7.07708 18.6579C9.19165 20.3567 12.0163 19.7774 13.8494 18.068C14.3739 17.5791 14.6922 16.9086 14.7393 16.1931C14.7865 15.4776 14.559 14.7711 14.1031 14.2177L12.978 12.8515C12.6179 12.414 12.1353 12.094 11.5922 11.9327C11.049 11.7713 10.47 11.776 9.92944 11.946L7.95561 12.5672C7.86725 12.4764 7.78076 12.3837 7.69617 12.2893C7.29052 11.8405 6.93162 11.3516 6.62503 10.8301C6.32656 10.3037 6.08245 9.74835 5.89648 9.17255C5.85704 9.05201 5.82007 8.93068 5.7856 8.80863Z"
								fill="#454545" />
						</svg>
					</button>
					<a href="/book"
						class="uppercase h-auto self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 hidden lg:block"
						aria-current="page" style="color:white">book now</a>
					<a class="flex justify-center items-center" href="#"><img src="/humburger-menu-icon.svg" alt=""
							srcset="" /></a>

				</div>
			</div>
		</div>
	</nav>

	<PageTransition {url} > 

	<section class="min-h-full flex flex-row justify-center text-center sm:bg-no-repeat xl:bg-repeat xl:bg-contain lg:bg-cover md:bg-cover " id="landing-hero">
		<div class="self-center flex-auto lg:w-1/2">
			<div class="flex flex-col m-auto w-4/5 lg:w-1/2 space-y-6">
				<img class="m-auto" src="/logo.png" alt="Playa Logo" />
				<p class="text-xl sm:text-center lg:text-left text-white leading-6">The embodiment of its origins, Playa aims to transcend its physicality to become that feeling of renewed vigour for life, experienced through all the senses. It is the ideal hideaway on the serene Palm Jumeirah beach.
					With the shamanic house music, authentic savoury cuisine with nourishing foods that fuel your spirit, and the diverse events that revitalise your soul, Playa's experience allows you to re-energize. 
					Playa is life renewed!
</p>
			</div>
		</div>
		<div class="relative hidden lg:block">
			<img src="/clock_ring.svg" class="w-auto h-auto" alt="clock ring" />
			<img src="/monument.svg" alt="monument" class="absolute" style="left:55%; top:31%; z-index:2;" />
			<img class="absolute inset-0 left-auto lg:w-32/50" src="/up-right-shaddow.svg" alt="" />
			<!-- <svg class="absolute inset-0 left-auto lg:w-32/50" width="968" height="394" viewBox="0 0 968 394" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 -2H806L960 381L967.5 394L0 -2Z" fill="black" fill-opacity="0.64"/>
				</svg> -->
		</div>
	</section>

	<section class="h-auto items-center bg-white dark:bg-light-purple flex flex-col-reverse lg:flex-row justify-center text-center md:pt-24 lg:pt-8">
		<div class="relative self-center h-auto  flex-auto w-full lg:w-1/2 xl:ml-24 lg:mt-96 md:mt-0">
			<img class="absolute bottom-0 lg:top-0 left-44 2xl:ml-40 2xl:w-80 lg:ml-20 lg:w-64 md:w-64 w-48" src="/menu-item-2.png" alt="Drinks" />

			<img class="bottom-0 lg:top-0 left-0 mt-14 2xl:ml-40 lg:ml-20 2xl:w-80 w-52" src="/menu-item-1.png" alt="Workplace" />
		</div>
		<div class="flex flex-col mx-auto w-4/5 lg:w-1/2 space-y-6 self-baseline lg:mt-16 xl:mt-24 mt-10 ">
			<img class="mr-auto lg:h-24 xl:h-auto" src="/drinks-menu.png" alt="Drinks" />
			<h1 class="text-red font-bold capitalize text-left text-6xl  lg:text-4xl xl:text-8xl">Menu.</h1>
			<p class="text-md lg:text-lg xl:text-xl text-light-red text-left leading-6 mr-auto lg:w-1/2 uppercase">We are pleased to offer you a selection of authentic Peruvian cuisine and beverages at Playa. The vibrant colours and flavours of the Peruvian culture will enliven your senses with our menu.
				Come in and indulge in our luscious Peruvian dishes!
				</p>
			<a href="" class="text-red capitalize cursor-pointer">
				<p class="lg:text-lg xl:text-xl text-left text-red leading-6">
					View Menu
				</p>
			</a>
		</div>

	</section>

	<section class="h-auto items-center bg-white dark:bg-light-purple flex flex-col-reverse lg:flex-row-reverse justify-center text-center md:pt-24 lg:pt-24">
		<img class="h-auto lg:w-1/2 z-10" src="/concept_tent.png" alt="Tent" />

		<div class="flex relative lg:flex-col flex-col w-4/5 mx-auto lg:w-1/2 p-auto space-y-6 mt-10 self-baseline lg:mt-24 lg:pl-24 z-10"
			id="concept-section">
			<img class="mr-auto lg:h-24 xl:h-auto" src="/fire.png" alt="fire" />
			<h1 class="text-red font-bold capitalize text-left text-6xl  lg:text-4xl xl:text-8xl">Concept.</h1>
			<p class="text-md lg:text-lg xl:text-xl text-light-red text-left leading-6 mr-auto lg:w-1/2 uppercase">Playa is a concept that combines a variety of events and activities for customers of all ages. It provides breathtaking views of the Palm Jumeirah and a taste of Peruvian flavours and culture.</p>
			<a href="/concept" class="text-red capitalize cursor-pointer">
				<p class="lg:text-lg xl:text-xl text-left text-red leading-6 pb-10">
					View Concept
				</p>
			</a>
		</div>
		<!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave.svg"> </object> -->
		<!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave-2.svg"> </object> -->
	</section>

	<section class="h-auto w-auto items-center bg-rose-gold dark:bg-dark-purple flex flex-row-reverse justify-center text-center md:pt-24 lg:pt-8">
		<div class="flex w-screen p-8 xl:p-16 my-8 xl:my-16 xl:space-x-24 space-x-12">
				<img src="/book-now-1.png" alt="book-1" class="2xl:h-auto hidden lg:block md:h-96"/>
				<img src="/book-now-2.png" alt="book-2" class="2xl:h-auto hidden lg:block md:h-96"/>
				<img src="/book-now-3.png" alt="book-3" class="2xl:h-auto hidden lg:block md:h-96"/>
				<div class="flex flex-grow flex-col justify-center space-y-6">
					<img class="mr-auto" src="/book_sun.svg" alt="sun" />
					<h1 class="text-red text-bold capitalize text-left text-6xl lg:text-8xl w-1/2">Book Now.</h1>
					<svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z" fill="#EF5758"/>
					</svg>						
				</div>
		</div>
	</section>

	<section class="h-auto items-center bg-cover bg-no-repeat" id="events-hero">
		<div class="flex flex-col items-center lg:py-24 xl:py-52 xl:space-y-10 lg:space-y-8 space-y-6 py-12">
			<img src="./dance-statue.webp" alt="Dance Statue" class="h-24 xl:h-auto" srcset=""/>
			<h1 class="text-white capitalize text-center lg:text-5xl xl:text-8xl">events</h1>
			<p class="lg:text-lg xl:text-xl text-white text-center leading-6 capitalize w-3/4 lg:w-1/4 mx-auto">Lorem ipsum dolor sit amet,
				consectetur adipiscing elit.
				In amet in at magnis semper.</p>
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

	#landing-hero {
		background-image: url('/playa-landing-hero.png');
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	#events-hero{
		background-image: url('/events-background.png');
	}
</style>