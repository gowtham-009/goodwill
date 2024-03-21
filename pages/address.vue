<template>
    <div>
        <form class="w-100 scroller p-5">
            <!-- row1 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-8">
                <!--address-->
                <div class="col-span">
                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                    <textarea id="address" name="address" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                </div>
                <!-- pincode -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
                <div class="sm:col-span-4">
                <label for="pincode" class="block text-md font-medium leading-6 text-gray-900">pincode<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Pincode">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!--row2 -->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- city/town -->
                <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="city/town" class="block text-md font-medium leading-6 text-gray-900">City / Town<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input type="text" name="city/town" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="City/Town">
                </div>
            </div>
            </div>
            </div>
            <!-- District -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="sm:col-span-4">
            <label for="district" class="block text-md font-medium leading-6 text-gray-900">District<span class="text-red-500 pl-1 text-xl">*</span></label>
            <div class="mt-2">
                <div class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="district" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="District">
                </div>
            </div>
            </div>
            </div>
            </div>
            <!--row3-->
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
                <!-- state -->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8">
                <div class="sm:col-span-3">
                <label for="states" class="block text-md font-medium leading-6 text-gray-900">States / U.T code<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                    <select id="states" name="states" autocomplete="states-name" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                        <option value="">--Select a state--</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>
                </div>
            </div>
            <!--Country-->
            <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:mt-5">
                <div class="sm:col-span-3">
                <label for="country" class="block text-md font-medium leading-6 text-gray-900">Country / ISO code<span class="text-red-500 pl-1 text-xl">*</span></label>
                <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>--Select country--</option>
                    <option value="india">India</option>
                    <option value="others">Others</option>
                    </select>
                </div>
                </div>
            </div>
        </div>
        </form>
        <div class="footer-container w-full p-1">
            <nuxt-link to="/" class="pre-page p-3"><i class="fa-solid fa-arrow-left mx-2"></i>Preview</nuxt-link>
            <nuxt-link to="/bank" class="next-page">Next<i class="fa-solid fa-arrow-right mx-2"></i></nuxt-link>
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