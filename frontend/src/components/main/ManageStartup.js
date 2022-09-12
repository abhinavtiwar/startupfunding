import React, { useEffect, useState } from "react";
// import UpdateUser from "./UpdateUser";

const ManageStartup = () => {
  const [userFormData, setUserFormData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // for storing the user data
  const [userArray, setUserArray] = useState([]);

  // to track data loading
  const [loading, setLoading] = useState(true);

  

  const getDataFromBackend = () => {
    fetch("http://localhost:5000/startup/getall").then((res) => {
      if (res.status === 200) {
        console.log(" Start Up data fetched");
        res.json().then((data) => {
          console.log(data);
          setUserArray(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  
  const deleteUser = (id) => {
    console.log(id);

    fetch("http://localhost:5000/startup/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        console.log("data deleted");
        getDataFromBackend();
      }
    });
  };

  const updateUser = (userdata) => {
    setShowUpdateForm(true);
    setUserFormData(userdata);
  };

  const displayUsers = () => {
    if (!loading) {
      return userArray.map(({ _id, title, email, password, year }) => (
        <tr>
          <td>{title}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
            <button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={e => updateUser({_id, title, email, password})} >
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div class="row">
        <div className="col-md">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{displayUsers()}</tbody>
          </table>
        </div>
        {/* {showUpdateForm ? <div className="col-md">{<UpdateUser userFormData={userFormData}  fetchData = {getDataFromBackend} setShowUpdateForm={setShowUpdateForm} />}</div> : ""} */}
      </div>
    </div>
  );
};

export default ManageStartup ;