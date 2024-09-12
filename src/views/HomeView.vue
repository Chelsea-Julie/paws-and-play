<template>
  
  <div id="app">
    <div class="background-container">
      <div class="content">
        <h3 class="subheading">The best dog groomers you'll find</h3>
        <h1 class="main-heading">Your Go-to Spot for Dog Care</h1>
        <div class="button-container">
          <a href="#" class="button">Order Online</a>
          <a href="#" class="button">Our Menu</a>
        </div> 
      </div>
    </div>

    <div class="features-section">
      <div class="feature-box">
        <div class="icon-background">
          <img src="https://chelsea-julie.github.io/all-images/images_doggy-removebg-preview.png" alt="Safety First" class="feature-icon" />
        </div>
        <h3 class="feature-title">Safety First</h3>
        <p class="feature-description">
          Counselors certified in pet first aid and CPR put your dog’s health and happiness first.
        </p>
      </div>
      <div class="feature-box">
        <div class="icon-background">
          <img src="https://chelsea-julie.github.io/all-images/Screenshot_2024-09-04_154119-removebg-preview.png" alt="Spacious Play Yards" class="feature-icon" />
        </div>
        <h3 class="feature-title">Spacious Play Yards</h3>
        <p class="feature-description">
          Our oasis offers large, climate-controlled play yards for optimal tail wags.
        </p>
      </div>
      <div class="feature-box">
        <div class="icon-background">
          <img src="https://chelsea-julie.github.io/all-images/Screenshot_2024-09-04_155207-removebg-preview.png" alt="Monitor Your Pup" class="feature-icon" />
        </div>
        <h3 class="feature-title">Monitor Your Pup</h3>
        <p class="feature-description">
          Access our live webcams on your computer or smartphone.
        </p>
      </div>
      <div class="feature-box">
        <div class="icon-background">
          <img src="https://chelsea-julie.github.io/all-images/Screenshot_2024-09-04_154212-removebg-preview.png" alt="All-In-One Pricing" class="feature-icon" />
        </div>
        <h3 class="feature-title">All-In-One Pricing</h3>
        <p class="feature-description">
          Treat your pet to all-inclusive fun at a convenient rate.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
  <div class="row card-section">
    <!-- Doggy Daycare Card -->
    <div class="col-md-3">
      <div class="card">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/services.png" class="card-img-top" alt="Doggy Daycare">
        <div class="card-body">
          <h5 class="card-title">Doggy Daycare</h5>
          <p class="card-text">A professional, supervised, and fun environment for your fur child to spend the day when you are at work. Daycare hours are from 6:30am - 6:30pm.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>

    <!-- Sleepovers Card -->
    <div class="col-md-3">
      <div class="card">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/pexels-cdomingues10-731022.jpg" class="card-img-top" alt="Sleepovers">
        <div class="card-body">
          <h5 class="card-title">Sleepovers</h5>
          <p class="card-text">Going away for the weekend or holiday? We offer supervised sleepovers for your fur babies where they can run FREE!</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>

    <!-- Puppy Socialising Card -->
    <div class="col-md-3">
      <div class="card">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/pexels-wildlittlethingsphoto-27175407.jpg" class="card-img-top" alt="Puppy Socialising">
        <div class="card-body">
          <h5 class="card-title">Puppy Socialising</h5>
          <p class="card-text">Socialization is the key to a happy pet. We offer supervised socializing classes that fit their needs.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
  </div>
    <!-- Parallax Section -->
    <div class="parallax"></div>

  <h1 class="collect"> Our gallery</h1>
  <div class="gallery-container">
    <div class="gallery">
      <div class="gallery-item">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/hike4.jpg" alt="Blue Sofa">
        <div class="overlay">
          <h3>Going on adventures</h3>
          <p>The dogs embarked on a thrilling adventure, discovering new sights and making new friends along the way.</p>
        
        </div>
      </div>
      <div class="gallery-item">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/hike3.jpg" alt="Wooden Cabinet" class="woody">
        <div class="overlay">
          <h3>Going on a hike</h3>
          <p>The pups enjoyed exploring the trails, sniffing new scents, and taking in the breathtaking views on their exciting hike.</p>
          
        </div>
      </div>
    
      <div class="gallery-item">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/hike2.jpg" alt="Pendant Light">
        <div class="overlay">
          <h3>Taking the daogs to the beach</h3>
          <p>Our furry friends had a blast digging in the sand and splashing in the waves during their fun-filled day at the beach.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/playing.jpg" alt="Shelf Decor">
        <div class="overlay">
          <h3>The dogs just playing around</h3>
          <p>The daycare was filled with joyful barks and wagging tails as the dogs played around, chasing toys and having a great time.</p>
          
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: 'Playfair Display', serif;
  color: #fff;
  background: #f5f5f5;
}

