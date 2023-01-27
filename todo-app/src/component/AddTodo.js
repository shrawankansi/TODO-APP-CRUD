import React, { useState } from "react";
import axios from "axios";

function AddTodo() { // To Store the value from Frontend
    const [userName, setUserName] = useState("");
   
    console.log(userName);
  
    // Function to send the Data
    const submitData = async () => {
      const data = {
        name: userName,
        
      };
      const res = await axios.post("/createUser", data);
      console.log(res);
    };
    // To handle the Default
    const handleSubmit = (event) => {
      event.preventDefault();
      // To submit the Data
      submitData();
      // But Empty the previous Details
      setUserName("");
      
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-400 ">
                Todo App
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex -m-2">
                <div className="p-2 w-40">
                  <div className="relative">
                    
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-80 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                      placeholder="Add Todo here"
                    />
                  </div>
                </div>
               
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default AddTodo