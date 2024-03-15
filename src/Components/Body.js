import React from 'react'

export default function Body({person}) {
  return (
    <div>
      <>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active"> 
          <img
            src="https://source.unsplash.com/fdlZBWIP0aM/1920x600"
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block " style={{ color: 'white' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                  <div>
                    <h2>Pakistan's Largest Plateform for foodies!</h2>
                    <p2>Bringing Pakistan's first food discovery platform for real foodies. Search your favorite food, give reviews, check out amazing recipes of top chefs and a lot more.</p2>
                  </div>
                </div>
              </div>
        </div>
        <div class="carousel-item" text-align="center">
          <img
            src="https://source.unsplash.com/XoByiBymX20/1920x600"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block" text-align="center">

            <h2>The Best Foodies Blog!</h2>
            <p>Explore more taste and more recipes here.</p>
            
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/MQUqbmszGGM/1920x600"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>Food all over the World!</h2>
            <p> It's The Magic!</p>
            
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className="container my-5 text-center" style={{ color: 'red' }}>
  <h3>FoOdieS Guide</h3>
  <div className="container my-2" style={{ color: 'black' }}>
    <h2><b>Discover the scrumptious world of food</b></h2>
  </div>
</div>


    <div class="container my-4">
  <div class="row mb-2">
    <div class="col-md-4">
      <div class="card" style={{width: "23rem"}}>
        <img src="https://source.unsplash.com/Ciqxn7FE4vE/600x400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h3 class="card-title">Restaurants</h3>
          <p class="card-text">From Pakistani and Afghani Cuisine to Thai and Chinese Cuisine, discover and savor the scrumptious flavors from all around the globe with Foodies.</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card" style={{width: "23rem"}}>
        <img src="https://source.unsplash.com/vBOxsZrfiCw/600x400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h3 class="card-title">Recipes</h3>
          <p class="card-text">From the Best Pancake Recipe to Chicken Recipes, Foodies presents you with all the best recipes. Cook and delight your audience with these perfect recipes.</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card" style={{width: "23rem"}}>
        <img src="https://source.unsplash.com/NyV5CLSjgYc/600x400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h3 class="card-title">Events</h3>
          <p class="card-text">As a food-passionate person, do you cherish exploring different food events? Well, we do too! Let's look out for the best upcoming events in town together.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-5 text-center" style={{ color: 'red' }}>
  <h1> <b> Cuisines </b></h1>
  </div>


  <div class="container my-4">
  <div class="row">
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/UfTupDktCyg/300x300" class="img-thumbnail" alt="..."/>
        <h5>Fast Food</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/MqT0asuoIcU/300x300" class="img-thumbnail" alt="..."/>
        <h5>Pizza</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/6RJct18G_3I/300x300" class="img-thumbnail" alt="..."/>
        <h5>Pakistani</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/UwJh0jUfY9I/300x300" class="img-thumbnail" alt="..."/>
        <h5>Deserts and Bakes</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/jcLcWL8D7AQ/300x300" class="img-thumbnail" alt="..."/>
        <h5>Beverages</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/I7A_pHLcQK8/300x300" class="img-thumbnail" alt="..."/>
        <h5>Burgers</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/YZypE1AKMys/300x300" class="img-thumbnail" alt="..."/>
        <h5>American</h5>
      </div>
    </div>
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/H5Hj8QV2Tx4/300x300" class="img-thumbnail" alt="..."/>
        <h5>Chinese</h5>
      </div>
    </div>
  </div>
</div>

<div className="container my-5 text-center" style={{ color: 'red' }}>
  <h1> <b> Recipes </b></h1>
  </div>

  <div class="container my-4">
  <div class="row">
    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/D9SyQ9nKkZk/300x300" class="img-thumbnail" alt="..."/>
        <h5>Deserts</h5>
      </div>
    </div>

    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/d9jcPTRD9fo/300x300" class="img-thumbnail" alt="..."/>
        <h5>Pasta</h5>
      </div>
    </div>

    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/kPxsqUGneXQ/300x300" class="img-thumbnail" alt="..."/>
        <h5>Cake Recipes</h5>
      </div>
    </div>

    <div class="col-md-3">
      <div class="container my-4">
        <img src="https://source.unsplash.com/sXfG656S6yw/300x300" class="img-thumbnail" alt="..."/>
        <h5>Salads</h5>
      </div>
    </div>
  </div>
</div>

<div className="container my-5 text-center" style={{ color: 'red' }}>
  <h1> <b> Restaurants </b></h1>
  </div>

  <div class="row">
  <div class="col-md-4">
    <div class="card">
      <img src="https://source.unsplash.com/Pu0rOdvQjL4/600x400" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">McDonald's - Multan Road Bypass Chowk</h5>
        <p class="card-text">McDonald's, Bypass Chowk، Sahiwal, Pakistan</p>
        <p class="card-text">Call at: +92 40 111 244 622 and +92 300 8684359</p>
        <p class="card-text">Rs 250 - Rs 1,795</p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img src="https://source.unsplash.com/UI0ylIEHxMM/600x400" class="card-img-top"  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tree Lounge</h5>
        <p class="card-text">WB Mall Gulberg - Lahore</p>
        <p class="card-text">Tree Lounge, 3، Lahore, Pakistan</p>
        <p class="card-text">Call Us at: +92 342 8888733</p>
        <p class="card-text">Rs 125 - Rs 855</p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img src="https://source.unsplash.com/mwbjyRUTlIQ/600x400" class="card-img-top"  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hardee's - Shaheed Milat Road</h5>
        <p class="card-text">Karachi</p>
        <p class="card-text">Hardee's, Hillpark Circle، Shaheed Milat Service Road, PECHS, Karachi, Pakistan</p>
        <p class="card-text">Call Us at: +92 21 111 200 400, +92 21 37233258</p>
        <p class="card-text">Rs 399 - Rs 1,999</p>
      </div>
    </div>
  </div>
</div>

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
    
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
   </> 
    </div>
    
  )
}
