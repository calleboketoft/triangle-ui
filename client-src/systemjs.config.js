System.config({
    baseURL: '/',
    warnings: true,
    map: {
        '@angular': '/node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        'client-src': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'triangle': { defaultExtension: 'js', main: 'index.js' },
        '@angular/common': { defaultExtension: 'js', main: 'index.js' },
        '@angular/compiler': { defaultExtension: 'js', main: 'index.js' },
        '@angular/core': { defaultExtension: 'js', main: 'index.js' },
        '@angular/forms': { defaultExtension: 'js', main: 'index.js' },
        '@angular/http': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js', main: 'index.js' },
        '@angular/router': { defaultExtension: 'js', main: 'index.js' },
        '@angular/testing': { defaultExtension: 'js', main: 'index.js' },
        '@angular/upgrade': { defaultExtension: 'js', main: 'index.js' }
    }
});
//# sourceMappingURL=systemjs.config.js.map