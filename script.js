// Función para cambiar entre modos oscuro/claro
        const themeToggle = document.getElementById('themeToggle');
        
        // Verificar preferencia del sistema
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Establecer tema inicial basado en preferencia del sistema
        if (prefersDarkScheme.matches) {
            document.body.classList.remove('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun">☀️</i>';
        } else {
            document.body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon">🌙</i>';
        }
        
        // Alternar entre modos al hacer clic
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            // Guardar preferencia en localStorage
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('lightMode', isLight);
            
            // Cambiar icono
            if (isLight) {
                themeToggle.innerHTML = '<i class="fas fa-moon">🌙</i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-sun">☀️</i>';
            }
        });
        
        // Verificar preferencia guardada al cargar
        document.addEventListener('DOMContentLoaded', () => {
            const lightMode = localStorage.getItem('lightMode') === 'true';
            if (lightMode) {
                document.body.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Efecto ripple para todos los enlaces
        document.querySelectorAll('.link, .social-icon, .theme-toggle').forEach(element => {
            element.addEventListener('click', function(e) {
                // Solo para el efecto visual, no interferir con la navegación
                if (this.tagName === 'A' && this.getAttribute('href') !== '#') {
                    return;
                }
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });