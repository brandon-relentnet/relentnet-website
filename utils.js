(function initializeTheme() {
    const ls = localStorage.getItem('relentnet-ls') || '{"state":{"theme":"mocha"}}';
    try {
        const parsedLS = JSON.parse(ls);
        const theme = parsedLS?.state?.theme || 'mocha';
        document.documentElement.classList.add(theme);
    } catch (e) {
        document.documentElement.classList.add('mocha');
    }
})();
