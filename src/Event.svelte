<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
  </script>

<script>
	import Footer from './Footer.svelte'
	import PageTransition from './PageTransition.svelte'
	import Navbar from './Navbar.svelte'
	export let url;
		  /** @type {import('@sveltejs/kit').Load} */

	export const load = async ({ url }) => ({ props: { url } });
    let isTransparent = false;
    let hideLogo = false;

</script>

<main class="h-full xl:h-full text-white main-content bg-cover bg-repeat bg-dark-grey">
    <Navbar bind:isTransparent={isTransparent} bind:hideLogo="{hideLogo}" />

    <PageTransition {url} >
    <section
        class="flex flex-col items-center py-14 px-5 bg-dark-grey h-auto justify-center  text-center z-50 space-y-8">
        <h1 class=" text-dark-red font-bold capitalize text-center lg:text-7xl xl:text-8xl pt-12 z-10">events.</h1>
        <p class="lg:text-md xl:text-lg text-white text-center leading-6 capitalize w-1/2 mx-auto z-10">Brunches, pool events, vibrant night
            parties and more!
            Check out our events
            </p>
    </section>
    <section style="background-image: url('/events-1.png')" class="event-details-section h-48 lg:h-full w-screen  bg-cover flex flex-col pt-12 pb-10">
        <h1 class=" flex-1 text-dark-red font-bold capitalize text-center lg:text-7xl xl:text-8xl ">03<span
                class="sup">/12</span></h1>
    </section>
    <div class="px-4 h-24 w-full bg-extra-grey lg:px-32 xl:px-48 flex items-center space-x-4">
        <div class="flex flex-row justify-between w-full ">
            <p class="flex-auto text-white text-sm lg:text-lg font-bold">03.03.2021 | 8 PM</p>
            <p class="flex-auto justify-center text-center text-white text-sm lg:text-lg ">SUN CELEBRATIONS <i
                    class="font-semibold">CULTURAL DANCE</i></p>
            <div class="flex-auto justify-end flex flex-row items-center">
                <p class="text-dark-red text-lg pr-4">Book Now
                </p>
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z"
                        fill="#EF5758" />
                </svg>
            </div>
        </div>
    </div>
    <section style="background-image: url('/events-2.png')" class="event-details-section h-48 lg:h-full w-screen  bg-cover flex flex-col pt-12 pb-10">
        <h1 class=" flex-1 text-dark-red font-bold capitalize text-center lg:text-7xl xl:text-8xl ">03<span
                class="sup">/12</span></h1>
    </section>
    <div class="px-4 h-24 w-full bg-extra-grey lg:px-32 xl:px-48 flex items-center space-x-4">
        <div class="flex flex-row justify-between w-full ">
            <p class="flex-auto text-white text-sm lg:text-lg font-bold">03.03.2021 | 8 PM</p>
            <p class="flex-auto justify-center text-center text-white text-sm lg:text-lg ">SUN CELEBRATIONS <i
                    class="font-semibold">CULTURAL DANCE</i></p>
            <div class="flex-auto justify-end flex flex-row items-center">
                <p class="text-dark-red text-lg pr-4">Book Now
                </p>
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z"
                        fill="#EF5758" />
                </svg>
            </div>
        </div>
    </div>
    <section style="background-image: url('/events-3.png')" class="event-details-section h-48 lg:h-full w-screen  bg-cover flex flex-col pt-12 pb-10">
        <h1 class=" flex-1 text-dark-red font-bold capitalize text-center lg:text-7xl xl:text-8xl ">03<span
                class="sup">/12</span></h1>
    </section>
    <div class="px-4 h-24 w-full bg-extra-grey lg:px-32 xl:px-48 flex items-center space-x-4">
        <div class="flex flex-row justify-between w-full ">
            <p class="flex-auto text-white text-sm lg:text-lg font-bold">03.03.2021 | 8 PM</p>
            <p class="flex-auto justify-center text-center text-white text-sm lg:text-lg ">SUN CELEBRATIONS <i
                    class="font-semibold">CULTURAL DANCE</i></p>
            <div class="flex-auto justify-end flex flex-row items-center">
                <p class="text-dark-red text-lg pr-4">Book Now
                </p>
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 7C0.447715 7 -4.8282e-08 7.44772 0 8C1.07887e-07 8.55229 0.447715 9 1 9L1 7ZM34.7071 8.7071C35.0976 8.31658 35.0976 7.68341 34.7071 7.29289L28.3431 0.92893C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.7071ZM1 9L34 9L34 7L1 7L1 9Z"
                        fill="#EF5758" />
                </svg>
            </div>
        </div>
    </div>
    <Footer />
</PageTransition>

</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

    :global(*) {
        font-family: 'Montserrat', sans-serif !important;
        letter-spacing: 0.125rem;
    }
    .event-details-section {
    }

    .sup {
        position: relative;
        bottom: 1ex;
        font-size: 60%;
        opacity: 56%;
    }

    /* 
	#email-input::placeholder {
		font-style: italic;
		padding: 20px;
	} */
</style>