/* Background Container */
.background-container {
  background-image: url('https://chelsea-julie.github.io/all-images/images/capstone/Services-banner-cropped.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right; /* Align text to the right */
  color: #fff; /* Make text white */
  
}
/* Card Section Container */
.card-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
}

/* Card Section Styling */
.card-section {
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
}

/* Card Styling */
.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* Card Image */
.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  width: 100%;
  height: 200px;
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

/* Card Body */
.card-body {
  padding: 20px;
}

/* Card Title */
.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

/* Card Text */
.card-text {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #666;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
}

/* Button Styles */
.btn-primary {
  background-color: #ff7f50;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff6347;
  color: #fff;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .col-md-3 {
    margin-bottom: 20px;
  }
}


/* Content Styling */
.content {
  color: #fff;
  max-width: 80%;
  text-align: center; /* Align text to the right */
}

/* Headings */
.subheading {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.main-heading {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Button Container */
.button-container {
  display: flex;
  gap: 15px;
  justify-content: center; /* Align buttons to the right */
}

.button {
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.features-section {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        /* Feature Box */
        .feature-box {
            width: 22%;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .icon-background:hover {
            padding: 20px;
            transition: 0.3s;}

            .feature-icon{
                transform: translateY(-12px);
                transition: 0.3s;
            }
      
        /* Feature Icon */
        .feature-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
        }
        /* Feature Title */
        .feature-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
            font-family: 'Patrick Hand', cursive; /* Use a font similar to the one in the image */
        }
        /* Feature Description */
        .feature-description {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #555;
            max-width: 250px;
            margin: 0 auto;
        }
        /* Circle behind Icon */
        .icon-background {
            /* background-color: #E6F0F5; */
            background-image: url('https://chelsea-julie.github.io/all-images/images/capstone/pexels-cdomingues10-731022.jpg'); /* Replace with the actual image URL */
            border-radius: 50%;
            display: inline-block;
            padding: 15px;
            margin-bottom: 20px;
        }

        .category-img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}
/* Hover effect on images */
.product-category-item:hover .category-img {
  opacity: 0.8;
}
/* Badge on the images */
.product-category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
/* View Collection button */
.view-collection {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
}
.view-btn {
  background-color: #8B5E3C; /* Warm brown color */
  color: #fff;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.view-btn:hover {
  background-color: #6F4F28; /* Darker brown */
  transform: scale(1.05);
}
/* Show button on hover */
.product-category-item:hover .view-collection {
  opacity: 1;
}
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Padding around the gallery */
  width: 100%; /* Spans full width of the page */
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 250px); /* Reduced height for smaller items */
  gap: 10px; /* Slightly larger gap for spacing */
  max-width: 1000px; /* Reduced max-width for a smaller gallery */
  margin: auto; /* Center gallery horizontally */
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  margin: 0;
  font-size: 20px;
}

.overlay p {
  font-size: 14px;
  margin-bottom: 20px;
}

.overlay button {
  padding: 10px 20px;
  background-color: #FF9900;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.overlay button:hover {
  background-color: #E88B00;
}

/* Specific sizes for the grid */
.gallery-item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.gallery-item:nth-child(2) {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}

.gallery-item:nth-child(3) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.gallery-item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.gallery-item:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.gallery-item:nth-child(6) {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}


/* Parallax Section */
.parallax {
  background-image: url('https://chelsea-julie.github.io/all-images/images/capstone/Register-your-pup-cropped.jpg'); /* Replace with your desired image */
  height: 400px; /* Adjust the height as needed */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0; /* Space between sections */
}

</style>
