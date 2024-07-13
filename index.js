


document.getElementById('profile-image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully.');
});
// courses-----------------------------------------------------------------

document.getElementById('profile-image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully.');
});
// feedback___________________________
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Feedback submitted successfully.');
});
// change password
document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password updated successfully.');
});
