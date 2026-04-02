document.addEventListener('DOMContentLoaded', () => {
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

    // Print functionality
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Initial update
    updatePreview();
});
