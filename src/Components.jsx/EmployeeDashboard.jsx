import axios from "axios";
import React, { useState, useEffect } from "react";

function EmployeeDashboard() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => setEmployee(response.data))
      .catch((error) => alert(error.message || "Something went wrong!"));
  }, []);

  
  const DeleteUser = (id) => {
    
    axios.delete(`http://localhost:8080/delete?id=${id}`)
    .then((response) => {
      if(response.data === true){
        alert('Deleter !')

       const reminingEmployee = employee.filter((emp) => emp.id!=id);
       setEmployee(reminingEmployee);

      }else{
        alert('Somthing went wrong !!')
      }
    })
    .catch((error) => alert(error.massage || 'somthing went wrong '))
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Employee Dashboard
        </h2>

        {/* Employee Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.length > 0 ? (
                employee.map((emp, index) => (
                  <tr
                    key={emp.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{emp.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {emp.name}
                    </td>
                    <td className="py-3 px-4">{emp.email}</td>
                    <td className="py-3 px-4 text-gray-500">{emp.password}</td>
                    <td className="py-3 px-4 space-x-3">
                      <button onClick={() => DeleteUser(emp.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                        Delete
                      </button>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition">
                        Show
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-6 text-center text-gray-500 italic"
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
