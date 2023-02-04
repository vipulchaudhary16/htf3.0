import React from "react";
import Hero_Img from "../../assests/Hero_Img.png";

function HeroSection() {
    return (<>
        <section class="my-20">
        <div class="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="md:mr-auto place-self-center lg:col-span-7 md:ml-7 mx-4">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black text-primary-color text-center md:text-left"> <span className="text-black">Tiffin.</span> <span className="text-black">Eat.</span> Repeat.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500 text-center md:text-left">One stop for your Homemade Healthy Regular meals!! <br></br>Schedule your everyday meals on repeat loop every week or month!!</p>
            <a href="#" class="px-10 py-3 text-base font-medium text-center text-black-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 btn-secondary block mx-auto md:inline-block md:">Order Now</a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Hero_Img} alt="Hero-Image" />
          </div>
        </div>
      </section>
    </>);
}

export default HeroSection;