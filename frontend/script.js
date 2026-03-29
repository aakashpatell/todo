// 1. Find the HTML elements Aakash built (The Puppet Strings)
const emailInput = document.getElementById('emailBox'); // Check Aakash's exact ID
const passwordInput = document.getElementById('passwordBox'); // Check Aakash's exact ID
const loginButton = document.getElementById('loginBtn'); // Check Aakash's exact ID

// 2. Listen for the user to click the Login button
loginButton.addEventListener('click', async (event) => {
    
    // Stop the page from reloading (default form behavior)
    event.preventDefault(); 

    // Grab the text the user typed
    const typedEmail = emailInput.value;
    const typedPassword = passwordInput.value;

    console.log("Attempting to log in with:", typedEmail);

    try {
        // 3. Drive the truck to the backend Warehouse
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: typedEmail, password: typedPassword })
        });

        // 4. Open the box the backend sent back
        const data = await response.json();

        if (response.ok) {
            // SUCCESS! The backend gave us the VIP Wristband (Token).
            // Let's put it in our pocket (localStorage) so we don't lose it.
            localStorage.setItem('userToken', data.token);
            
            alert("Login Successful!");
            
            // Redirect the user to the main Todo List page
            window.location.href = "dashboard.html"; // Adjust to Aakash's file name
        } else {
            // FAILURE! Wrong password or email.
            alert("Login Failed: " + data.error);
        }

    } catch (error) {
        console.error("The network truck crashed:", error);
        alert("Could not connect to the server.");
    }
});



function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
