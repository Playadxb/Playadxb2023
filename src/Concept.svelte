<script>
    import Footer from './Footer.svelte'
    import Navbar from './Navbar.svelte'
    let isTransparent = false;
    let hideLogo = false;
    </script>
    
    <main class="h-full xl:h-full text-white main-content bg-cover bg-repeat bg-rose-gold dark:bg-dark-grey">
        <Navbar bind:isTransparent={isTransparent} bind:hideLogo="{hideLogo}" />
        <section style="" class="min-h-full flex flex-row-reverse justify-items-end justify-center text-center sm:bg-no-repeat xl:bg-repeat xl:bg-cover lg:bg-cover md:bg-cover " id="landing-hero">
            <div  class="self-center flex-auto lg:w-1/2 ml-auto">
                <div  class="flex flex-col w-4/5   lg:w-1/2 space-y-6 m-auto">
                    <h1 class="text-5xl text-center lg:text-left text-white leading-6">Concept.</h1>
                    <hr class="lg:hidden">
                    <p class="lg:text-xl text-sm  text-left lg:text-left text-white leading-6">Playa Dubai is a beach club, restaurant, beach bar, and venue that offers the finest Peruvian cuisine in Palm Jumeirah. With our warm and inviting atmosphere, we are committed to providing you with an unforgettable modern and rich experience.
                        Our attention to detail shows in everything we do, from the rich colours of our space and decor to the fascinating presentation of each dish. 
                        Playa offers a wide range of activities to cater to your interests. From brunches to business lunches, family pool events, body-related activities, vibrant night parties, and a stargazing night. There’s something for everyone!
                    </p>
                </div>
            </div>
        </section>
        
        <section class="h-auto items-center  bg-white dark:bg-dark-grey flex flex-col-reverse lg:flex-row-reverse justify-center text-center md:pt-24 lg:pt-24">
            <img class="h-1/2 object-cover lg:w-1/2 z-10 bg-contain m-auto lg:mt-auto mt-8 concept-cuisine"  alt="Tent" />
    
            <div class="flex relative flex-col mr-auto w-4/5 lg:w-1/2 xl:w-1/3 p-auto space-y-6 self-baseline mt-12 pl-12 lg:pl-24 z-10"
                id="concept-section">
                <img class="mr-auto lg:h-24 xl:h-auto" src="/cuisine.svg" alt="fire" />
                <h1 class="text-red text-bold capitalize text-left lg:text-xl xl:text-8xl">Cuisine.</h1>
                <p class="lg:text-md xl:text-lg text-light-red text-left leading-6 mr-auto  lg:w-1/2 uppercase">Be prepared to go on a deep Peruvian journey with every bite. Playa's cuisine highlights Peruvian heritage via culinary traditions at the heart of Dubai, prepared with fresh ingredients, passion, and professionalism. Experience modernity and savoir-faire in a meal at Playa! </p>
            </div>
            <!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave.svg"> </object> -->
            <!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave-2.svg"> </object> -->
        </section>
        <section class="h-auto items-center bg-white dark:bg-dark-grey flex flex-col-reverse lg:flex-row justify-center text-center ">
            <img class=" h-1/2 object-cover lg:w-1/2  z-10 bg-contain mt-8 lg:mt-auto" src="/book_bg.jpg" alt="Tent" />
    
            <div class="flex relative flex-col mx-auto lg:w-1/2 p-auto space-y-6 self-baseline mt-12 pl-12 lg:pl-24 z-10"
                id="concept-section">
                <img class="mr-auto lg:h-24 xl:h-auto" src="/glass.svg" alt="fire" />
                <h1 class="text-red text-bold capitalize text-left lg:text-xl xl:text-8xl">Cocktails.</h1>
                <p class="lg:text-md xl:text-lg text-light-red text-left leading-6 mr-auto  lg:w-1/2 uppercase">We are committed to providing you with the best cocktail mixes and beverages. Our bartenders are skilled and passionate about their craft.  We take pride in serving the best there is. We're not only talking about a shot of vodka or a glass of wine but premium cocktail mixes and beverages at Playa!</p>
            </div>
            <!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave.svg"> </object> -->
            <!-- <object id="wave" class="absolute bottom-0 left-0 z-0" title="wave" data="wave-2.svg"> </object> -->
        </section>
        
        <Footer />
    
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