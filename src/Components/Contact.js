import React from 'react';

const Contact = () => {
  return (

    <div className="container my-5 mx-5 me-5">

        <h2> Contact Us</h2>
      <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <select className="my-3 form-select" aria-label="Default select example">
              <option selected>Select your Query</option>
              <option value="1">Complaint</option>
              <option value="2">Review</option>
              <option value="3">Visit </option>
              <option value="4">Others</option>

            </select>
            <div className=" mx-1 form-group row">
              <div className="col-sm-2" >Are You a Member?</div>
              <div className="col-sm-10">
                <div className="form-check" >
                  <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                  <label className="form-check-label"  for="gridCheck1">Yes </label>

                </div>
              </div>
            </div>

            <div className="mx-1 form-group row">
              <div className="col-sm-2" >Are You a FoOdie?</div>
              <div className="col-sm-10">
                <div className="form-check" >
                  <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                  <label className="form-check-label"  for="gridCheck2">Yes </label>

                </div>
              </div>
            </div>

            <div className="mx-1 form-group row">
              <div className="col-sm-2" >Are You a Chef?</div>
              <div className="col-sm-10">
                <div className="form-check" >
                  <input className="form-check-input" type="checkbox" id="gridCheck3"/>
                  <label className="form-check-label"  for="gridCheck3">Yes </label>

                </div>
              </div>
            </div>
            <div className="mb-3 my-3">
              <label for="exampleFormControlTextarea1" className="form-label">Tell Us About Yourself</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            
            <div className="mb-3 my-3">
              <label for="exampleFormControlTextarea2" className="form-label">Elaborate your Concern</label>
              <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>

          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    
        <div class="b-example-divider">
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer-dark">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
      </a>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>For FoOdieS</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Home</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Features</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Pricing</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">FAQs</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>For Restaurant</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Home</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Features</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Pricing</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">FAQs</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>About FoOdieS</h5>
      <ul class="nav flex-column">
  <li class="nav-item mb-2">
    <a href="/" class="nav-link active p-0 ">Home</a>
  </li>
  <li class="nav-item mb-2">
    <a href="/" class="nav-link p-0 ">Features</a>
  </li>
  <li class="nav-item mb-2">
    <a href="/" class="nav-link p-0 ">Pricing</a>
  </li>
  <li class="nav-item mb-2">
    <a href="/" class="nav-link p-0 ">FAQS</a>
  </li>
  <li class="nav-item mb-2">
    <a href="/" class="nav-link p-0 ">About</a>
  </li>
</ul>

    </div>

    <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5> Join FoOdieS Today!</h5>
          <p> Subscribe to our newsletter</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    

 
  <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center py-4 my-4 border-top footer-dark">
  <p class="text-center">© 2024 FoOdieS, Inc. All rights reserved.</p>
</div>
</footer>
</div>
</div>
  </div>
      
    
  );
};

export default Contact;
