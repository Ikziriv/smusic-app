<script>

</script>
<header class="w-full h-auto bg-neutral-900 fixed inset-x-0 top-0">
    <div class="w-full h-auto flex flex-row justify-between px-8 py-4">
        <div class="flex flex-row mr-2 justify-center items-center">
            <span class="mr-8">
                <button
                  class="text-white cursor-pointer mr-4 md:mr-0 border-none focus:outline-none"
                >
                <svg width="32" height="24">
                    <line id="top" x1="0" y1="2" x2="20" y2="2" />
                    <line id="middle" x1="0" y1="12" x2="32" y2="12" />
                    <line id="bottom" x1="0" y1="22" x2="20" y2="22" />
                </svg>
                </button>
            </span>
            <span class="text-white font-black tracking-widest uppercase text-xl">Musx</span>
        </div>
        <div class="mr-2">
            <ul class="flex flex-row justify-center items-center py-1">
                <li class="mr-8 px-6 border-r-2">
                    <div class="flex flex-row">
                        <span class="mr-4">
                            <svg class="bi bi-download fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                        </span>
                        <span class="uppercase font-normal text-white text-xs py-1">
                            Download
                        </span>
                    </div>
                </li>
                <li class="bg-slate-800 px-4 py-1 rounded-lg mr-4">
                    <span class="uppercase font-bold text-white text-xs">Login</span>
                </li>
                <li class="uppercase font-normal text-white text-xs">Sign Up</li>
            </ul>
        </div>
    </div>
</header>

<style>
    svg {
      min-height: 24px;
      transition: transform 0.3s ease-in-out;
    }
  
    svg line {
      stroke: currentColor;
      stroke-width: 2;
      transition: transform 0.3s ease-in-out;
    }
  
    button {
      z-index: 10;
    }
  </style>