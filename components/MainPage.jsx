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
      }
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
    <div class="grid place-items-center">
          <h1 style={{ fontSize: '48px' }}>Rețete pentru deserturi</h1>
    <div className="p-10 flex flex-wrap gap-4 justify-content-center">
      {data?.map((record) => (
        <div key={record._id} className="max-w-sm bg-white border bg-pink-600 rounded-lg shadow">
            <a href="#">
            <img className="rounded-t-lg" src={record.imagineURL} alt="" style={{ width: '500px', height: 'auto' }} />

            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-200 ">{record.numeDesert}</h5>
                </a>
                <p className="mb-3 font-normal text-white-700 ">{record.reteta}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

      ))}
    </div>
    </div>
  );
};

export default MainPage;