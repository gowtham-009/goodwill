<template>
    <div>
        <form class="w-100 scroller p-5">
             <!-- row1 -->
             <div class=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <!-- pan -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="pan" class="block text-md font-medium leading-6 text-gray-900">Pan<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <label class="block p-1 text-md font-medium leading-6 text-gray-900 ">
                    <span class="sr-only">Choose file</span>
                    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
                </label>
                </div>
                <span class="mt-5 font-small text-sm text-black-200">Note : File Max Size - 5MB,Supported Format - jpeg,pdf</span>  
            </div>
            </div>
            </div>
            <!-- edu -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="edu" class="block text-md font-medium leading-6 text-gray-900">Educational Proof<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <label class="block p-1 text-md font-medium leading-6 text-gray-900 ">
                    <span class="sr-only">Choose file</span>
                    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
                </label>
                </div>
                <span class="mt-5 font-small text-sm text-black-200">Note : File Max Size - 5MB,Supported Format - jpeg,pdf</span>  
            </div>
            </div>
            </div>
            </div>
           <!-- row2 -->
           <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- photo -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="photo" class="block text-md font-medium leading-6 text-gray-900">Photo<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <label class="block p-1 text-md font-medium leading-6 text-gray-900 ">
                    <span class="sr-only">Choose file</span>
                    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
                </label>
                </div>
                <span class="mt-5 font-small text-sm text-black-200">Note : File Max Size - 5MB,Supported Format - jpeg,pdf</span>
            </div>
            </div>
            </div>
            </div>
            <!-- row3 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <div class="sm:col-span-4">
                    <label for="photo" class="block text-md font-medium leading-6 text-gray-900">Declaration<span class="text-red-500 pl-1 text-xl">*</span></label>
                    <div class="mt-2">
                        <p class="text-sm text-black-500">     I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and i undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting. I am aware that i may be held liable for it. I hereby consent to receiving information from Central KYC Registry through SMS/Email on the above registered number / Email address.</p>
                    </div>
                    </div>
            </div>
            <!--row4-->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!--clintname-->
                <div class="col-span">
                <label for="clint" class="block text-md font-medium leading-6 text-gray-900">Clint name<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                    <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input type="text" name="clint" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="clint name">
                    </div>
                </div>
                </div>
                <!-- place-->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
                <div class="sm:col-span-4">
                <label for="pincode" class="block text-md font-medium leading-6 text-gray-900">Place<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="place" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Place">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!-- row5 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <div class="grid grid-cols-2 gap-x-6 gap-y-8 mt-5">
                <!--date-->
                <div class="col-span-4">
                <label for="date" class="block text-md font-medium leading-6 text-gray-900">Date<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                    <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input type="date" name="date" class="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                    </div>
                </div>
                </div>
                </div>
            </div>
        </form>
        <div class="footer-container w-full p-1">
            <nuxt-link to="/bank" class="pre-page p-3"><i class="fa-solid fa-arrow-left mx-2"></i>Preview</nuxt-link>
            <nuxt-link to="/login" class="next-page">Next<i class="fa-solid fa-arrow-right mx-2"></i></nuxt-link to="/login">
        </div>
    </div>
</template>

<script setup>

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