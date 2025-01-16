"use client";

import React, { useState } from "react";
import { z } from "zod";

import { itemData } from "@/lib/data";
// const schema = z.object({
//   itemId: z.string(),
//   customerName: z.string(),
// })

type Item = {
  itemId: string; // Unique item identifier
  name: string;
  price: number;
  quantity: number;
  laptop?: Laptop;
};

type Laptop = {
  laptopId: string;
  serialNumber: string;
  itemId: string;
  modelName: string;
  processor: string;
  memory: string;
  storage: string;
  battLife: string;
};

const Invoice = () => {
  const [barcode, setBarcode] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [addedItems, setAddedItems] = useState<Item[]>([]);

  const handleBarcodeInput = (barcodeInput: string) => {
    setBarcode(barcodeInput);
    const matchedItem = itemData.find((item) => item.itemId === barcodeInput);

    if (matchedItem) {
      setSelectedItem(matchedItem);
    } else {
      setSelectedItem(null);
    }
  };

  const handleAdd = (item: Item) => {
    if (selectedItem) {
      setAddedItems([...addedItems, selectedItem]);
      setSelectedItem(null); // Reset form after adding
      setBarcode(""); // Clear barcode input
    }
  };
  return (
    <div className="flex gap-4">
      <div className="w-7/12 py-6 px-6 bg-white rounded-md ">
        <div className="">
          <h1 className="block text-lg font-semibold">Add Item</h1>
        </div>
        <hr className="mt-4" />
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex flex-col w-full">
            <label>Barcode: </label>
            <input
              className="w-full outline outline-1 outline-gray-200 bg-white rounded-md px-4 py-2"
              type="text"
              placeholder="Scan barcode..."
              value={barcode}
              onChange={(e) => handleBarcodeInput(e.target.value)}
            />
            <hr className="mt-" />
            <h1 className="block text-lg font-semibold mt-4">
              Item Description
            </h1>
          </div>
          {selectedItem ? (
            <form className="flex flex-col gap-4">
              <div className="flex flex-col w-full">
                <label>Model: </label>
                <input
                  className="w-full outline outline-1 outline-gray-200 bg-white rounded-md px-4 py-2"
                  type="text"
                  value={selectedItem.laptop?.modelName}
                  readOnly
                />
              </div>
              <div className="flex w-full gap-4">
                <div className="w-4/12">
                  <label>Processor: </label>
                  <input
                    className="w-full outline outline-1 outline-gray-200 bg-white rounded-md px-4 py-2"
                    type="text"
                    value={selectedItem.laptop?.processor}
                    readOnly
                  />
                </div>
                <div className="w-4/12">
                  <label>Memory: </label>
                  <input
                    className="w-full outline outline-1 outline-gray-200 bg-white rounded-md px-4 py-2"
                    type="text"
                    value={selectedItem.laptop?.memory}
                    readOnly
                  />
                </div>
                <div className="w-4/12">
                  <label>Storage: </label>
                  <input
                    className="w-full outline outline-1 outline-gray-200 bg-white rounded-md px-4 py-2"
                    type="text"
                    value={selectedItem.laptop?.storage}
                    readOnly
                  />
                </div>
              </div>
              <button
                className="py-2 bg-gray-200 outline outline-1 outline-gray-200 rounded-md hover:bg-gray-300"
                type="button"
                onClick={() => {
                  handleAdd(selectedItem);
                }}
              >
                Add Item
              </button>
            </form>
          ) : (
            <p className="text-sm text-gray-500">
              Scan item to show description.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-5/12 py-6 px-6 bg-white rounded-md">
        <div className="">
          <h1 className="block text-lg font-semibold">In Cart</h1>
        </div>
        <hr className="mt-4" />
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th>Model</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {addedItems.map((item) => (
              <tr
                key={item.itemId}
                className="border-b border-gray-200 even:bg-gray-50 text-sm hover:bg-gray-100"
              >
                <td className="py-2">{item.laptop?.modelName}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
