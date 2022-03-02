<script>
    import { 
      Header, 
      Sidebar, 
      Footer 
    } from '../libs/components/index'
    import "../styles/app.css";
</script>
    
<div class="w-full h-screen relative bg-transparent">
    <Header />
    <main class="flex w-full h-auto">
        <Sidebar classes="flex-none" />
        <slot />
    </main>
    <Footer />
</div>
<style>

</style>