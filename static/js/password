 const content = document.getElementById('content');
        const passwordKey = 'password';

        function hideContent() {
            content.style.display = 'none';
        }

        function showContent() {
            content.style.display = 'block';
        }

        function checkLocalStorage() {
            const storedPassword = localStorage.getItem(passwordKey);
            if (storedPassword === '1234') {
                showContent();
                return true;
            }
            return false;
        }

        function askForPassword() {
            const password = prompt('Enter the password:');
            if (password === '1234') {
                localStorage.setItem(passwordKey, password);
                showContent();
            } else {
                alert('Incorrect password. ');
            }
        }

        if (!checkLocalStorage()) {
            hideContent();
            askForPassword();
        } 
