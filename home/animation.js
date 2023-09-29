function test() {
  return new Promise((resolve, reject) => {
    const button = document.querySelector(".journey-button");
    button.disabled = true; 
    button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';

    const frameCounts = [
      265, 
      121,
      48,  
      88, 
      129  
    ];

    const totalImages = frameCounts.reduce((sum, count) => sum + count, 0);
    let loadedImages = 0;
    
      const currentFrame = (scene, index) => {
        if (scene === 'scene-1') {
          return `../../${scene}/PKE_${index.toString().padStart(5, '0')}.png`;
        } else if (scene === 'scene-2') {
          return `../../${scene}/PK${index.toString().padStart(5, '0')}.png`;
        } else if (scene === 'scene-3') {
          return `../../${scene}/Pine${index.toString().padStart(4, '0')}.png`;
        } else if (scene === 'scene-4') {
          return `../../${scene}/PKA${index.toString().padStart(4, '0')}.png`;
        } else if (scene === 'scene-5') {
          return `../../${scene}/PKK${index.toString().padStart(4, '0')}.png`;
        } else {
          return `../../${scene}/PKK0129.png`;
        }
      };
    
      function loadImages(sceneIndex) {
        const scene = `scene-${sceneIndex + 1}`;
        for (let i = 0; i < frameCounts[sceneIndex]; i++) {
          const img = new Image();
          img.src = currentFrame(scene, i);
  
          img.addEventListener('load', () => {
            loadedImages++;
            console.log(`Image loaded: ${img.src}`);
            console.log(`Image loaded: ${loadedImages}/${totalImages}`);
  
            if (loadedImages === totalImages) {
              console.log('All images loaded. Redirecting...');
              resolve(true);
            }
          });
  
          img.addEventListener('error', () => {
            console.error(`Error loading image: ${img.src}`);
            retryLoadImage(sceneIndex);
          });
        }
      }
  
      function retryLoadImage(sceneIndex) {
        setTimeout(() => {
          loadImages(sceneIndex); 
        }, 1000); 
      }
  
      for (let sceneIndex = 0; sceneIndex < frameCounts.length; sceneIndex++) {
        loadImages(sceneIndex);
      }
    });
  }