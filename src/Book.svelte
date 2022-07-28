<script>
import Navbar from "./Navbar.svelte";
async function sendEmail() {
	let name = document.getElementById("name-contact").value;
	let number = document.getElementById("number-contact").value;
	let email = document.getElementById("email-contact").value;
	let date = document.getElementById("reservation-date").value;
    let url = `/.netlify/functions/send-mail?name=${name}&email=${email}&date=${date}&number=${number}`;
	url = url.replace('8080', '8888');
	alert("The team will get back to you soon");

    try {
        const response = await fetch(url);
        const data = await response.json();


        return data;
    } catch (err) {
        console.log(err);
    }
}
let hideLogo = false;
</script>

<main style="height:fit-content" id="book-bg" class="h-full xl:h-full text-white main-content bg-cover bg-repeat">
	<Navbar bind:hideLogo={hideLogo}/>
	<div class="flex flex-col items-center px-5 justify-center logo text-center py-48 space-y-10">
		<h1 class="font-bold text-white text-4xl md:text-6xl xl:text-8xl xl:w-1/3 mx-auto leading-normal ">Book Now.
		</h1>

		<div class="grid grid-cols-2 gap-12 my-12  justify-center">

			<input id="reservation-date" placeholder="Date" type="text" onfocus="(this.type='date')" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75 placeholder-white" />
			<input id="name-contact" placeholder="Name" type="name" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75 placeholder-white" />
			<input id="email-contact" placeholder="Email" type="email" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75 placeholder-white" />
			<input id="number-contact" placeholder="Phone Number" type="name" class="h-auto xl:w-80 lg:w-72 self-center text-center w-40  text-white font-bold text-18 border-2 border-solid border-white bg-transparent py-5 px-2 placeholder-opacity-75 placeholder-white" />
		</div>
		<button 
		class="uppercase h-auto pt-4 self-center text-center w-40 text-rose-gold visited:text-rose-gold dark:text-white font-bold text-18 border-2 border-solid border-rose-gold bg-transparent py-5 px-2"
		aria-current="page" on:click="{sendEmail}" > Book Now</button>

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
			url('/Book_bg.jpg');
		background-position-y:-20em;
		
	}
	@media (max-width: 600px) {

	#book-bg{
		background-image:
			url('/concept_tent.png');
		background-position-y:center;
		background-repeat: no-repeat;
		background-position-x: center;
		
	}
}

	input::placeholder {
        text-align: left;
      }
/* 
	#email-input::placeholder {
		font-style: italic;
		padding: 20px;
	} */
</style>