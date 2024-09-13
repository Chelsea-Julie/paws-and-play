<template lang="">
    <div>
        <!-- Hero Image Section -->
        <div class="hero-section">
            <img src="https://chelsea-julie.github.io/all-images/images/capstone/istockphoto-1659216394-612x612.jpg" alt="Hero Image" class="hero-image">
            <div class="hero-text">
                <h1>Our Packages</h1>
                <p>Choose the best package for your needs</p>
            </div>
        </div>

        <!-- Packages Section -->
        <div class="container">
            <div class="package">
                <img src="path-to-image1.jpg" alt="1 Day per Week" class="package-image">
                <h2>1 Day per Week</h2>
                <div class="price">R185</div>
                <p>Per Day</p>
                <ul>
                    <li>Daily rate R185</li>
                    <li>R740 per month</li>
                    <li>Extra dog 10% off R167 per day</li>
                </ul>
                <button>Book Now!</button>
            </div>
            <div class="package">
                <img src="path-to-image2.jpg" alt="2 Days per Week" class="package-image">
                <h2>2 Days per Week</h2>
                <div class="price">R180</div>
                <p>Per Day</p>
                <ul>
                    <li>Daily rate R180</li>
                    <li>R1440 per month</li>
                    <li>Extra dog 10% off R162 per day</li>
                </ul>
                <button>Book Now!</button>
            </div>
            <div class="package featured">
                <img src="./pexels-poodles2doodles-1458925.jpg" alt="5 Days per Week" class="package-image">
                <h2>5 Days per Week</h2>
                <div class="price">R165</div>
                <p>Per Day</p>
                <ul>
                    <li>Daily rate R165</li>
                    <li>R3300 per month</li>
                    <li>Extra dog 10% off R149 per day</li>
                </ul>
                <button>Book Now!</button>
            </div>
            <div class="package">
                <img src="path-to-image4.jpg" alt="3 Days per Week" class="package-image">
                <h2>3 Days per Week</h2>
                <div class="price">R175</div>
                <p>Per Day</p>
                <ul>
                    <li>Daily rate R175</li>
                    <li>R2100 per month</li>
                    <li>Extra dog 10% off R158 per day</li>
                </ul>
                <button>Book Now!</button>
            </div>
            <div class="package">
                <img src="path-to-image5.jpg" alt="4 Days per Week" class="package-image">
                <h2>4 Days per Week</h2>
                <div class="price">R170</div>
                <p>Per Day</p>
                <ul>
                    <li>Daily rate R170</li>
                    <li>R2720 per month</li>
                    <li>Extra dog 10% off R153 per day</li>
                </ul>
                <button>Book Now!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #F9F9F9;
    padding: 20px;
}

.hero-section {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
    margin-bottom: 40px;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero-text p {
    font-size: 1.2rem;
    background: rgba(0, 0, 0, 0.5);
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;
}

.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.package {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 220px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.package:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.package-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.package h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
}

.package .price {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #00AAFF;
}

.package p {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
}

.package ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;
}

.package ul li {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
}

button {
    background-color: #00AAFF;
    color: white;
    border: none;
    padding: 12px 18px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0088CC;
}
</style>
