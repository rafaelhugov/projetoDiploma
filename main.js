document.addEventListener('DOMContentLoaded', () => {
    // Auth Logic
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const appWrapper = document.getElementById('app-wrapper');

    function checkAuth() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            document.body.classList.remove('login-pending');
            document.body.classList.add('logged-in');
            appWrapper.style.display = 'block';
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            // Simple demo credentials
            if (user === 'admin' && pass === 'ipgh2026') {
                localStorage.setItem('isLoggedIn', 'true');
                checkAuth();
            } else {
                loginError.style.display = 'block';
            }
        });
    }

    checkAuth();

    const inputs = {
        titulo: document.getElementById('titulo'),
        nome: document.getElementById('nome'),
        ato: document.getElementById('ato'),
        dataSessao: document.getElementById('data-sessao'),
        dataDiploma: document.getElementById('data-diploma'),
        presidente: document.getElementById('presidente'),
        secretaria: document.getElementById('secretaria')
    };

    const views = {
        titulo: document.getElementById('view-titulo'),
        nome: document.getElementById('view-nome'),
        ato: document.getElementById('view-ato'),
        dataSessao: document.getElementById('view-data-sessao'),
        dataDiploma: document.getElementById('view-data-diploma'),
        presidente: document.getElementById('view-presidente'),
        secretaria: document.getElementById('view-secretaria')
    };

    const printBtn = document.getElementById('print-btn');

    // Live update function
    function updatePreview() {
        views.titulo.textContent = inputs.titulo.value || 'Diploma';
        views.nome.textContent = inputs.nome.value || 'Nome do Homenageado';
        views.ato.textContent = inputs.ato.value || '___/____';
        views.dataSessao.textContent = inputs.dataSessao.value || '___ de ______ de ____';
        views.dataDiploma.textContent = inputs.dataDiploma.value || '___ de ______ de ____';
        views.presidente.textContent = inputs.presidente.value || 'Presidente';
        views.secretaria.textContent = inputs.secretaria.value || 'Secretária';
    }

    // Add event listeners to all inputs
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Logout logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.reload();
        });
    }

    // Print functionality
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Initial update
    updatePreview();
});
