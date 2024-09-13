<template>
    <!-- Header Section -->
    <div class="header">
    <h1 class="heading text-center">The doggy Sleepovers</h1>
    </div>
    <!-- About Us Section -->
    <div class="about-section">
      <div class="row">
        At our doggy daycare, we prioritize your furry friend’s happiness and well-being above all else. Our dedicated team ensures that every pup receives top-notch care, starting with freshly prepared, nutritious meals tailored to their individual needs. Our facility is designed with spacious play areas, safe and engaging toys, and comfortable resting spots to keep your dog active and content. We offer personalized attention with plenty of cuddles, playtime, and social interaction, creating a home-away-from-home environment. Our commitment to cleanliness and safety means you can trust that your dog will be cared for with the utmost love and attention, giving you peace of mind while you're away. Join our community and let your dog experience the ultimate in daycare luxury!
      </div>
    </div>
  </template>
  <style scoped>
  .heading {
    font-family: "Irish Grover", system-ui;
  }
  /* Header Styling */
  .header {
    background-image: url("https://chelsea-julie.github.io/all-images/images/capstone/989b4330c2a5c34f6725702252728ba4.jpg");
    color: white;
    text-align: center;
    padding: 100px 20px;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 50vh;
  }
  .header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .header h1 {
    position: relative;
    font-size: 50px;
    z-index: 2;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  }
  /* About Us Section Styling */
  .about-section {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    padding: 20px;
  }
  </style>