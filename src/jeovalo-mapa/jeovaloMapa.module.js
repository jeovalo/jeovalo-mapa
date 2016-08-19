(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('jeovaloMapa.config', [])
      .value('jeovaloMapa.config', {
          debug: true
      });

  // Modules
  angular.module('jeovaloMapa.directives', []);
  angular.module('jeovaloMapa.filters', []);
  angular.module('jeovaloMapa.services', []);
  angular.module('jeovaloMapa',
      [
          'jeovaloMapa.config',
          'jeovaloMapa.directives',
          'jeovaloMapa.filters',
          'jeovaloMapa.services'
      ]);

})(angular);
