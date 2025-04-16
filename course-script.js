document.addEventListener('DOMContentLoaded', () => {
  // Track progress button functionality
  const trackButtons = document.querySelectorAll('.track-button');
  trackButtons.forEach(button => {
    button.addEventListener('click', () => {
      // If user is logged in, track progress
      const isLoggedIn = checkLoginStatus();
      
      if (isLoggedIn) {
        button.textContent = 'Progress Tracked';
        button.classList.add('tracked');
        setTimeout(() => {
          button.textContent = 'Track Progress';
          button.classList.remove('tracked');
        }, 2000);
      } else {
        // Redirect to login page with return URL
        const currentPage = window.location.pathname;
        window.location.href = `login.html?redirect=${encodeURIComponent(currentPage)}`;
      }
    });
  });
  
  // Load more modules functionality
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.textContent = 'Loading...';
      
      // Simulate loading delay
      setTimeout(() => {
        // Create additional modules
        const moduleGrid = document.querySelector('.module-grid');
        
        // Example of dynamically created modules (would come from server in real app)
        const additionalModules = [
          {
            number: '07',
            title: 'Advanced Topics',
            lessons: [
              'Advanced Concepts',
              'Design Patterns',
              'Performance Optimization'
            ],
            locked: false
          },
          {
            number: '08',
            title: 'Project Building',
            lessons: [
              'Real-world Applications',
              'Collaborative Development',
              'Deployment Strategies'
            ],
            locked: true
          }
        ];
        
        // Add additional modules to the grid
        additionalModules.forEach(module => {
          const moduleCard = document.createElement('div');
          moduleCard.className = `module-card${module.locked ? ' locked' : ''}`;
          
          moduleCard.innerHTML = `
            <span class="module-number">${module.number}</span>
            <h3>${module.title}</h3>
            <ul class="module-lessons">
              ${module.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
            </ul>
            ${module.locked ? 
              `<button class="button module-button" disabled>Locked</button>
               <div class="module-lock-message">Complete previous modules to unlock</div>` :
              `<a href="#" class="button module-button">Begin</a>`
            }
          `;
          
          moduleGrid.appendChild(moduleCard);
        });
        
        // Update button state and hide after second click
        loadMoreBtn.textContent = 'All Modules Loaded';
        loadMoreBtn.disabled = true;
        
        setTimeout(() => {
          loadMoreBtn.style.display = 'none';
        }, 2000);
      }, 800);
    });
  }
  
  // Helper function to check login status
  function checkLoginStatus() {
    // In a real app, this would check cookies/local storage or session info
    // For this demo, we'll return false to simulate logged-out state
    return false;
  }
});