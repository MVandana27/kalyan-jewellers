function renderMermaid() {
  // Initialize Mermaid with custom settings
  mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    themeVariables: {
      primaryColor: '#f5f5f5',
      primaryBorderColor: '#d4af37', // Gold color
      lineColor: '#d4af37',
      primaryTextColor: '#333'
    },
    flowchart: {
      diagramPadding: 20,
      useMaxWidth: true
    }
  });
  
  // Re-render Mermaid diagrams when switching tabs in MkDocs
  document.querySelectorAll('.md-tabs__link').forEach(tab => {
    tab.addEventListener('click', () => {
      setTimeout(() => {
        mermaid.init(undefined, '.mermaid');
      }, 100);
    });
  });
  
  try {
    // Initial rendering of Mermaid diagrams
    mermaid.init(undefined, '.mermaid');
  } catch (e) {
    console.error('Mermaid rendering error:', e);
  }
}

// Make sure Mermaid is loaded before initializing
if (typeof mermaid !== 'undefined') {
  window.addEventListener('load', renderMermaid); // Ensure Mermaid renders after the window is loaded
  document.addEventListener('DOMContentLoaded', renderMermaid); // Ensure Mermaid renders after the DOM is fully loaded
}
