// Function to get an element by ID
function getElement(id) {
  return document.getElementById(id);
}

// Function to update the current time dynamically
function updateCurrentTime() {
  const currentTimeElement = getElement('current-time');
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = `Current Time: ${currentTime}`;
}

// Function to update the current date dynamically
function updateCurrentDate() {
  const currentDateElement = getElement('current-date');
  const currentDate = new Date().toLocaleDateString();
  currentDateElement.innerHTML = `Current Date: ${currentDate} <i class="fas fa-calendar-day"></i>`;
}

// Update time and date every second
setInterval(() => {
  updateCurrentTime();
  updateCurrentDate();
}, 1000);

// Function to open the full-page navigation overlay
function openFullPageNav() {
  const overlay = getElement('full-page-nav');
  overlay.classList.remove('hidden');
}

// Function to close the full-page navigation overlay
function closeFullPageNav() {
  const overlay = getElement('full-page-nav');
  overlay.classList.add('hidden');
}

// Function to update the profile image in the full-page navigation overlay
function updateProfileImage() {
  const profileImageOverlay = getElement('profile-image-overlay');
  const profileImage = getElement('profile-image');
  profileImageOverlay.src = profileImage.src;
}

// Function to type motivational text with a typing effect
const typingTextElement = getElement('typing-text');
const motivationalCopy = "Keep smiling, and stay healthy!";
let charIndex = 0;

function typeMotivationalText() {
  if (charIndex < motivationalCopy.length) {
      typingTextElement.textContent += motivationalCopy.charAt(charIndex);
      charIndex++;
      setTimeout(typeMotivationalText, 50);
  }
}

// Call the typing function when the page loads
window.onload = typeMotivationalText;

// Function to save changes to the backend when the user updates their profile
function saveProfileChanges() {
  const newName = getElement('edit-name').value;
  const newAge = getElement('edit-age').value;
  const newGender = getElement('edit-gender').value;

  // Add code to save changes to the backend
  // For example, you can use Firebase to update the user's profile information
}

// Event Listener for Save Profile Button
getElement('save-profile-btn').addEventListener('click', saveProfileChanges);
