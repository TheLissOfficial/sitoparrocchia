// Aggiunge a ogni pagina il CSS e l'icona della scheda (favicon).
// Charset e viewport NON sono qui: devono stare scritti direttamente nell'HTML.
(function () {

    // head.js sta nella cartella "Impostazioni": da qui ricaviamo due percorsi.
    // Vanno letti SUBITO: più tardi document.currentScript diventa null.
    const cartellaImpostazioni = new URL('.', document.currentScript.src).href;  // .../Impostazioni/
    const radiceSito = new URL('..', document.currentScript.src).href;           // cartella principale del sito

    const headHTML = `
        <link rel="icon" href="${radiceSito}immagini/logo.jpg">
        <link rel="stylesheet" href="${cartellaImpostazioni}style.css">
    `;

    document.head.insertAdjacentHTML('beforeend', headHTML);
})();