import React, { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { databases } from "../../appwrite/AppWriteConfig";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_ITEMS_COL,
  REACT_APP_ORDER_COL,
  REACT_APP_PROVIDERS_COL,
} from "../../appwrite/IDs";

import { v4 as uuid4 } from "uuid";
import Order from "./Order";

export default function ProviderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [provider, setProvider] = useState(localStorage.getItem("provider"));
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [item, setItem] = useState({
    UID: "",
    image: "",
    provider_name: provider,
  });

  useEffect(() => {
    if (localStorage.getItem("provider") == null) {
      loadName();
    }
    loadOrders();
  }, []);

  const loadName = async () => {
    await databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_PROVIDERS_COL)
      .then((res) => {
        res.documents.forEach((doc) => {
          if (doc.email == localStorage.getItem("email")) {
            localStorage.setItem("provider", doc.name);
            setProvider(doc.name);
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loadOrders = async () => {
    setLoading(true);
    await databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_ORDER_COL)
      .then((res) => {
        let curr = [];
        res.documents.forEach((docs) => {
          if (docs.order_to == provider) {
            curr.push(docs);
          }
        });
        setOrders(curr);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  console.log(orders);

  const handleSubmit = (e) => {
    e.preventDefault();
    item.UID = uuid4();
    databases
      .createDocument(REACT_APP_APPWRITE_DB, REACT_APP_ITEMS_COL, uuid4(), item)
      .then((res) => {
        alert("Item added");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="text-4xl m-4 cursor-pointer ">
        <BiAddToQueue
          className="display-inline"
          onClick={(e) => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            className="flex flex-wrap -m-2"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 text-left block"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setItem({ ...item, name: e.target.value })}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="price_one"
                  className="leading-7 text-sm text-gray-600 text-left block"
                >
                  Price for One
                </label>
                <input
                  type="text"
                  id="price_one"
                  name="price_one"
                  onChange={(e) =>
                    setItem({ ...item, price_one: e.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="provider_name"
                  className="leading-7 text-sm text-gray-600 text-left block"
                >
                  Provider name
                </label>
                <input
                  type="text"
                  id="provider_name"
                  name="provider_name"
                  value={item.provider_name}
                  onChange={(e) =>
                    setItem({ ...item, provider_name: e.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="what_is_inside"
                  className="leading-7 text-sm text-gray-600 text-left block"
                >
                  What is inside (seprated by comas)
                </label>
                <input
                  type="text"
                  id="what_is_inside"
                  name="what_is_inside"
                  onChange={(e) =>
                    setItem({ ...item, what_is_inside: e.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="price_monthly"
                  className="leading-7 text-sm text-gray-600 text-left block"
                >
                  Monthly Price
                </label>
                <input
                  type="text"
                  id="price_monthly"
                  name="price_monthly"
                  onChange={(e) =>
                    setItem({ ...item, price_monthly: e.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  type="submit"
                  value="Add Item"
                  className="w-full rounded border border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-indigo-500 text-white cursor-pointer focus:bg-gray-100 focus:ring-2 focus:ring-indigo-200 focus:text-black"
                />
              </div>
            </div>
          </form>
        </div>
      ) : null}

      <p className="text-3xl text-center">Monthly Orders</p>
      <div className="flex">
        <div className="flex flex-wrap justify-center">
          {orders.map((order) => {
            if (order.isMonthly) {
              return <Order order={order} key={order._id} />;
            }
          })}
        </div>
      </div>
      <p className="text-3xl text-center">OneTime Orders</p>
      <div className="flex">
        <div className="flex flex-wrap justify-center">
          {orders.map((order) => {
            if (!order.isMonthly) {
              return <Order order={order} key={order._id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
