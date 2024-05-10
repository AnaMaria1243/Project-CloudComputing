import { useRouter } from "next/router";
import React, { useState } from "react";

const RecordForm = (props) => {
  const router = useRouter();
  const { entry, onSubmit } = props;
  const [data, setData] = useState(entry);


  const handleChange = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="p-4" >
      <div className="flex flex-col bg-pink-600 mx-auto max-w-80 border p-4 shadow-sm gap-4 w-full">
        <div className="text-center font-bold text-xl">{entry._id ? 'Update' : 'Postează un'} desert</div>
        <div>
          <label
            htmlFor="numeDesert"
            className="block mb-2 text-sm font-medium text-black-900"
          >
            Denumire desert
          </label>
          <input
            type="numeDesert"
            id="numeDesert"
            value={data.numeDesert}
            onChange={(e) => handleChange("numeDesert", e.target.value)}
            className="bg-white-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Denumire"
            required
          />
        </div>
        <div>
          <label
            htmlFor="imagineURL"
            className="block mb-2 text-sm font-medium text-black-900"
          >
            URL
          </label>
          <textarea
            id="imagineURL"
            rows="2"
            value={data.imagineURL}
            onChange={(e) => handleChange("imagineURL", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Insereaza Link-ul"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="reteta"
            className="block mb-2 text-sm font-medium text-black-900 "
          >
            Reteta
          </label>
          <textarea
            id="reteta"
            rows="8"
            value={data.reteta}
            onChange={(e) => handleChange("reteta", e.target.value)}
            className="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Scrie reteta aici..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"          >
            Anulează
          </button>
          <button
            type="button"
            onClick={() => onSubmit(data)}
            className="mb-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {entry?._id ? "Update" : "Postează"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;