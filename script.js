document.addEventListener('DOMContentLoaded', () => {
    const rotatingText = document.getElementById('rotating-text');
    if (!rotatingText) return;
    
    // Get course names from the data attribute
    const courses = rotatingText.dataset.courses?.split(',') || [];
    const originalText = rotatingText.textContent;
    
    // Add the original text to the rotation if it's not already in the courses
    if (!courses.includes(originalText) && originalText.trim() !== '') {
      courses.push(originalText);
    }
    
    let currentIndex = 0;
    let rotationInterval;
    
    // Function to calculate text width efficiently
    const calculateTextWidth = () => {
      // Create a hidden element for measuring
      const textContainer = document.createElement('span');
      textContainer.style.cssText = 'visibility: hidden; position: absolute; white-space: nowrap;';
      textContainer.className = rotatingText.className;
      document.body.appendChild(textContainer);
      
      // Measure original text width
      textContainer.textContent = originalText;
      const minWidth = textContainer.offsetWidth;
      
      // Find the maximum width needed
      const maxWidth = courses.reduce((max, course) => {
        textContainer.textContent = course;
        return Math.max(max, textContainer.offsetWidth);
      }, minWidth);
      
      // Clean up
      document.body.removeChild(textContainer);
      return maxWidth;
    };
    
    // Start automatic rotation
    const startRotation = () => {
      // Set minimum width to prevent layout shifts
      const maxWidth = calculateTextWidth();
      rotatingText.style.display = 'inline-block';
      rotatingText.style.minWidth = `${maxWidth}px`;
      rotatingText.style.textAlign = 'center';
      
      // Begin the rotation
      rotationInterval = setInterval(() => {
        // Remove animation class
        rotatingText.classList.remove('rotating');
        
        // Force reflow to restart animation
        void rotatingText.offsetWidth;
        
        // Set new text and restart animation
        rotatingText.textContent = courses[currentIndex];
        rotatingText.classList.add('rotating');
        
        // Update index for next rotation
        currentIndex = (currentIndex + 1) % courses.length;
      }, 3000);
    };
    
    // Pause rotation on hover
    rotatingText.addEventListener('mouseenter', () => {
      rotatingText.classList.add('paused');
    });
    
    rotatingText.addEventListener('mouseleave', () => {
      rotatingText.classList.remove('paused');
    });
    
    // Handle visibility changes to improve performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(rotationInterval);
      } else {
        startRotation();
      }
    });
    
    // Start the rotation
    startRotation();
  });
