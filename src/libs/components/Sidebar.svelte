<script lang="ts">
    import { fly } from "svelte/transition";
    import { sideBarOpen } from '$stores'
    export const classes: string = ""
</script>
<aside class="{$sideBarOpen ? `w-24 border-slate-800` : 'w-24'} h-screen flex flex-col justify-between py-32 md:py-20 bg-neutral-900 z-20">
    <div class="flex flex-col justify-center {classes}">
        <div class="flex justify-center items-center w-auto h-auto mb-4 bg-neutral-800">
            <span class="py-2 px-2">
                <svg class="bi bi-house-door fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
            </span>
        </div>
        <div class="flex justify-center items-center w-auto h-auto mb-4">
            <span class="py-2 px-2">
                <svg class="bi bi-search fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
        </div>
        <div class="flex justify-center items-center w-auto h-auto mb-4">
            <span class="py-2 px-2">
                <svg class="bi bi-collection fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                </svg>
            </span>
        </div>
    </div>

    <div class="flex flex-col justify-center">
        <div class="flex justify-center items-center w-auto h-auto mb-4">
            <span class="py-2 px-2 bg-slate-800 rounded-xl">
                <svg class="bi bi-plus fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </span>
        </div>
    </div>
</aside>

{#if $sideBarOpen}
<aside transition:fly="{{ x: -200 }}" class="w-72 md:w-80 h-screen flex flex-col justify-between py-32 md:py-20 px-0 md:px-0 pl-20 md:pl-24 bg-neutral-800 z-10 fixed shadow-lg">
    <div class="flex flex-col justify-end">
        <div class="flex flex-row justify-between items-end w-auto h-auto mb-4 bg-slate-800 md:bg-transparent">
            <div class="py-2 px-4 border-l-4">
                <span class="font-bold text-white">Home</span>
            </div>
            <span class="py-2 px-2">
                <svg class="bi bi-chevron-right fill-current text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>
        </div>
        <div class="flex flex-col justify-end items-end w-auto h-auto mb-4">
            <div class="flex justify-start items-start py-2 px-5 w-full bg-transparent">
                <span class="font-normal text-white">Popular Artists</span>
            </div>
            <div class="flex justify-start items-start py-2 px-5 w-full bg-transparent">
                <span class="font-normal text-white">Popular Albums</span>
            </div>
            <div class="flex justify-start items-start py-2 px-5 w-full bg-transparent">
                <span class="font-normal text-white">Popular New Releases</span>
            </div>
            <div class="flex justify-start items-start py-2 px-5 w-full bg-transparent">
                <span class="font-normal text-white">Trending Now</span>
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-end">
        <div class="flex justify-end items-end w-auto h-auto mb-4">
            <span class="py-2 px-2 bg-neutral-900 rounded-l-xl">
                <svg class="bi bi-gear fill-current text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </span>
        </div>
    </div>
</aside>
{/if}