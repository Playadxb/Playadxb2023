<script>
    import Navbar from "./Navbar.svelte";
    let hideLogo = false;
    </script>
    
    <main id="book-bg" class="h-full xl:h-full text-white main-content bg-cover bg-repeat">
        <Navbar bind:hideLogo={hideLogo}/>
        <div class="flex flex-col items-center px-5 justify-center logo text-center py-48 space-y-10">
            <h1 class="font-bold text-white text-4xl md:text-6xl xl:text-8xl xl:w-1/3 mx-auto leading-normal ">Menus
            </h1>
    
            <div class="flex flex-col lg:flex-row gap-12 my-12  justify-center">
                <a href="/Food Menu.pdf" target="_blank">
                    <div class="flex flex-row justify-center items-center space-x-4 ">
                        <img src="/food-icon.png" alt="" class="left-auto ">

                <span class=" text-2xl lg:text-4xl underline text-red py-5 px-2 placeholder-opacity-75" >Food</span>
            </div>
        </a>
        <a href="/Drinks Menu.pdf" target="_blank">
            <div class="flex flex-row justify-center items-center space-x-4 ">
                <img src="/drinks-icon.png" alt="" class="left-auto">
                <span class=" text-2xl lg:text-4xl underline text-red py-5 px-2 placeholder-opacity-75" >Beverages</span>
            </div>
        </a>
        <a href="/Pool & Beach Menu.pdf" target="_blank">
            <div class="flex flex-row justify-center items-center space-x-4 ">
                <img src="/wave-icon.png" alt="" class="left-auto ">

                <span class=" text-2xl lg:text-4xl underline text-red py-5 px-2 placeholder-opacity-75" >Pool & Beach</span>
              </div>
        </a>
        
        </div>

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
                url('/menu-list.png');
        }
    
    
    /* 
        #email-input::placeholder {
            font-style: italic;
            padding: 20px;
        } */
    </style>