import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
// import UpdateProduct from "./UpdateProduct";

const ManageServices = () => {
  const api_url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("startup"))
  );

  const [file, setFile] = useState(api_url+'/'+currentUser.image);
  const [video, setVideo] = useState(api_url+'/'+currentUser.video);
  const [selFile, setSelFile] = useState("");
  const [selVideo, setSelVideo] = useState("");

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded");
      }
    });
  }

  const [productFormData, setproductFormData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // for storing the user data
  const [productArray, setProductArray] = useState([]);

  // to track data loading
  const [loading, setLoading] = useState(true);
 

  const handleFormSubmit = (product) => {
    product.image = selFile;
    product.video= selFile;
    console.log(product);

    fetch(`${api_url}/product/add`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success 😀👌",
          text: "Added Successful",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Invalid Credentials",
        });
      }
    });
  };

  const getDataFromBackend = () => {
    fetch(`${api_url}/product/getall`).then((res) => {
      if (res.status === 200) {
        console.log("data fetched");
        res.json().then((data) => {
          console.log(data);
          setProductArray(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

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

  const UpdateProduct = (product) => {
    setShowUpdateForm(true);
    setproductFormData(product);
  };

  const displayInvestors = () => {
    if (!loading) {
      return productArray.map(({ _id, name, startup, description }) => (
        <tr>
          <td>{name}</td>
          <td>{startup}</td>
          <td>{description}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteInvestor(_id)}
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={(e) =>
                UpdateProduct({ _id, name, startup, description })
              }
            >
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <div className="row">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="card col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <div className="card-body">
                  <Formik
                    initialValues={{
                      name: "",
                      startup: currentUser._id,
                      description: "",
                    }}
                    onSubmit={handleFormSubmit}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        {/* Name input */}
                        <div className="form-outline mb-4">
                          <MDBInput
                            label="Name"
                            id="name"
                            onChange={handleChange}
                            value={values.name}
                            type="text"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <MDBTextArea
                            label="Description"
                            id="description"
                            onChange={handleChange}
                            value={values.description}
                            rows={4}
                          />
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          ADD PRODUCT
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid mt-5 w-75">
        <div class="row">
          <div className="col-md">
            <h3 className="text-center m-2">PRODUCT LIST</h3>
            <table className="table table-secondary">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Startup</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{displayInvestors()}</tbody>
            </table>
          </div>
          {/* {showUpdateForm ? <div className="col-md">{<UpdateInvestor investorFormData={investorFormData}  fetchData = {getDataFromBackend} setShowUpdateForm={setShowUpdateForm} />}</div> : ""} */}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
