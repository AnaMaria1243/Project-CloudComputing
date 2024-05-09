import { deleteRecord, getRecords } from "@/utils/recordsFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";




const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };


  const handleDeleteRecord = async (id) => {
  try {
    const response = await deleteRecord(id);

    if (response?.acknowledged) {
      const newData = data.filter((el) => el._id !== id);

      setData(newData);
      fetchRecords();
      
    }
    fetchRecords();
    
  } catch (error) {
    console.log(error);
  }
};

  const handleEditRecord = (id) => {
    router.push(`/edit?id=${id}`);
  }

  useEffect(() => {
    fetchRecords();
  }, []);


  if (isLoading) return <Spinner />;


  
  return (
    <div className="grid place-items-center">
          <h1 style={{ fontSize: '48px' }}>Rețete pentru deserturi</h1>
    <div className="p-10 flex flex-wrap gap-4 justify-content-center">
      {data?.map((record) => (
        <div key={record._id} className="max-w-sm bg-pink-600 border bg-pink-600 rounded-lg shadow">
            <a href="#">
            <img className="rounded-t-lg" src={record.imagineURL} alt="" style={{ width: '500px', height: 'auto' }} />

            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-200 ">{record.numeDesert}</h5>
                </a>
                <p className="mb-3 font-normal text-white-700 ">{record.reteta}</p>
                
            </div>
            <button
            type="button"
            onClick={() => handleEditRecord(record._id)}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            UPDATE
          </button>
          <button
            type="button"
            onClick={() => handleDeleteRecord(record._id)}
            className="mb-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            DELETE
          </button>
        </div>

      ))}
    </div>
    </div>
  );
};

export default MainPage;