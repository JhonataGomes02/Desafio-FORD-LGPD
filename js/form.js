document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="submit"]');

    if (submitButton) {
        submitButton.addEventListener('mouseover', () => {
            submitButton.style.transform = 'scale(1.05)';
            submitButton.style.backgroundColor = '#00195a';
            submitButton.style.transition = 'all 0.3s ease';
        });

        submitButton.addEventListener('mouseout', () => {
            submitButton.style.transform = 'scale(1)';
            submitButton.style.backgroundColor = '';
        });
    }
});

function Post(form) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Dados do formulário a serem enviados:", data);
    alert("Formulário enviado com sucesso! (Verifique o console do navegador para ver os dados)");
    form.reset();
}