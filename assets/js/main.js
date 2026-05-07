document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
  
    function setTheme(theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
      if (themeIcon) {
          if (theme === 'dark') {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
          } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
          }
      }
    }
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }

    // RTL Toggle Logic
    const rtlToggle = document.getElementById('rtlToggle');
    
    function setDirection(dir) {
        document.documentElement.setAttribute('dir', dir);
        localStorage.setItem('dir', dir);
        if (dir === 'rtl') {
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('lang', 'en');
        }
    }

    const savedDir = localStorage.getItem('dir') || 'ltr';
    setDirection(savedDir);

    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            setDirection(newDir);
        });
    }
  
    // Back to top button logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.style.display = 'flex';
        } else {
          backToTopBtn.style.display = 'none';
        }
      });
  
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    // Password Visibility Toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        });
    });
});



