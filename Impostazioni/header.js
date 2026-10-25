// Costruisce il banner (nome, logo, menu laterale) e fa funzionare il menu.
// Tutto dentro una funzione: così "basePath" non entra in conflitto con gli altri script.
(function () {

    // Cartella principale del sito: lo script sta in "Impostazioni", quindi si sale di UNA cartella ('..').
    // Va letta SUBITO.
    const basePath = new URL('..', document.currentScript.src).href;

    document.addEventListener("DOMContentLoaded", () => {

        const headerHTML = `
            <header>
                <a href="${basePath}index.html" class="nome">Parrocchia di Mattarello</a>

                <a href="${basePath}index.html" class="logo-link">
                    <img class="logo-img" src="${basePath}immagini/logo.jpg" alt="Logo della Parrocchia di Mattarello">
                </a>

                <button class="menu-btn" id="menu-btn" aria-label="Apri il menu" aria-expanded="false">&#9776;</button>

                <nav id="menu-laterale">
                    <a href="${basePath}index.html">Home</a>
                    <a href="${basePath}orarimesse/index.html">Orari Messe</a>
                    <a href="${basePath}avvisi/index.html">Avvisi</a>
                    <a href="${basePath}contatti/index.html">Contatti</a>

                    <details name="menu">
                        <summary>Gruppi</summary>
                        <div class="sottomenu">
                            <a href="${basePath}gruppi/gruppi.html">Tutti i gruppi</a>
                            <a href="${basePath}gruppi/gruppogiovani.html">Gruppo Giovani</a>
                            <a href="${basePath}gruppi/chierichetti.html">Chierichetti</a>
                        </div>
                    </details>
                </nav>
            </header>
        `;

        const placeholder = document.getElementById("header-placeholder");
        if (!placeholder) return;          // se la pagina non ha il segnaposto, esce senza errori

        placeholder.innerHTML = headerHTML;

        // Apertura e chiusura del menu
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu-laterale');

        function apriChiudi(apri) {
            menu.classList.toggle('aperto', apri);
            btn.setAttribute('aria-expanded', apri);
            btn.textContent = apri ? '\u2715' : '\u2630';
        }

        btn.addEventListener('click', () => apriChiudi(!menu.classList.contains('aperto')));
        document.addEventListener('keydown', e => { if (e.key === 'Escape') apriChiudi(false); });
    });

})();