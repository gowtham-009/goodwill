<template>
    <div>
        <form class="w-100 scroller p-5">
            <!-- row1 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <!-- user name -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="username" class="block text-md font-medium leading-6 text-gray-900">Username<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="User name">
                </div>
            </div>
            </div>
            </div>
            <!-- father name -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="fathername" class="block text-md font-medium leading-6 text-gray-900">Father name<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="fathername" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Father name">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row2 -->
            <div class="mt-5 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3"> 
                <!-- email -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="email" name="email" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Email">
                </div>
            </div>
            </div>
            </div>
            <!-- father name -->
             <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="phone" class="block text-md font-medium leading-6 text-gray-900">Phone<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="phone" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Phone">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row3 -->
            <div class="mt-5 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <!-- gender -->
               <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="gender" class="block text-md font-medium leading-6 text-gray-900">Gender<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2 flex flex-wrap gap-3">
                <input type="radio" id="option1" name="options" value="Male" class="hidden">
                <label for="option1" class="radio-button">Male</label>
                <input type="radio" id="option2" name="options" value="Female" class="hidden">
                <label for="option2" class="radio-button">Female</label>
                <input type="radio" id="option3" name="options" value="Transgender" class="hidden">
                <label for="option3" class="radio-button">Transgender</label>
            </div>
            </div>
            </div> 
            <!-- marriage status -->
             <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="phone" class="block text-md font-medium leading-6 text-gray-900">Marital Status<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2 flex flex-wrap  gap-3 married">
                <input type="radio" id="optionm-1" name="optionsm" value="Married" class="hiddenm">
                <label  for="optionm-1" class="radio-button-1">Married</label>
                <input type="radio" id="optionm-2" name="optionsm" value="Unmarried" class="hiddenm">
                <label  for="optionm-2" class="radio-button-1">Unmarried</label>
            </div>
            </div>
            </div>
            </div>
            <!-- row4 -->
            <div class="mt-5 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3"> 
                <!--pan -->
             <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="pan" class="block text-md font-medium leading-6 text-gray-900">Pan Card<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="pan" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="pancard no">
                </div>
            </div>
            </div>
            </div> 
            <!-- date of birth -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="date" class="block text-md font-medium leading-6 text-gray-900">Date of Birth<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="date" name="pan" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="00-00-0000">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row-5 -->
            <div class="mt-5 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <!-- user name -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="EX" class="block text-md font-medium leading-6 text-gray-900">Choose the Exchange<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2 flex flex-wrap gap-3">
                <input type="radio" id="optionexg-1" name="optionsex" value="NSE" class="exchange">
                <label  for="optionexg-1" class="radio-button-exg">NSE</label>
                <input type="radio" id="optionexg-2" name="optionsex" value="BSE" class="exchange">
                <label  for="optionexg-2" class="radio-button-exg">BSE</label>
                <input type="radio" id="optionexg-3" name="optionsex" value="MCX" class="exchange">
                <label  for="optionexg-3" class="radio-button-exg">MCX</label>
                <input type="radio" id="optionexg-4" name="optionsex" value="ICEX" class="exchange">
                <label  for="optionexg-4" class="radio-button-exg">ICEX</label>
                <input type="radio" id="optionexg-5" name="optionsex" value="MSEI" class="exchange">
                <label  for="optionexg-5" class="radio-button-exg">MSEI</label>
            </div>
            </div>
            </div>
            </div> 
        </form>
        <div class="footer-container w-full p-1">
            <nuxt-link to="/address" class="next-page">Next<i class="fa-solid fa-arrow-right mx-2"></i></nuxt-link>
        </div>
    </div>
</template>

<script>

</script>

<style>
@import url('~/assets/css/radio.css');
.footer-container{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    justify-content: end;
}
.next-page{
    color: white;
    background-color: #5D6BC4;
    border-radius: 10px;
    padding:8px;
    font-size: 1.3rem;
    cursor: pointer;
    margin-right: 2%;
   
}
</style>