<template>
    <div>
        <form class="w-100 scroller p-5">
            <!-- row1 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <!-- account -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="Account" class="block text-md font-medium leading-6 text-gray-900">Account Type<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                    <select id="accoutn" name="accoutn" autocomplete="accoutn-name" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                        <option value="">--Account type--</option>
                        <option value="current">Current</option>
                        <option value="Saveing">Saveing</option>
                    </select>
                </div>
            </div>
            </div>
            <!-- bank name -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="bank" class="block text-md font-medium leading-6 text-gray-900">IFSC<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="bank" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="IFSC">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!--row2-->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- account -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="Account" class="block text-md font-medium leading-6 text-gray-900">Account number<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="account" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Account number">
                </div>
            </div>
            </div>
            </div>
            <!-- bank name -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="bank" class="block text-md font-medium leading-6 text-gray-900">Bank name<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="bank" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Bank name">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row3 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- micr -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="micr" class="block text-md font-medium leading-6 text-gray-900">MICR<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="micr" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="MICR">
                </div>
            </div>
            </div>
            </div>
            <!-- bank address -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="bankad" class="block text-md font-medium leading-6 text-gray-900">Bank Address<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <textarea id="address" name="address" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row4 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- micr -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="micr" class="block text-md font-medium leading-6 text-gray-900">Cheque leaf / Bank statement {6 Months Statement}<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <label class="block p-1 text-md font-medium leading-6 text-gray-900 ">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
                </label>
                </div>
                <span class="mt-3 text-sm text-black-200">Note : File Max Size - 5MB,Supported Format - jpeg,pdf</span>
            </div>
            </div>
            </div>
           </div>
        </form>
        <div class="footer-container w-full p-1">
            <nuxt-link to="/address" class="pre-page p-3"><i class="fa-solid fa-arrow-left mx-2"></i>Preview</nuxt-link>
            <nuxt-link to="/declaration" class="next-page">Next<i class="fa-solid fa-arrow-right mx-2"></i></nuxt-link>
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
.pre-page{
    color: white;
    background-color: black;
    border-radius: 10px;
    padding:8px;
    font-size: 1.3rem;
    cursor: pointer;
    margin-right: 2%;
}
</style>