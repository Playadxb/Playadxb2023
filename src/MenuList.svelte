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
                <a href="/Restaurant Menu.pdf" target="_blank">
                    <div class="flex flex-row justify-center items-center space-x-4 ">
                        <svg class=" left-auto"   width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_3967_114)">
        
                                <circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
                                </g>
                                <path d="M20.7681 42.6757C20.5598 42.4681 20.4428 42.1865 20.4428 41.8929V26.2821M20.7681 42.6757V12.3243C20.5598 12.5319 20.4428 12.8135 20.4428 13.1071V23.7239C20.3576 23.6912 20.2742 23.6547 20.1928 23.6148M20.7681 42.6757C20.9764 42.8834 21.2589 43 21.5535 43C21.8481 43 22.1306 42.8834 22.3389 42.6757H20.7681ZM20.4428 26.2821C19.1884 26.0269 18.061 25.3475 17.2514 24.3589C16.4418 23.3703 15.9997 22.1333 16 20.8571M20.4428 26.2821H20.1928V26.4827M20.4428 26.2821L20.3929 26.5271C20.3259 26.5135 20.2591 26.4987 20.1928 26.4827M16 20.8571V13.1071C16 12.8135 16.117 12.5319 16.3253 12.3243C16.5336 12.1166 16.8161 12 17.1107 12C17.4053 12 17.6878 12.1166 17.8961 12.3243C18.1044 12.5319 18.2214 12.8135 18.2214 13.1071V20.8571C18.221 21.5443 18.4345 22.2146 18.8323 22.7758C19.1782 23.2637 19.6487 23.6481 20.1928 23.8908V23.6148M16 20.8571L15.75 20.8571M16 20.8571H15.75C15.7497 22.1911 16.2119 23.4841 17.058 24.5173C17.8608 25.4976 18.9626 26.1869 20.1928 26.4827M20.1928 23.6148C19.7326 23.3891 19.3344 23.0517 19.0363 22.6312C18.6684 22.1123 18.4711 21.4925 18.4714 20.8573V20.8571V13.1071C18.4714 12.7469 18.3278 12.4017 18.0726 12.1472C17.8173 11.8928 17.4713 11.75 17.1107 11.75C16.7501 11.75 16.4041 11.8928 16.1488 12.1472C15.8936 12.4017 15.75 12.7469 15.75 13.1071V20.8571M20.1928 23.6148L15.75 20.8571M22.9142 23.8908V23.6148C22.8327 23.6547 22.7493 23.6912 22.6642 23.7239L22.9142 23.8908ZM22.9142 23.8908C22.8324 23.9272 22.7491 23.9604 22.6642 23.9904L22.9142 23.8908ZM15.75 20.8571L20.1928 26.4827M27.357 20.8571L27.107 20.8571H27.357C27.357 20.8571 27.357 20.8571 27.357 20.8571ZM22.9142 26.4827V26.2821H22.6642L22.714 26.5271C22.7811 26.5135 22.8478 26.4987 22.9142 26.4827ZM34.0211 28.3571V16.0469C35.5297 17.9846 36.4912 19.8017 36.9348 21.4833C37.4561 23.4645 37.7832 25.7551 37.9079 28.3571H34.0211ZM34.0211 31.0714H40.4353H40.6853V30.8214C40.6853 26.9712 40.313 23.6273 39.5663 20.7935C38.8119 17.9298 36.9292 14.9398 33.9518 11.8272L33.8779 11.75H33.7711H31.5497H31.2997V12V41.8929C31.2997 42.2531 31.4433 42.5983 31.6986 42.8528C31.9538 43.1072 32.2998 43.25 32.6604 43.25C33.021 43.25 33.3671 43.1072 33.6223 42.8528C33.8776 42.5983 34.0211 42.2531 34.0211 41.8929V31.0714Z" fill="#C5BABA" stroke="#C5BABA" stroke-width="0.5"/>
                                <defs>
                                <filter id="filter0_b_3967_114" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_114"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_114" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                <span class=" text-2xl lg:text-4xl underline text-red py-5 px-2 placeholder-opacity-75" >Food</span>
            </div>
        </a>
                <a href="/Beverage & Wine Menu.pdf" target="_blank">
                    <div class="flex flex-row justify-center items-center space-x-4 ">
                        <svg class=" left-auto"  width="54" height="54"
                        viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_3967_116)">
                                <circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
                                </g>
                                <path d="M29 49H26V54H29V49Z" fill="#f"/>
                                <path d="M46 22.6359C46 27.5289 44.0509 32.2216 40.5815 35.6815C37.1121 39.1414 32.4065 41.0851 27.5 41.0851C22.5935 41.0851 17.8879 39.1414 14.4185 35.6815C10.9491 32.2216 9 27.5289 9 22.6359" fill="#EF5758"/>
                                <path d="M45.7756 10.1093L44.8213 9.39551L27.6467 32.2321L28.601 32.9459L45.7756 10.1093Z" fill="#EF5758"/>
                                <path d="M31.0954 29.6291L30.1411 28.9153L27.6467 32.2321L28.601 32.9459L31.0954 29.6291Z" fill="#EBEBEA"/>
                                <path d="M33.5329 29.3055C34.7002 28.0168 34.7707 26.1833 33.6906 25.2103C32.6104 24.2373 30.7885 24.4933 29.6213 25.782C28.454 27.0707 28.3835 28.9041 29.4637 29.8771C30.5438 30.8501 32.3657 30.5942 33.5329 29.3055Z" fill="#EBEBEA"/>
                                <path d="M37.4284 24.5119C38.5957 23.2232 38.6662 21.3897 37.5861 20.4167C36.5059 19.4437 34.684 19.6997 33.5168 20.9884C32.3495 22.2771 32.279 24.1105 33.3592 25.0835C34.4393 26.0565 36.2612 25.8006 37.4284 24.5119Z" fill="#EBEBEA"/>
                                <path d="M31.3871 41.0826H23.9214V48.5279H31.3871V41.0826Z" fill="#EF5758"/>
                                <path d="M29.4142 43.05H25.8916V46.563H29.4142V43.05Z" fill="#ECEBEB"/>
                                <path d="M28.3898 44.0719H26.9165V45.5411H28.3898V44.0719Z" fill="#EF5758"/>
                                <defs>
                                <filter id="filter0_b_3967_116" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_116"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_116" result="shape"/>
                                </filter>
                                </defs>
				        </svg>
                        <span class=" text-2xl lg:text-4xl underline text-red py-5 px-2 placeholder-opacity-75" >Beverages</span>
                    </div>
                </a>
                <a href="/Pool & Beach menu- Day.pdf" target="_blank">
                    <div class="flex flex-row justify-center items-center space-x-4 ">
                        <svg class=""  width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_b_3967_115)">
						<circle cx="27" cy="27" r="27" fill="#747474" fill-opacity="0.56"/>
						</g>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.4308V22.1183C0.135767 22.124 0.271881 22.1269 0.408262 22.127C2.80626 22.1284 5.12267 21.2563 6.9243 19.6737L7.1617 19.4805C8.59384 18.2191 10.3615 17.4008 12.2499 17.125C14.1383 16.8492 16.0662 17.1278 17.7992 17.9269C18.9531 18.4134 20.0066 19.1098 20.9064 19.9807C22.6096 21.3062 24.7072 22.0241 26.8655 22.0201C29.0238 22.0161 31.1187 21.2904 32.817 19.9586C33.6975 19.1115 34.724 18.4307 35.8468 17.949C37.5839 17.1368 39.5202 16.8491 41.4183 17.1212C43.3164 17.3932 45.094 18.2131 46.533 19.4805L46.7704 19.6737C48.5002 21.1932 50.7045 22.0577 53 22.123V22.4308H0Z" fill="#EF5758"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.8403V27.5277C0.135767 27.5334 0.271881 27.5363 0.408262 27.5364C2.80626 27.5378 5.12267 26.6657 6.9243 25.0832L7.1617 24.8899C8.59384 23.6285 10.3615 22.8102 12.2499 22.5344C14.1383 22.2587 16.0662 22.5372 17.7992 23.3364C18.9531 23.8228 20.0066 24.5192 20.9064 25.3901C22.6096 26.7156 24.7072 27.4335 26.8655 27.4295C29.0238 27.4255 31.1187 26.6999 32.817 25.368C33.6975 24.5209 34.724 23.8401 35.8468 23.3584C37.5839 22.5463 39.5202 22.2585 41.4183 22.5306C43.3164 22.8026 45.094 23.6226 46.533 24.8899L46.7704 25.0832C48.5002 26.6026 50.7045 27.4672 53 27.5324V27.8403H0Z" fill="#EF5758"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.2507V32.9381C0.135767 32.9438 0.271881 32.9467 0.408262 32.9468C2.80626 32.9482 5.12267 32.0761 6.9243 30.4936L7.1617 30.3003C8.59384 29.0389 10.3615 28.2206 12.2499 27.9448C14.1383 27.6691 16.0662 27.9476 17.7992 28.7468C18.9531 29.2332 20.0066 29.9296 20.9064 30.8005C22.6096 32.126 24.7072 32.8439 26.8655 32.8399C29.0238 32.8359 31.1187 32.1103 32.817 30.7784C33.6975 29.9313 34.724 29.2505 35.8468 28.7688C37.5839 27.9567 39.5202 27.6689 41.4183 27.941C43.3164 28.213 45.094 29.033 46.533 30.3003L46.7704 30.4936C48.5002 32.013 50.7045 32.8776 53 32.9428V33.2507H0Z" fill="#EF5758"/>
						<defs>
						<filter id="filter0_b_3967_115" x="-10" y="-10" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3967_115"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3967_115" result="shape"/>
						</filter>
						</defs>
				</svg>
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