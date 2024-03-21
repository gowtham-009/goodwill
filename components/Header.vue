<template>
    <div>
       <nav class="navbar w-full p-3">
         <div class="logo-container w-full flex">
            <figure class="logo-brand w-full flex justify-center items-center flex-col">
                <img src="~/assets/image/logo.jpg" alt="logo">
                <h4>COMPLETE YOUR KYC</h4>
                <div class="logout flex justify-center items-center">
                    <nuxt-link to="/login"><i class="fa-solid fa-power-off text-white text-xl"></i></nuxt-link>
                </div>
            </figure>
         </div>
         <ul class="navlinks w-full p-2 flex justify-center justify-evenly">
            <li><i class="text-xl p-2 fa-solid fa-user"></i><nuxt-link class="text-md ul-text nav-l">Personal Details</nuxt-link></li>
            <li><i class="text-xl p-2 fa-solid fa-map-location-dot"></i><nuxt-link class="text-md ul-text nav-l">Address Details</nuxt-link></li>
            <li><i class="text-xl p-2 fa-solid fa-building-columns"></i><nuxt-link class="text-md ul-text nav-l">Bank Details</nuxt-link></li>
            <li><i class="text-xl p-2 fa-solid fa-link"></i><nuxt-link class="text-md ul-text nav-l">Attachments & Declaration</nuxt-link></li>
         </ul>
       </nav>
    </div>
</template>

<script>

</script>

<style>
@import url('~/assets/css/header.css');

</style>