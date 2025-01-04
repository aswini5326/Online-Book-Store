
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Online Book Store initialized!");

    // Add event listeners for forms
    handleForms();

    // Highlight the active navigation link
    highlightActiveNav();

    // Specific behavior for the Add Book page
    if (document.querySelector('#addBookForm')) {
        handleAddBookForm();
    }

    // Specific behavior for Login and Register pages
    if (document.querySelector('#loginForm') || document.querySelector('#registerForm')) {
        handleAuthenticationForms();
    }
});

// Highlight the active navigation link
function highlightActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
}

// Handle form submissions for validation
function handleForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    input.nextElementSibling.textContent = `${input.name} is required`;
                } else {
                    input.classList.remove('error');
                    input.nextElementSibling.textContent = '';
                }
            });

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if invalid
                alert("Please fill out all required fields.");
            }
        });
    });
}

// Handle Add Book form specific logic
function handleAddBookForm() {
    const form = document.querySelector('#addBookForm');

    form.addEventListener('submit', (event) => {
        const title = form.querySelector('#title').value.trim();
        const price = form.querySelector('#price').value;

        if (price <= 0) {
            event.preventDefault();
            alert("Price must be greater than 0.");
        } else {
            alert(`Book "${title}" has been successfully added!`);
        }
    });
}

// Handle Login and Register forms
function handleAuthenticationForms() {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const username = loginForm.querySelector('#username').value.trim();
            const password = loginForm.querySelector('#password').value.trim();

            if (!username || !password) {
                event.preventDefault();
                alert("Both Username and Password are required to log in.");
            } else {
                alert(`Welcome, ${username}!`);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            const username = registerForm.querySelector('#username').value.trim();
            const password = registerForm.querySelector('#password').value.trim();

            if (!username || !password) {
                event.preventDefault();
                alert("Please fill out all required fields to register.");
            } else {
                alert(`User "${username}" has been successfully registered!`);
            }
        });
    }
}

// Confirmation on deleting a book
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-book')) {
        const confirmation = confirm("Are you sure you want to delete this book?");
        if (!confirmation) {
            event.preventDefault();
        }
    }
});

// Add interactivity to Orders page
function handleOrdersPage() {
    const orderButtons = document.querySelectorAll('.order-book');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bookTitle = button.getAttribute('data-title');
            alert(`You have successfully ordered "${bookTitle}"!`);
        });
    });
}
