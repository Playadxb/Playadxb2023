<script>

</script>

<main class="h-full bg-purple-900 text-white main-content relative">
	<nav class="bg-transparent px-6 lg:px-16 border-gray-200  sm:px-4 py-6 dark:bg-gray-800 absolute top-0 w-full">
		<div class="container flex flex-wrap justify-between items-center mx-auto" id="langing-hero">
			<a href="#" class="flex grow">
				<img src="/playa-logo.svg" alt="" srcset="">
			</a>
			<div class="hidden flex  justify-between items-center w-full md:flex md:w-auto md:order-1"
				id="mobile-menu-3">
				<div class="flex flex-col h-14 md:flex-row md:mt-0 ">
					<button href="#" class="uppercase h-auto w-40  text-beige font-bold text-18 bg-purple"
						aria-current="page">menu</button>
					<button href="#" class="uppercase h-auto w-40 bg-cover text-light-purple font-bold text-18"
						style="background-image:  url('/reserve-button-background.png');">reserve</button>
					<a class="flex justify-center items-center pl-9" href="#"><img src="/humburger-menu-icon.svg" alt=""
							srcset="" /></a>
				</div>
			</div>
		</div>
	</nav>
	<section class="min-h-full bg-blue-100 text-center" id="landing-hero">
		<div class="progress-ring-wrapper">

		</div>
	
	</section>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

	* {
		font-family: 'Montserrat', sans-serif !important;
	}

	#offset-dash:hover {
		transform: rotate(0deg);
		stroke-width: 5px;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-name: rotate;
		animation-duration: 2s;
		animation-timing-function: ease-in-out;
	}

	@keyframes rotate {
		to {
			stroke-dashoffset: 0;
		}
	}


	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>