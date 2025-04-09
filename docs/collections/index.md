


<style>
:root {
  --sidebar-text-light: #222;
  --sidebar-text-dark: #f5f5f5;
 
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 30px;
  width: 220px;
  background-color: transparent; /* Default light background */
  padding: 20px;
  border-radius: 12px;
  z-index: 900;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Dark theme styles */
[data-md-color-scheme="slate"] .sidebar {
  background-color: var(--sidebar-bg-dark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.sidebar a {
  display: block;
  margin: 10px 0;
  color: var(--sidebar-text-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 8px 12px;
  border-radius: 6px;
}

[data-md-color-scheme="slate"] .sidebar a {
  color: var(--sidebar-text-dark);
}

.sidebar a:hover {
  color: var(--md-accent-fg-color);
  background-color: rgba(0, 0, 0, 0.05); /* Light hover effect */
}

[data-md-color-scheme="slate"] .sidebar a:hover {
  background-color: rgba(255, 255, 255, 0.05); /* Dark hover effect */
}

.content {
  margin-left: 250px;
}
</style>

<div class="sidebar">
  <a href="#our-exclusive-jewelry-collections">Our Exclusive Jewelry Collections</a>
  <a href="#gold-jewelry">Gold Jewelry</a>
  <a href="#diamond-collections">Diamond Collections</a>
  <a href="#bridal-jewelry">Bridal Jewelry</a>
  <a href="#why-choose-us">Why Choose Us</a>
</div>

## **Our Exclusive Jewelry Collections**

Welcome to our **Collections** section, where tradition meets elegance. Browse through our exquisite range of jewelry, crafted with precision and passion.

---

## **Gold Jewelry**  

Discover our timeless **gold jewelry collection**, blending heritage with modern craftsmanship.  

[Explore Gold Jewelry](gold.md){: .custom-button  }


---

## **Diamond Collections**

Brilliance redefined—our **diamond collection** features handcrafted designs that sparkle with perfection.  

[View Diamond Jewelry](diamonds.md){: .custom-button}

---

## **Bridal Jewelry**


Make your special day even more memorable with our **exclusive bridal collection**. Designed to bring out the best in every bride.  

[Browse Bridal Collection](bridal.md){: .custom-button }

---

### **Why Choose Us**

- **Authentic & Certified Jewelry**  
- **Customizable Designs**  
- **Luxury with Affordability**  

💬 Need help?      [Contact Us](/about/contact/){: .custom-button}

---

<style>
.md-button {
    font-size: 1.1rem;
    padding: 10px 20px;
    border-radius: 8px;
}
.md-button--primary {
    background-color: #d4af37;  /* Gold color */
    color: white;
}
.md-button:hover {
    opacity: 0.8;
}
</style>
<style>
/* Slide and highlight heading on hover */
h1:hover,
h2:hover,
h3:hover,
h4:hover,
h5:hover,
h6:hover {
  transform: translateX(4px); /* Slide effect */
  
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding-inline: 4px;
  border-radius: 4px;
}
</style>