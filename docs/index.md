<div class="animated-bg">
  <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <!-- Sky Gradient (peach) -->
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffddc1"/>
        <stop offset="100%" stop-color="#ffab73"/>
      </linearGradient>

      <!-- Meadow Gradient (soft peach-pink) -->
      <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffdac1"/>
        <stop offset="100%" stop-color="#ffb997"/>
      </linearGradient>

      <!-- Flower Colors -->
      <radialGradient id="flower1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffcba4"/>
        <stop offset="100%" stop-color="#ff9f68"/>
      </radialGradient>
      <radialGradient id="flower2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffbe8f"/>
        <stop offset="100%" stop-color="#ff8c42"/>
      </radialGradient>

      <!-- Cloud Filter -->
      <filter id="cloudFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0" result="goo"/>
      </filter>
    </defs>

    <!-- Background Sky -->
    <rect width="100%" height="100%" fill="url(#skyGradient)"/>

    <!-- Rolling Hills -->
    <path d="M0,300 Q150,250 300,300 T600,300 T900,300 V500 H0 Z" fill="url(#grassGradient)"/>

    <!-- Flowers -->
    <circle cx="150" cy="320" r="20" fill="url(#flower1)">
      <animate attributeName="cy" values="320;315;320" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="180" cy="330" r="12" fill="url(#flower2)">
      <animate attributeName="cy" values="330;325;330" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="340" r="16" fill="url(#flower1)">
      <animate attributeName="cy" values="340;335;340" dur="3s" repeatCount="indefinite"/>
    </circle>

    <!-- Floating Clouds -->
    <g filter="url(#cloudFilter)">
      <circle cx="100" cy="100" r="25" fill="white"/>
      <circle cx="130" cy="100" r="30" fill="white"/>
      <circle cx="120" cy="80" r="20" fill="white"/>
      <animateTransform attributeName="transform" type="translate" values="0,0; 10,0; 0,0" dur="15s" repeatCount="indefinite"/>
    </g>

    <g filter="url(#cloudFilter)">
      <circle cx="400" cy="120" r="20" fill="white"/>
      <circle cx="430" cy="120" r="25" fill="white"/>
      <circle cx="420" cy="100" r="15" fill="white"/>
      <animateTransform attributeName="transform" type="translate" values="0,0; 8,0; 0,0" dur="12s" repeatCount="indefinite"/>
    </g>
  </svg>
</div>

<style>
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
</style>




<style>
/* Light Theme */
[data-md-color-scheme="default"] h1, 
[data-md-color-scheme="default"] h2, 
[data-md-color-scheme="default"] h3, 
[data-md-color-scheme="default"] h4, 
[data-md-color-scheme="default"] h5, 
[data-md-color-scheme="default"] h6 {
    color: purple !important;
}

/* Dark Theme */
[data-md-color-scheme="slate"] h1, 
[data-md-color-scheme="slate"] h2, 
[data-md-color-scheme="slate"] h3, 
[data-md-color-scheme="slate"] h4, 
[data-md-color-scheme="slate"] h5, 
[data-md-color-scheme="slate"] h6 {
    color: yellow !important;
}
</style>

<div style="text-align: center;">
    <img src="assets/images/kalyan_logo.png" class="logo" style="pointer-events: none;">
</div>
Kalyan Jewellers is one of India’s largest and most trusted jewelry brands, offering an extensive collection of Gold, Diamond, Platinum, and Silver jewelry. Established in 1993, Kalyan Jewellers has grown to over 300+ showrooms across India and the Middle East, renowned for their high-quality craftsmanship and authentic designs.


For decades, **Kalyan Jewellers** has been synonymous with purity, elegance, and exquisite craftsmanship. We take pride in offering a breathtaking collection of **gold, diamond, platinum, and gemstone jewelry**, designed to celebrate every special moment of your life.  

## **Discover Timeless Beauty**  


At **Kalyan Jewellers**, every piece is crafted with precision and passion, blending **heritage, artistry, and modern design**. Whether you're looking for a **regal bridal set, a contemporary diamond ring, or a timeless temple necklace**, we have something for every occasion.  



## **Our Commitment to You**  

✨ **Uncompromised Purity** – BIS-hallmarked gold and certified diamonds ensure the highest quality.  
✨ **Ethical Sourcing** – We uphold transparency in every piece we create.  
✨ **Exquisite Craftsmanship** – Jewelry handcrafted by skilled artisans with attention to detail.  



## **Exclusive Services We Offer**  

💎 **Custom Jewelry Design** – Bring your vision to life with a personalized touch.  
🔧 **Jewelry Repair & Restoration** – Restore the beauty of your cherished pieces.  
💰 **Gold Exchange & Buyback** – Trusted, hassle-free transactions.  
👰 **Bridal & Wedding Collection** – Curated selections for your special day.  


## **Visit Us & Experience Luxury**  

Explore our stunning collection online or visit our nearest showroom for a personalized experience. Let **Kalyan Jewellers** help you find the perfect piece that defines your elegance and style.  






<div class="hero" markdown>

# Timeless Elegance, Crafted with Passion

Discover our exquisite collection of handcrafted jewelry that celebrates your special moments

[View Collections](/collections/gold){: .md-button .md-button--primary }
[Book Consultation](/about/contact){: .md-button }

</div>

<style>
h1:hover, h2:hover, h3:hover h4:hover, h5:hover, h6:hover {
    opacity: 0.7; /* Dims the text when hovered */
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
}
</style>




<p class="visit-text">For full details visit <a href="https://www.kalyanjewellers.net/" target="_blank">www.kalyanjewellers.org</a></p>


