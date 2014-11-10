
Package.describe({
  summary: "A simple tool to define/require modules with dependencies",
  version: "0.10.3",
  name: "termina1:define",
  git: "https://github.com/apendua/require.git"
});

Package.on_use(function (api) {
  if (api.versionsFrom) {
    api.versionsFrom("METEOR@0.9.0");
  }

  api.use(['deps', 'underscore', 'amd:manager@0.0.5'], ['client', 'server']);

  api.add_files([

    'require.js',

  ], ['client', 'server']);

  if (api.export !== undefined) {
    api.export('mdefine', ['client', 'server']);
    api.export('mrequire', ['client', 'server']);
  }
});


Package.on_test(function (api) {
  // ENVIRONMENT
  api.use(['amd:manager@0.0.5', 'tinytest'], ['client', 'server']);

  // TESTS
  api.add_files([
    'tests.js',
  ], 'client');
});
