<script lang="ts">
    import { 
      Header, 
      Sidebar, 
      Footer 
    } from '$components'
    import "$styles/app.css";
</script>
    
<div class="w-full h-screen relative bg-transparent">
    <Header />
    <main class="flex flex-row w-full h-auto">
        <Sidebar classes="flex-none" />
        <div class="grow w-full h-auto z-0">
            <slot />
        </div>
    </main>
    <Footer />
</div>
<style>

</style>