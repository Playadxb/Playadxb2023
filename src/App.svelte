<script>

</script>

<main class="h-screen text-white main-content">
	<div class="flex flex-col justify-center relative w-screen logo text-center space-y-6 ">
		<img src="/playa-logo.svg" class="xl:h-28 md:h-16 sm:h-14 xl:mt-16 xl:mb-16 md:mt-16" alt="logo" />
		<h1 class="uppercase font-bold text-white lg:text-lg xl:text-5xl xl:w-1/3 mx-auto leading-normal ">Welcome to your new Haven.
		</h1>
		<h3 class="text-normal text-white font-500 xl:text-2xl">Where we celebrate the bounty under the sun together</h3>
		<!-- <div class="flex flex-row w-1/3 h-14 m-auto notify-me-form space-x-4">
			<input type="email" class="grow-0 w-3/4" id="email-input" placeholder="Email Address" />
			<div class="grow">
				<button class=" bg-red h-full capitalize w-auto px-5"> notify me </button>
			</div>
		</div> -->
		<div class="flex xl:flex-row sm:flex-col md:flex-col w-1/2  m-auto notify-me-form space-x-4 justify-center">
			<img width="28px" src="/Mail_2.svg" />
			<a href="mailto:reservations@playadxb.com md:text-sm">reservations@playadxb.com</a>
			<svg class="self-center" width="27" height="1" viewBox="0 0 27 1" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line y1="0.5" x2="27" y2="0.5" stroke="white" />
			</svg>
			<img width="28px" src="/Whatsapp.svg" />
			<a style="color:white" class="text-white md:text-md" href="https://wa.me/971505044506">+971 50 504 4506</a>
			<svg class="self-center" width="27" height="1" viewBox="0 0 27 1" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line y1="0.5" x2="27" y2="0.5" stroke="white" />
			</svg>
			<img width="28px" src="/phone.svg" />
			<p class="capitilize">800PLAYA</p>
		</div>
	</div>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

	* {
		font-family: 'Montserrat', sans-serif !important;
		letter-spacing: 0.125rem;
	}

	main {
		position: relative;
		background: linear-gradient(rgba(83, 83, 83, 0.68),
				rgba(83, 83, 83, 0.68)),
			url('/coming_soon_background.png');
	}

	/* main::before {
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		background: linear-gradient(rgba(83, 83, 83, 0.68),
				rgba(83, 83, 83, 0.68)),
			url('/coming_soon_background.png');
		filter: blur(2px);
		-webkit-filter: blur(2px);
		-moz-filter: blur(2px);
		-o-filter: blur(2px);
		-ms-filter: blur(2px);
	} */

	#email-input::placeholder {
		font-style: italic;
		padding: 20px;
	}
</style>