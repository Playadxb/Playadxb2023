<script>
	import router from "page"
	import Home from './Home.svelte'
	import Book from './Book.svelte'

	let page

	router('/', () => page = Home)
	router('/book', () => page = Book)
	// router('/about', () => page = About)

router.start()
</script>
<svelte:component this={page} />


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
		background-image: url('/playa-landing-hero.webp');
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