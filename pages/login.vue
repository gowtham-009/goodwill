<template>
    <div class="w-full">
      <div class="container w-full">
           <div class="login-box-1 h-full">
            <img src="~/assets/image/login_bg.png" class="w-full" alt="login_bg">
          </div> 
          <div class="login-box-2 flex justify-center items-center p-1">
             <div class="grid grid-rows-2 grid-flow-col gap-1"> 
            <div class=" flex justify-start items-center flex-col p-1">
              <img src="~/assets/image/logo.jpg" alt="logo">
              <h4 class="text-lg mt-4 text-center">Authorized Person / Remishire / Brand Ambassador</h4>
              <p class="text-sm mt-2">Refer More & Earn More !!</p>
            </div> 
            <div class=" p-1 mt-5">
               <form class="w-full form-log">
                <div class="sm:col-span-4">
                  <label for="email" class="block text-md font-medium leading-6 text-gray-900">Business Partner Email <span class="text-red-500 pl-1 text-xl">*</span></label>
                  <div class="mt-2 w-full">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your business partner email">
                  </div>
                </div>
              </form> 
               <div class="create-account w-full flex justify-between p-1 mt-5">
                <p>New to Goodwill</p>
                <nuxt-link to="/" class="text-blue-400 text-md">Create an account</nuxt-link>
              </div> 
              <button class="btn-log w-full mt-5 hover:bg-blue-700 text-white p-1 rounded">login</button>
            </div> 
          </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style>
@import url('~/assets/css/login.css');
</style>
