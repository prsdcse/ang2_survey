/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'dist', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    '@angular2-material':         'node_modules/@angular2-material',
    'ng2-material':               'node_modules/ng2-material',
    'traceur':                    'node_modules/traceur'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    '@angular2-material/core': { main: 'core.js', defaultExtension: 'js' },
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js' },
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js' },
    '@angular2-material/card': { main: 'card.js', defaultExtension: 'js' },
    '@angular2-material/input': { main: 'input.js', defaultExtension: 'js' },
    'ng2-material': { main: 'index.js', defaultExtensions: 'js' },
    'traceur': {main: 'bin/traceur.js', defaulExtentions: 'js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
    'material',
  ];
    
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: (pkgName !== 'material' ? 'bundles/' : '') + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
