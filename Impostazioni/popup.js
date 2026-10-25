document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-automatico');
    const chiudiBtn = document.getElementById('chiudi-popup');

    // Se la pagina non contiene il popup, non fa nulla
    if (popup && chiudiBtn) {
        // Apre automaticamente il popup
        popup.showModal();

        // Chiude il popup al clic sul bottone
        chiudiBtn.addEventListener('click', () => {
            popup.close();
        });
    }
});