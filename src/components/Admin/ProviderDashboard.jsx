import React from "react";

export default function ProviderDashboard() {
  return (
    <div>
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/2 w-full lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Name: Lorem ipsum dolor sit.
            </h1>
          </div>
          <p class="lg:w-1/2 w-full  text-gray-500">
            address: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Atque, vero.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap p-2">
        <div className="w-full">
          <h1 className="text-xl ">Current Order</h1>
          <div className="flex flex-wrap justify-center" >

          <div className="border-2 m-4 p-4">
            <p>Order ID</p>
            <p>Order By</p>
            <p>Order Item</p>
            <p>Order Address</p>
            <p>Order Contact</p>
            <p className="mt-2 underline decoration-solid">Mark as Ordered</p>
          </div>
          <div className="border-2 m-4 p-4">
            <p>Order ID</p>
            <p>Order By</p>
            <p>Order Item</p>
            <p>Order Address</p>
            <p>Order Contact</p>
            <p className="mt-2 underline decoration-solid">Mark as Ordered</p>
          </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl ">Repeatative Orders</h1>
          <div className="flex flex-wrap justify-center" >

          <div className="border-2 m-4 p-4">
            <p>Order ID</p>
            <p>Order By</p>
            <p>Order Item</p>
            <p>Order Address</p>
            <p>Order Contact</p>
            <p>Delivery Time</p>
            <p className="mt-2 underline decoration-solid">Mark as Ordered for Today</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
