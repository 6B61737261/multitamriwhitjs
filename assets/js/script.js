
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault(); // جلوگیری از ارسال فرم

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {
            window.location.href = "admin-panel.html"; // مسیر پنل ادمین
        } else if (username === "user" && password === "1234") {
            window.location.href = "user-panel.html"; // مسیر پنل کاربر
        } else {
            alert("نام کاربری یا رمز عبور اشتباه است!");
        }
    });

