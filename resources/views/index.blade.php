@extends('layouts.app') 

@section('content')

    <!-- HERO -->
    <div class="bg-image flex flex-col sm:grid mx-auto py-20 text-center">
        <h1 class="text-gray-100 text-5xl font-bold pb-10 border-text-white">IP Address Tracker</h1>
        <form class="container mx-auto text-center w-1/2 shadow-2xl">   
            @csrf
            <label for="default-search" class="mb-10 text-sm font-medium text-gray-900 sr-only dark:text-white shadow-2xl">Search</label>
            <div class="relative">
                <!-- <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div> -->
                <input type="search" id="default-search" class="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="Search for any IP address or domain" required>
                <button type="submit" class="text-white absolute text-bold px-5 text-xl top-0 right-0 bottom-0 bg-black hover:bg-blue-900 transition duration-300 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-2xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg">
                    <svg class="w-4 h-4 text-gray-100 dark:text-white shadow-2xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </button>
            </div>
        </form>
 <!-- information -->        
        <div class="container w-4/5 mx-auto mt-10 text-center bg-gray-100 shadow-lg rounded-2xl py-8 flex items-center justify-center hover:shadow-2xl hover:bg-white transition duration-300"><!-- -->
            <div class="flex flex-col justify-around h-full">
                <div>
                    <ul class="flex flex-col leading-loose text-left divide-x space-y-6 text-gray-500 sm:flex-row sm:flex-wrap sm:space-x-8 sm:space-y-0 l">
                        <li class="no-underline font-bold pl-10 hover:underline text-sm uppercase tracking-widest" title="IP ADDRESS">
                            IP ADDRESS
                            <br>
                            <span class="font-bold text-2xl tracking-normal capitalize no-underline text-center text-black">
                                192.212.174.101
                            </span>
                        </li>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                        <li class="no-underline font-bold pl-10 hover:underline text-sm uppercase tracking-widest" title="LOCATION">
                            LOCATION
                            <br>
                            <span class="font-bold text-2xl tracking-normal capitalize text-center text-black">
                                Brooklyn, NY 10001
                            </span>
                        </li>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">    
                        <li class="no-underline font-bold pl-10 hover:underline text-sm uppercase tracking-widest" title="TIMEZONE">
                            TIMEZONE
                            <br>
                            <span class="font-bold text-2xl tracking-normal capitalize text-center text-black">
                                UTC-05:00
                            </span>
                        </li>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                        <li class="no-underline font-bold pl-10 hover:underline text-sm uppercase tracking-widest" title="ISP">
                            ISP
                            <br>
                            <span class="font-bold text-2xl tracking-normal capitalize text-center text-black">
                                SpaceX Starlink
                            </span>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
                        
@endsection

