import React, { useState, useEffect } from "react";
import axios from "axios";

function ListTodo() {
    const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const resp = await axios.get("/getUsers");
    console.log(resp);

    // if No users are there please dont set the values
    if (resp.data.users.length > 0) {
      setUserData(resp.data.users);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userData]);

  // EDIT
  const handleEdit = async (user) => {
    const userName = prompt("Enter your new Todo");
    

    if (!userName ) {
      alert("Please Enter Todo");
    } else {
      const resp = await axios.put(`/editUser/${user._id}`, {
        name: userName,
        
      });
      console.log(resp);
    }
  };
   // DELETE
   const handleDelete = async (userId) => {
    const resp = await axios.delete(`/deleteUser/${userId}`);
    console.log(resp);
  };

  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        


        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
           
            <tbody >
              {userData &&
                userData.map((user) => (
                  <tr className=" w-full ">
                  
                    <td className="px-4 py-3  ">{user.name}</td>
                    
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                    
                    
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ListTodo