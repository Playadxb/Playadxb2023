<script>
	import Navbar from "./Navbar.svelte";
	function sendEmail() {
		Email.send({
		Host: "smtp.gmail.com",
		Username : "wael.m.safa@gmail.com",
		Password : "<email password>",
		To : 'wael.m.safa@gmail.com',
		From : "wael.m.safa@gmail.com",
		Subject : "<email subject>",
		Body : "<email body>",
		}).then(
			message => alert("mail sent successfully")
		);
	}
	let hideLogo = false;
	</script>
	
	<main id="book-bg" class="h-full xl:h-full text-white main-content bg-cover bg-repeat">
		<Navbar bind:hideLogo={hideLogo}/>
		<div class="flex flex-col items-center px-5 justify-center logo text-center py-48 space-y-10">
			<h1 class="font-bold text-white md:text-6xl xl:text-8xl xl:w-1/3 mx-auto leading-normal ">Book Now.
			</h1>
			<form method="post"  >
	
			<div class="grid grid-cols-2 gap-12 my-12  justify-center">
	
				<input type="date" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75" />
				<input placeholder="Name" type="name" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75" />
				<input placeholder="Email Adress" type="email" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75" />
				<input placeholder="Phone Number" type="name" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75" />
			</div>
			<input href="/book"
			class="uppercase h-auto self-center text-center w-40 text-rose-gold visited:text-rose-gold dark:text-white font-bold text-18 border-2 border-solid border-rose-gold bg-transparent py-5 px-2"
			aria-current="page" onclick="sendEmail()" type="submit" value="Book Now"/>
		</form>
	
		</div>
	</main>
	
	<style>
		
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
	
		:global(*) {
			font-family: 'Montserrat', sans-serif !important;
			letter-spacing: 0.125rem;
		}
	
		#book-bg{
			background-image:
				url('/concept_tent.png');
			
		}
	
	
	/* 
		#email-input::placeholder {
			font-style: italic;
			padding: 20px;
		} */
	</style>