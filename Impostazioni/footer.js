// Costruisce il footer. Tutto dentro una funzione, per non andare in conflitto con header.js.
(function () {

    // Cartella principale del sito: lo script sta in "Impostazioni", quindi si sale di UNA cartella ('..').
    // Va letta SUBITO.
    const basePath = new URL('..', document.currentScript.src).href;

    document.addEventListener("DOMContentLoaded", () => {

        const footerHTML = `
            <footer>
                <div class="footer-contenuto">

                    <div class="footer-blocco">
                        <h3>Parrocchia di Mattarello</h3>
                        <a href="https://www.google.com/maps/place/Oratorio+Di+Mattarello+-+Parrocchia+San+Leonardo/@46.0067108,11.126459,17z/data=!3m1!4b1!4m6!3m5!1s0x478274f475999c93:0xc65966599e1ca087!8m2!3d46.0067108!4d11.1290339!16s%2Fg%2F11df7kzd2s" target="_blank" rel="noopener noreferrer">
                            <p>Via G. Poli, 7<br>38123 Trento (TN)</p>
                        </a>
                    </div>

                    <div class="footer-blocco">
                        <h3>Contatti</h3>
                        <p>Tel: <a href="tel:+390461945313">0461 945313</a></p>
                        <p><a href="mailto:mattarello@parrocchietn.it">mattarello@parrocchietn.it</a></p>
                    </div>

                    <div class="footer-blocco">
                        <h3>Link</h3>
                        <p><a href="${basePath}orarimesse/index.html">Orari Messe</a></p>
                        <p><a href="${basePath}avvisi/index.html">Avvisi</a></p>
                        <p><a href="${basePath}contatti/index.html">Contatti</a></p>
                    </div>

                </div>

                <p class="footer-copyright">&copy; <span id="anno"></span> Parrocchia di Mattarello</p>
            </footer>
        `;

        const placeholder = document.getElementById("footer-placeholder");
        if (!placeholder) return;

        placeholder.innerHTML = footerHTML;

        // Scrive l'anno corrente
        document.getElementById("anno").textContent = new Date().getFullYear();
    });

})();