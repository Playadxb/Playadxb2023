<script>
	export let open = false
</script>

<aside class="lg:hidden absolute w-full h-full bg-gray-200 border-r-2 shadow-lg  z-50" class:open>

	<nav class="items-start flex flex-col space-y-4 text-left self-start justify-between p-6 h-3/4 divide-red dark:divide-white m-auto text-xl">
		<button class="w-full " on:click={() => open = false}><svg class="place-self-end fill-[#E4C5B6]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg></button>
		<a class=" text-red font-semibold dark:text-rose-gold text-4xl" href="/">Home</a>
		<hr class="w-1/2 bg-red dark:bg-rose-gold"/>
		<a class=" text-red font-semibold dark:text-rose-gold text-4xl" href="/concept">Concept</a>
		<hr class="w-1/2 bg-red dark:bg-rose-gold"/>
		<!-- <a class=" text-red font-semibold dark:text-rose-gold text-4xl" href="/events">Events</a> -->
		<!-- <hr class="w-1/2 bg-red dark:bg-rose-gold"/> -->
		<a class=" text-red font-semibold dark:text-rose-gold text-4xl" href="/book">Book Now</a>
		<hr class="w-1/2 bg-red dark:bg-rose-gold"/>
	</nav>
</aside>

<style>
	aside {
		right: -100%;
		display:none;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		display: block;
		right: 0;
		left: 20%;
	}


</style>