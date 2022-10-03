import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const StartupDetail = () => {

    // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const {id} = useParams();

  
    console.log(currentUser);

  return (
   
 <div className="mt-1">
  <div className="team-single">
    <div className="row">
      <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
        <div className="team-single-img">
          <img
          src={currentUser.thumbnail}
            alt="xyz"
            className="coverimg"
          />
        </div>
        <div className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
          <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">
          {currentUser.title}
          </h4>
          <p className="sm-width-95 sm-margin-auto">
          {currentUser.email}
          </p>
          <div className="margin-20px-top team-single-icons">
            <ul className="no-margin">
              <li>
                <a href="javascript:void(0)">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-7">
        <div className="team-single-text padding-50px-left sm-no-padding-left">

        <div className="card bg-c-green order-card">
        <div className="card-block">
          <h4 className="font-size38 sm-font-size32 xs-font-size30">
            Description
          </h4>
          <p className="no-margin-bottom">
           {currentUser.description} officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. aut
            odit aut fugit, sed
        
          </p>
        </div>
        </div>

          <div className="contact-info-section margin-40px-tb">
            <ul className="list-style9 no-margin">
              <li>
                <div className="row">
                  <div className="col-md-5 col-5">
                    <i className="fa-solid fa-file-signature text-yellow" />
                    <strong className="margin-10px-left text-yellow">
                      Title
                    </strong>
                  </div>
                  <div className="col-md-7 col-7">
                    <p>{currentUser.title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-5 col-5">
                    <i className="fas fa-envelope text-pink" />
                    <strong className="margin-10px-left xs-margin-four-left text-pink">
                      Email:
                    </strong>
                  </div>
                  <div className="col-md-7 col-7">
                    <p>
                      <p>{currentUser.email}</p>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-5 col-5">
                    <i className="fas fa-mobile-alt text-purple" />
                    <strong className="margin-10px-left xs-margin-four-left text-purple">
                      Phone:
                    </strong>
                  </div>
                  <div className="col-md-7 col-7">
                    <p>{currentUser.phone}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-5 col-5">
                    <i className="fa-solid fa-calendar-days text-lightred" />
                    <strong className="margin-10px-left text-lightred">
                      Started In:
                    </strong>
                  </div>
                  <div className="col-md-7 col-7">
                    <p>{currentUser.year}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-5 col-5">
                    <i className="fas fa-map-marker-alt text-green" />
                    <strong className="margin-10px-left text-green">
                      Address:
                    </strong>
                  </div>
                  <div className="col-md-7 col-7">
                    <p>Digipodium Hazaratganj,Lucknow</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="font-size38 sm-font-size32 xs-font-size30 m-5">
            Our New Launch Products
          </h4>
      <div className="col-md-12">
        <div className="container">
  <div className="row">
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-blue order-card">
        <div className="card-block">
          <h6 className="m-b-20">Product 1</h6>
          <h2 className="text-right">
            <i className="fa fa-cart-plus f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Product Title<span className="f-right">anything</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-green order-card">
        <div className="card-block">
          <h6 className="m-b-20">Product 2</h6>
          <h2 className="text-right">
            <i className="fa fa-rocket f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Product Title<span className="f-right">anything</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-yellow order-card">
        <div className="card-block">
          <h6 className="m-b-20">Product 3</h6>
          <h2 className="text-right">
            <i className="fa fa-refresh f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Product Title<span className="f-right">anything</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-pink order-card">
        <div className="card-block">
          <h6 className="m-b-20">Product 4</h6>
          <h2 className="text-right">
            <i className="fa fa-credit-card f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Product Title<span className="f-right">anything</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>


    
  );
};

export default StartupDetail;
