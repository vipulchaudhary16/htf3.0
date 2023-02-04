import React, { useEffect } from "react";
import { databases } from "../../appwrite/AppWriteConfig";
import { REACT_APP_APPWRITE_DB, REACT_APP_ITEMS_COL } from "../../appwrite/IDs";

export default function Order({ order }) {
  const [itemName, setItemName] = React.useState("");
  useEffect(() => {
    databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_ITEMS_COL)
      .then((res) => {
        res.documents.forEach((doc) => {
          console.log(doc.$id);
          console.log("Order: " + order.item_id);
          if (doc.UID === order.item_id) {
            setItemName(doc.name);
          }
        });
      });
  }, []);
  return (
    <div>
      <div className=" m-8 shadow-xl">
        <div className="p-8  flex flex-col">
          <p>Order ID: {order.order_id}</p>
          <p>Item ID: {itemName}</p>
          <div className="p-4">
            <p>Name : {order.firstName + " " + order.lastName}</p>
            <p>address: {order.address}</p>
            <p>city: {order.city}</p>
            <p>pincode: {order.pincode}</p>
          </div>
          <p>Price: {order.price}</p>
          <p>Status: {order.status}</p>
        </div>
      </div>
    </div>
  );
}
