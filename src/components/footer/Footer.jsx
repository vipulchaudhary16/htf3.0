import React from "react";


function Footer() {
    return (<>
        <footer class="mt-10 p-4 shadow md:flex md:items-center md:justify-between md:py-6 md:px-10 bg-color text-white">
            <ul class="flex flex-wrap items-center mt-2 text-base sm:mt-0 justify-center">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            <span class="block text-base text-center mt-2 block">© 2023 <a href="/" class="hover:underline">Tservices</a>. All Rights Reserved.
            </span>
        </footer>

    </>);
};

export default Footer;