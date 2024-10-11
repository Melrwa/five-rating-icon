
  
const segments = {
    5: document.getElementById('segment5'), // Bottom horizontal
    4: document.getElementById('segment4'), // Lower right vertical
    3: document.getElementById('segment3'), // Middle horizontal
    2: document.getElementById('segment2'), // Upper left vertical
    1: document.getElementById('segment1')  // Top horizontal
  };
  
  // Get the custom alert element
  const customAlert = document.getElementById('customAlert');
  
  // Clear all segments (reset function)
  function clearSegments() {
    Object.values(segments).forEach(segment => segment.classList.remove('filled'));
  }
  
  // Function to handle the segment click and display the rating
  function handleSegmentClick(segmentNumber) {
    // Clear all segments first
    clearSegments();
  
    // Fill segments from the bottom (5) up to the clicked one (simulate rating)
    for (let i = 5; i >= segmentNumber; i--) {
      segments[i].classList.add('filled');
    }
  
    // Display the custom alert with the rating
    const rating = 6 - segmentNumber;
    showCustomAlert(`You have rated: ${rating}`);
  }
  
  // Function to display the custom alert
  function showCustomAlert(message) {
    // Set the message and make the alert visible
    customAlert.textContent = message;
    customAlert.classList.remove('hidden');
    customAlert.classList.add('visible');
  
    // Hide the alert after 3 seconds
    setTimeout(() => {
      customAlert.classList.remove('visible');
      customAlert.classList.add('hidden');
    }, 3000);
  }
  
  // Add event listeners to each segment
  Object.entries(segments).forEach(([segmentNumber, segmentElement]) => {
    segmentElement.addEventListener('click', () => {
      handleSegmentClick(parseInt(segmentNumber)); // Call the handler with the segment number as the rating
    });
  });
  
  