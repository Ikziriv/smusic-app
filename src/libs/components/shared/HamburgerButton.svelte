<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let active: boolean
    export let classes = ''
    export const color = 'slate'
    // export let onClick = (): void => {}
    
    const handleClick = () => {
        active = !active;
        dispatch('change', active);
    };
</script>

<button
class="cursor-pointer mr-4 md:mr-0 border-none focus:outline-none {active ? `text-${color}-800` : 'text-white'} {classes}"
on:click={handleClick}
>
    <svg width="32" height="24" class="fill-current" fill="currentcolor">
        <g color="white">
            <line id="top" x1="0" y1="2" x2="20" y2="2" stroke="currentcolor" fill="currentcolor" />
            <line id="middle" x1="0" y1="12" x2="32" y2="12" stroke="currentcolor" fill="currentcolor" />
            <line id="bottom" x1="0" y1="22" x2="20" y2="22" stroke="currentcolor" fill="currentcolor" />
        </g>
    </svg>
</button>

<style>
</style>