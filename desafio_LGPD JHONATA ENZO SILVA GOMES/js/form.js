document.addEventListener('DOMContentLoaded', () => {
    validateLGPD();

    const submitButton = document.getElementById('btn-enviar');

    if (submitButton) {
        submitButton.addEventListener('mouseover', () => {
            if (!submitButton.disabled) {
                submitButton.style.transform = 'scale(1.05)';
                submitButton.style.backgroundColor = '#00195a';
                submitButton.style.transition = 'all 0.3s ease';
            }
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
    alert("Formulário enviado com sucesso! (Verifique o console)");
    form.reset(); 
    validateLGPD(); 
}

function validateLGPD() {
    const consentCheckbox = document.getElementById('lgpd_consent');
    const submitButton = document.getElementById('btn-enviar');

    if (consentCheckbox && submitButton) {
        submitButton.disabled = !consentCheckbox.checked;
    }
}