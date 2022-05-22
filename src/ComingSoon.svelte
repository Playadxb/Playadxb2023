<script>
</script>

<main id='main-1' class="h-max xl:h-full text-white main-content bg-cover bg-no-repeat">
	<div class="flex flex-col px-5 justify-center relative w-screen logo text-center mb-5">
		<img src="/playa-logo.svg" class="h-20 my-12 xl:h-28 md:h-20 xl:mt-16 xl:mb-16 md:mt-16 " alt="logo" />
		<h1 class="uppercase font-bold text-white text-2xl xl:text-5xl xl:w-1/3 mx-auto leading-normal ">Welcome to your new Haven.
		</h1>
		<h3 class="text-xl text-white font-500 xl:text-2xl mt-10 mb-32">Where we celebrate the bounty under the sun together</h3>
		<!-- <div class="flex flex-row w-1/3 h-14 m-auto notify-me-form space-x-4">
			<input type="email" class="grow-0 w-3/4" id="email-input" placeholder="Email Address" />
			<div class="grow">
				<button class=" bg-red h-full capitalize w-auto px-5"> notify me </button>
			</div>
		</div> -->
		<div class="flex xl:flex-row flex-col md:flex-col w-2/3 mb-12 m-auto notify-me-form xl:space-x-4 xl:space-y-0 space-y-8 justify-center">
			<img width="28px" class="self-center" src="/Mail_2.svg" />
			<a href="mailto:reservations@playadxb.com" class="md:text-sm text-xs self-center ">reservations@playadxb.com</a>
			<svg class="self-center" width="27" height="1" viewBox="0 0 27 1" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line y1="0.5" x2="27" y2="0.5" stroke="white" />
			</svg>
			<img width="28px" class="self-center" src="/Whatsapp.svg" />
			<a style="color:white" class="text-white md:text-sm text-xs self-center" href="https://wa.me/971505044506">+971 50 504 4506</a>
			<svg class="self-center " width="27" height="1" viewBox="0 0 27 1" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line y1="0.5" x2="27" y2="0.5" stroke="white" />
			</svg>
			<img width="28px" class="self-center" src="/phone.svg" />
			<a href="tel:+97180075292" class="capitilize text-xs self-center">800PLAYA</a>
		</div>
	</div>
</main>

<style>
	
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
	main#main-1 * {
		font-family: 'Montserrat', sans-serif !important;
		letter-spacing: 0.125rem;
	}
	main#main-1 {
		position: relative;
		background: linear-gradient(rgba(83, 83, 83, 0.68),
				rgba(83, 83, 83, 0.68)),
			url('/coming_soon_background.png');
	}
	main#main-1::before {
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover !important;
		background-repeat: no-repeat;
		position: absolute;
		background: linear-gradient(rgba(83, 83, 83, 0.68),
				rgba(83, 83, 83, 0.68)),
			url('/coming_soon_background.png');
		filter: blur(2px);
		-webkit-filter: blur(2px);
		-moz-filter: blur(2px);
		-o-filter: blur(2px);
		-ms-filter: blur(2px);
	}
/* 
	#email-input::placeholder {
		font-style: italic;
		padding: 20px;
	} */
</style>
