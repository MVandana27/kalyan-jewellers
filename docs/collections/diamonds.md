
<style>
/* Light Theme */
[data-md-color-scheme="default"] h1, 
[data-md-color-scheme="default"] h2, 
[data-md-color-scheme="default"] h3, 
[data-md-color-scheme="default"] h4, 
[data-md-color-scheme="default"] h5, 
[data-md-color-scheme="default"] h6 {
    color:rgb(215, 109, 9)!important;
}

/* Dark Theme */
[data-md-color-scheme="slate"] h1, 
[data-md-color-scheme="slate"] h2, 
[data-md-color-scheme="slate"] h3, 
[data-md-color-scheme="slate"] h4, 
[data-md-color-scheme="slate"] h5, 
[data-md-color-scheme="slate"] h6 {
    color:rgb(187, 41, 50) !important;
}
</style>

# Kalyan Diamond Collections


# **Diamond Jewellery – The Sparkle of Elegance**  

Diamonds symbolize eternal love, brilliance, and unmatched luxury. At **Kalyan Jewellers**, we bring you a stunning collection of **certified diamond jewelry**, crafted to perfection for every occasion.  

## **Our Diamond Collection**  
💎 **Engagement & Wedding Rings** – Timeless solitaires and elegant halo designs.  
✨ **Diamond Necklaces & Pendants** – A blend of modern and classic styles.  
🌟 **Earrings & Studs** – Perfectly cut diamonds for everyday and special moments.  
💍 **Diamond Bangles & Bracelets** – Statement pieces with breathtaking brilliance.  
👑 **Bridal Diamond Collection** – Exquisite sets to complete your wedding look.  

## **Why Choose Kalyan Jewellers?**  
✔ **Certified Diamonds for Unmatched Quality**  
✔ **Expertly Crafted with Precision & Elegance**  
✔ **Ethically Sourced & Responsibly Manufactured**  
✔ **Customization Options to Suit Your Style**  





```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#4caf50',
  'primaryBorderColor': '#388e3c',
  'lineColor': '#388e3c',
  'fontSize': '16px',
  'fontFamily': 'Arial, sans-serif',
  'edgeLabelBackground':'#f1f1f1'
}}}%%
flowchart TD
  classDef diamond fill:#f1f8e9,stroke:#388e3c,stroke-width:2px, border-radius: 12px
  classDef premium fill:#e8f5e9,stroke:#81c784,stroke-width:2px, border-radius: 12px
  classDef certified fill:#e3f2fd,stroke:#42a5f5,stroke-width:2px, border-radius: 12px

  Start([Diamond Selection]):::diamond
  Type{Diamond Type?}:::diamond
  Certified{Certification Required?}:::diamond
  Setting[Jewelry Setting Design]:::premium
  Payment[Payment & Documentation]:::premium
  Delivery([Delivery & Certification]):::certified

  Start --> Type
  Type -->|Natural| Certified
  Type -->|Lab-Grown| Setting
  Certified -->|GIA/IGI| Setting
  Certified -->|Non-Certified| Payment
  Setting --> Payment
  Payment --> Delivery

```
<style>/* Updated Diamond Flowchart Styling */
.mermaid {
  background: var(--md-code-bg-color);
  border-radius: 15px;
  padding: 20px;
  margin: 25px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.mermaid .node rect {
  rx: 12px;
  ry: 12px;
  stroke-width: 2px;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.15));
}

.mermaid .node.diamond {
  fill: #f1f8e9;
  stroke: #388e3c;
  border-radius: 12px;
}

.mermaid .node.premium {
  fill: #e8f5e9;
  stroke:rgb(129, 173, 199);
  border-radius: 12px;
}

.mermaid .node.certified {
  fill: #e3f2fd;
  stroke: #42a5f5;
  border-radius: 12px;
}
</style>