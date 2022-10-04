import React, { useEffect, useState } from "react";
// import UpdateInvestor from "./UpdateInvestor";


const ManageServices = () => {

    const [investorFormData, setinvestorFormData] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
  
    // for storing the user data
    const [investorArray, setInvestorArray] = useState([]);
  
    // to track data loading
    const [loading, setLoading] = useState(true);
  
    
    const getDataFromBackend = () => {
      fetch("http://localhost:5000/product/getall").then((res) => {
        if (res.status === 200) {
          console.log("data fetched");
          res.json().then((data) => {
            console.log(data);
            setInvestorArray(data);
            setLoading(false);
          });
        }
      });
    };
  
    useEffect(() => {
      getDataFromBackend();
    }, []);
  
    // const displayData = () => {
    //   if(!loading){
    //     return nums.map( (n) => (
    //       <div className="card mt-4 bg-warning">
    //         <div className="card-body">
    //           <h1>{n}</h1>
    //           </div>
    //       </div>
    //     ) )
    //   }
    // }
  
    const deleteInvestor = (id) => {
      console.log(id);
  
      fetch("http://localhost:5000/product/delete/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          console.log("data deleted");
          getDataFromBackend();
        }
      });
    };
  
    const updateInvestor = (investordata) => {
      setShowUpdateForm(true);
      setinvestorFormData(investordata);
    };
  
    const displayInvestors = () => {
      if (!loading) {
        return investorArray.map(({ _id, fname, lname, email, password }) => (
          <tr>
            <td>{fname +" "+lname}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>
              <button className="btn btn-danger" onClick={(e) => deleteInvestor(_id)}>
                <i class="fas fa-trash"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-primary" onClick={e => updateInvestor({_id, fname, lname, email, password})} >
                <i class="fas fa-pen"></i>
              </button>
            </td>
          </tr>
        ));
      }
    };
  



  return (
    <div className="row mt-5">
    <div className="m-auto col-md-5 col-5 w-50">
      <form>
        {/* Name input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control bg-secondary"
          />
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example2"
            className="form-control bg-secondary"
          />
          <label className="form-label" htmlFor="form4Example2">
            Start Up
          </label>
        </div>
        {/* Message input */}
        <div className="form-outline mb-4">
          <textarea
            className="form-control bg-secondary"
            id="form4Example3"
            rows={4}
            defaultValue={""}
          />
          <label className="form-label" htmlFor="form4Example3">
            Description
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          ADD RODUCT
        </button>
      </form>
    </div>
    </div>
  );
};

export default ManageServices;
