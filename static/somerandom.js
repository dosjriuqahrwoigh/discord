 var password = window.localStorage.getItem('password');
        var validPassword = "nihalisanegro";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('Enter the password:');
            if (input === validPassword) {
                window.localStorage.setItem('password', input);
                document.body.style.display = 'block';
            } else {
                alert('Invalid password.');
                window.location.href = 'https://www.youtube.com/results?search_query=never+gonna+give+you+up';
            }
        }
        if (document.body.style.display !== 'block') {
            document.body.style.display = 'none';
        } 
