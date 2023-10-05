import React from 'react'

const Drivers = () => {
    return (
        <div class="bg-gray-100  text-gray-600 h-screen flex overflow-hidden text-sm">
            
            <div class="flex-grow overflow-hidden h-full flex flex-col">
                
                <div class="flex-grow flex overflow-x-hidden">
                    
                    <div class="flex-grow bg-white  overflow-y-auto">
                        <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white sticky top-0">
                            <div class="flex w-full items-center">
                                <div class="flex items-center text-3xl text-gray-900 ">
                                    <img
                                        src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
                                        class="w-12 mr-4 rounded-full"
                                        alt="profile"
                                    />
                                    Jean Carlos
                                </div>
                                <div class="ml-auto sm:flex  items-center justify-end">
                                    <div class="text-right">
                                        <div class="text-xs text-gray-400 ">
                                            Account balance:
                                        </div>
                                        <div class="text-gray-900 text-lg ">
                                            $2,794.00
                                        </div>
                                    </div>
                                    <button class="w-8 h-8 ml-4 text-gray-400 shadow hidden  rounded-full md:flex items-center justify-center border border-gray-200 ">
                                        <svg
                                            viewBox="0 0 24 24"
                                            class="w-4"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3 sm:mt-7 mt-4">
                                <a
                                    href="#"
                                    class="px-3 border-b-2 border-blue-500 text-blue-500  pb-1.5"
                                >
                                    Activities
                                </a>
                            </div>
                        </div>
                        <div class="sm:p-7 p-4 w-ful overflow-x-auto">
                            <div class="flex w-full items-center mb-7">
                                <button class="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 border border-gray-200 leading-none py-0">
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="w-4 mr-2 text-gray-400 "
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    Last 30 days
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="w-4 ml-1.5 text-gray-400 "
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                
                            </div>
                            <table class="w-full text-left">
                                <thead>
                                    <tr class="text-gray-400">
                                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                                           Type
                                        </th>
                                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                                            Customer
                                        </th>
                                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                                            kilometres
                                        </th>
                                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                                            Amount
                                        </th>
                                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200  ">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-60">

                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='cursor-pointer hover:shadow-md hover:bg-gray-100'>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    viewBox="0 0 24 24"
                                                    class="w-4 mr-5 text-yellow-500"
                                                    stroke="currentColor"
                                                    stroke-width="3"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>*/}
                                                Urban
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            <div class="flex items-center">
                                                {/*<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 "
                                                >
                                                    <path
                                                        fill="#03a9f4"
                                                        d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                                                    />
                                                    <path
                                                        fill="#283593"
                                                        d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                                                    />
                                                </svg>*/}
                                                HerreraBox
                                            </div>
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                                            120Km
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-green-500">
                                            $120.00
                                        </td>
                                        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                            <div class="flex items-center">
                                                <div class="sm:flex flex-col">
                                                    24.02.2023
                                                    <div class="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button class="ml-3 w-8 h-8 inline-flex items-center justify-center text-gray-400 md:ml-auto  hover:bg-red-500 rounded-2xl hover:text-white   border border-gray-200">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="w-5"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                  

                                </tbody>
                            </table>
                          { /*<div class="flex w-full mt-5 space-x-2 justify-end">
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200  leading-none">
                                    <svg
                                        class="w-4"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200  leading-none">
                                    1
                                </button>
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200  bg-gray-100  leading-none">
                                    2
                                </button>
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200  leading-none">
                                    3
                                </button>
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200  leading-none">
                                    4
                                </button>
                                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200  leading-none">
                                    <svg
                                        class="w-4"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drivers