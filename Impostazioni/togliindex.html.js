(function () {
  const path = window.location.pathname;

  if (/\/index\.html$/i.test(path)) {
    const newPath = path.replace(/index\.html$/i, '');

    window.history.replaceState(
      window.history.state,
      '',
      newPath + window.location.search + window.location.hash
    );
  }
})();
