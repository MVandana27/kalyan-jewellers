

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
    color: rgb(245, 45, 5) !important;
}
</style>



## Our Craftsmanship Philosophy

At Kalyan Jewellers, we blend centuries-old techniques with modern technology to create jewelry that stands the test of time:

- **22-Step Quality Process from raw material to finished product**
- **1 Gram Precision in gold weight measurement**
- **100-Point Inspection before reaching our customers**
- **0 Compromise on purity and finishing**

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#fff9e6',
  'primaryBorderColor': '#d4af37',
  'lineColor': '#d4af37'
}}}%%
flowchart TD
  classDef gold fill:#fff9e6,stroke:#d4af37,stroke-width:2px
  classDef artisan fill:#fff0f0,stroke:#c62828,stroke-width:2px 
  classDef milestone fill:#fff,stroke:#4caf50,stroke-width:2px,stroke-dasharray:5,rx:50,ry:50,color:#666
  classDef final fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
  classDef blue-theme fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,rx:50,ry:50,color:#000000

  Start([Craftsmanship\nInitiation]):::gold
  Design["24K Gold Design\n& CAD Modeling"]:::milestone
  Handmade["Handmade\nComponents"]:::artisan
  Machine["Machine\nPrecision Work"]:::artisan
  Assembly["Assembly &\nFinishing"]:::blue-theme
  QC[Quality\nControl]:::final
  Complete[Finished\nJewelry]:::final

  Start --> Design
  Design --> Handmade
  Design --> Machine
  Handmade --> Assembly
  Machine --> Assembly
  Assembly --> QC
  QC --> Complete

```
<style>/* Craftsmanship Flowchart Styling */
.mermaid {
    background: rgba(255, 255, 255, 0.1); /* Adjust transparency */
    border-radius: 8px;
    padding: 16px;
    margin: 20px 0;
    text-align: center;
    backdrop-filter: blur(5px); /* Adds a subtle blur effect */
}

.mermaid .node rect {
  rx: 6px;
  ry: 6px;
  stroke-width: 4px;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.1));
}

.mermaid .node.gold {
  fill: #fff9e6;
  stroke: #d4af37;
}

.mermaid .node.artisan {
  fill: #fff0f0;
  stroke: #c62828;
}

.mermaid .node.final {
  fill: #e8f5e9;
  stroke: #2e7d32;
}


</style>

<style>
h1:hover, h2:hover, h3:hover h4:hover, h5:hover, h6:hover {
    opacity: 0.7; /* Dims the text when hovered */
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
}
</style>