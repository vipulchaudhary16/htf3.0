import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { account, databases } from "../../appwrite/AppWriteConfig";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_ITEMS_COL,
  REACT_APP_ORDER_COL,
} from "../../appwrite/IDs";
import { v4 as uuid4 } from "uuid";

function Checkout() {
  const navigate = useNavigate( )
  const { item_id } = useParams();
  const [item, setItem] = useState({});
  const [order, setOrder] = useState({});
  const [costing, setCosting] = useState({
    subtotal: 0,
    shipingTax: 10,
  });

  useEffect(() => {
    loadItem();
    account.get().then((res) => {}).catch((error) => {navigate('/login')})
  }, []);

  const loadItem = async () => {
    await databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_ITEMS_COL)
      .then((res) => {
        res.documents.forEach((docs) => {
          if (docs.UID == item_id) {
            setItem(docs);
            setCosting({ ...costing, subtotal: docs.price_one });
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order.order_id = uuid4();
    order.item_id = item_id;
    order.order_to = item.provider_name;
    order.price = eval(costing.subtotal * 1 + costing.shipingTax);
    order.payment_method = "COD";
    account
      .get()
      .then((res) => {
        order.order_by = res.$id;
        databases
          .createDocument(
            REACT_APP_APPWRITE_DB,
            REACT_APP_ORDER_COL,
            uuid4(),
            order
          )
          .then((res) => {
            alert("Order Placed");
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert("Need to Login");
      });
  };

  // console.log(item);
  // console.log(costing);

  return (
    <>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col-reverse w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              className="justify-center w-full mx-auto"
              method="post"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) =>
                        setOrder({ ...order, firstName: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 mt-4 md:mt-0">
                    <label
                      for="lastName"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) =>
                        setOrder({ ...order, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="Email"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      onChange={(e) =>
                        setOrder({ ...order, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 mt-4 md:mt-0">
                    <label
                      for="Phone"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      onChange={(e) =>
                        setOrder({ ...order, phone: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Address"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                      onChange={(e) =>
                        setOrder({ ...order, address: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="city"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      onChange={(e) =>
                        setOrder({ ...order, city: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 mt-4 md:mt-0">
                    <label
                      for="pincode"
                      className="block mb-1 text-sm font-semibold text-gray-500"
                    >
                      Pincode
                    </label>
                    <input
                      name="pincode"
                      type="text"
                      placeholder="Post Code"
                      onChange={(e) =>
                        setOrder({ ...order, pincode: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span className="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"
                    onChange={(e) =>
                      setOrder({ ...order, notes: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                      onChange={(e) => {
                        setOrder({ ...order, isMonthly: e.target.checked });
                        if (e.target.checked) {
                          setCosting({
                            subtotal: item.price_monthly,
                            shipingTax: 0,
                          });
                        } else {
                          setCosting({
                            subtotal: item.price_one,
                            shipingTax: 10,
                          });
                        }
                      }}
                    />
                    <span className="ml-2">
                      Is this Monthly repeating order?
                    </span>
                  </label>
                </div>
                <div className="mt-4 text-center mt-auto text-white bg-blue-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded mt-8 btn-primary-solid rounded text-center py-2 cursor-pointer">
                  <input
                    value={"Confirm Order"}
                    type="submit"
                    className="cursor-pointer"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 mb-7 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal:<span className="ml-2">{costing.subtotal} rupees</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax:
                <span className="ml-2">{costing.shipingTax} rupees</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total:
                <span className="ml-2">
                  {eval(costing.subtotal * 1 + costing.shipingTax) + " "}
                  rupees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
