// Get the button element
var button = document.getElementById('movableButton');

// Variables to keep track of mouse position
var offsetX = 0;
var offsetY = 0;

// Event listener for when mouse is pressed on the button
button.addEventListener('mousedown', function(e) {
  // Calculate the offset between mouse position and button position
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;
  
  // Event listener for when mouse moves
  document.addEventListener('mousemove', moveButton);
  
  // Event listener for when mouse is released
  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveButton);
  });
});

// Function to move the button
function moveButton(e) {
  // Calculate new position based on mouse position and offset
  var newX = e.clientX - offsetX;
  var newY = e.clientY - offsetY;
  
  // Set new position for the button
  button.style.left = newX + 'px';
  button.style.top = newY + 'px';
}
