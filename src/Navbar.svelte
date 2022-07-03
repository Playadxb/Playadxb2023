<script>
    import SideBar from './SideBar.svelte'
    import TopBar from './TopBar.svelte'
	export let hideLogo = true
    export let isTransparent = true;
    let open = false;
    let open2 = false;
</script>
<SideBar bind:open={open}/>
<nav class=" {isTransparent  === true ? 'bg-transparent dark:bg-transparent absolute top-0' : 'bg-white dark:bg-black-1'} block lg:px-16 border-gray-200  sm:px-4 py-6 h-36 w-full z-10">
    <TopBar bind:open2={open2} bind:isTransparent={isTransparent} />
    <div class=" mx-auto {open2 === true ? 'hidden' : 'container'} px-6 ">
        <div class="flex justify-end lg:justify-start  items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
            <div class="{hideLogo === true ? '' : 'lg:visible' } invisible   " style="flex-grow:1">
                <a href="/" ><img src="./playa_red_logo.webp" alt="" class="h-24" srcset=""></a>
            </div>
            <div class="flex flex-col h-14 space-x-9 md:flex-row md:mt-0 ">
                <a href="https://www.google.com/maps/place/445Q%2BWC+PLAYA+-+The+Palm+Jumeirah+-+Dubai+-+United+Arab+Emirates/@25.1110191,55.1368641,18z/data=!4m2!3m1!1s0x3e5f6bcfef29a013:0xa21cb1ec15d8c66b" class="xl:w-16 xl:h-16 w-14 h-14 rounded-full bg-dark-rose-gold hidden lg:block"
                    aria-current="page">
                    <svg width="18" height="22" viewBox="0 0 18 22" class="h-full m-auto" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                            stroke="#F5D3C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
                            stroke="#F5D3C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="tel:0800PLAYA" class="xl:w-16 xl:h-16 w-14 h-14 rounded-full justify-center items-center bg-dark-rose-gold hidden lg:block"
                    aria-current="page" >
                    <svg width="15" height="20" viewBox="0 0 15 20" class="h-full m-auto" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.45979 6.29957C1.18898 4.51409 2.44991 2.90631 4.37612 2.31636C4.71813 2.21169 5.08719 2.24143 5.40801 2.39953C5.72884 2.55764 5.97726 2.83218 6.1026 3.16717L6.72027 4.81618C6.81958 5.08143 6.83739 5.37031 6.77141 5.64575C6.70543 5.92119 6.55867 6.17065 6.34996 6.36212L4.51259 8.04738C4.42198 8.13063 4.35445 8.23592 4.31659 8.353C4.27872 8.47008 4.27181 8.59497 4.29651 8.71551L4.31286 8.78943L4.35835 8.97495C4.39887 9.13132 4.45999 9.35166 4.546 9.61465C4.71658 10.1371 4.98881 10.8393 5.39396 11.5409C5.7991 12.2424 6.27106 12.8295 6.63782 13.2382C6.82884 13.451 7.0285 13.6559 7.2363 13.8523L7.29316 13.9049C7.38506 13.9863 7.49648 14.0425 7.61656 14.068C7.73664 14.0936 7.86128 14.0876 7.97835 14.0506L10.3566 13.3022C10.6268 13.2172 10.9163 13.215 11.1878 13.2956C11.4593 13.3763 11.7005 13.5362 11.8805 13.7549L13.0057 15.1211C13.4748 15.6897 13.4194 16.5256 12.8799 17.0281C11.4057 18.402 9.37859 18.6842 7.9684 17.5498C6.23989 16.1557 4.78269 14.4554 3.66961 12.5338C2.54732 10.6135 1.79759 8.49867 1.45979 6.30028V6.29957ZM5.7856 8.80863L7.31093 7.40981C7.72836 7.02687 8.02187 6.52796 8.15383 5.97707C8.28579 5.42618 8.25018 4.84843 8.05156 4.31792L7.43319 2.66891C7.18091 1.99518 6.68119 1.44303 6.03589 1.125C5.39059 0.806971 4.64829 0.747015 3.96031 0.957353C1.56854 1.68946 -0.351986 3.83388 0.05458 6.51281C0.338892 8.38429 0.994942 10.7633 2.44067 13.2489C3.64122 15.321 5.21287 17.1546 7.07708 18.6579C9.19165 20.3567 12.0163 19.7774 13.8494 18.068C14.3739 17.5791 14.6922 16.9086 14.7393 16.1931C14.7865 15.4776 14.559 14.7711 14.1031 14.2177L12.978 12.8515C12.6179 12.414 12.1353 12.094 11.5922 11.9327C11.049 11.7713 10.47 11.776 9.92944 11.946L7.95561 12.5672C7.86725 12.4764 7.78076 12.3837 7.69617 12.2893C7.29052 11.8405 6.93162 11.3516 6.62503 10.8301C6.32656 10.3037 6.08245 9.74835 5.89648 9.17255C5.85704 9.05201 5.82007 8.93068 5.7856 8.80863Z"
                            fill="#F5D3C2" />
                    </svg>
                </a>
                <a href="/book"
                    class="uppercase h-auto self-center text-center w-40 text-rose-gold visited:text-rose-gold dark:text-white font-bold text-18 border-2 border-solid border-rose-gold bg-transparent py-5 px-2 hidden lg:block"
                    aria-current="page" >book now</a>
                <button class="hidden lg:block flex justify-center items-center h-full cursor-pointer click" on:click={() =>{ open2 = !open2; isTransparent = !isTransparent}} ><img  src="/humburger-menu-icon.svg"
                        /></button>
                <button class="lg:hidden flex justify-center items-center h-full cursor-pointer click" on:click={() =>{ open = !open;}} ><img  src="/humburger-menu-icon.svg"
                            /></button>

            </div>
        </div>
    </div>
</nav>

<style>

</style>