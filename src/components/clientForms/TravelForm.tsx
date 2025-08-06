// import React from "react";

export const TravelForm = ({
  setForm,
  setPickup,
  setDrop,
  handleSubmit,
}: {
  setForm: Function;
  setPickup: Function;
  setDrop: Function;
  handleSubmit: Function;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={() => setForm(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Enter Travel Details
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="Enter pickup point"
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Drop Location
            </label>
            <input
              type="text"
              placeholder="Enter drop point"
              onChange={(e) => setDrop(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Request Ride
          </button>
        </form>
      </div>
    </div>
  );
};
