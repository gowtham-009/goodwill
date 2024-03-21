<template>
    <div>
      <div class="container-full bg-white">
         <header  v-if="!$route.path.startsWith('/login')">
            <Header/>
         </header>
         <main>
            <slot/>
         </main>
      </div>
    </div>
</template>

<script>

</script>

<style>
@import url('~/assets/css/layout.css');
</style>