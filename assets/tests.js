'use strict';

define('district-tool/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/aframe/land-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/aframe/land-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/aframe/raw/colorize.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aframe/raw/colorize.js should pass ESLint\n\n15:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/aframe/raw/environment-ground-texture.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aframe/raw/environment-ground-texture.js should pass ESLint\n\n23:42 - \'THREE\' is not defined. (no-undef)');
  });

  QUnit.test('components/aframe/raw/fillable.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aframe/raw/fillable.js should pass ESLint\n\n1:8 - \'AFRAME\' is defined but never used. (no-unused-vars)\n64:17 - Unexpected console statement. (no-console)\n70:21 - Unexpected console statement. (no-console)\n83:21 - Unexpected console statement. (no-console)\n85:21 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/aframe/raw/intersection-spawn.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aframe/raw/intersection-spawn.js should pass ESLint\n\n85:21 - Unexpected console statement. (no-console)\n87:21 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/aframe/raw/lod-level.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/aframe/raw/lod-level.js should pass ESLint\n\n');
  });

  QUnit.test('components/aframe/raw/lod.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/aframe/raw/lod.js should pass ESLint\n\n1:8 - \'AFRAME\' is defined but never used. (no-unused-vars)\n5:36 - \'THREE\' is not defined. (no-undef)');
  });

  QUnit.test('components/aframe/raw/scene.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/aframe/raw/scene.js should pass ESLint\n\n');
  });

  QUnit.test('components/aframe/raw/snap.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/aframe/raw/snap.js should pass ESLint\n\n');
  });

  QUnit.test('components/aframe/raw/spawn-in-circle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/aframe/raw/spawn-in-circle.js should pass ESLint\n\n');
  });

  QUnit.test('components/transformer-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/transformer-grid.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/even.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/even.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/editor.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/editor.js should pass ESLint\n\n168:13 - Unexpected console statement. (no-console)\n172:13 - Unexpected console statement. (no-console)\n176:13 - Unexpected console statement. (no-console)\n180:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/preview.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/preview.js should pass ESLint\n\n');
  });
});
define('district-tool/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('district-tool/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'district-tool/tests/helpers/start-app', 'district-tool/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('district-tool/tests/helpers/resolver', ['exports', 'district-tool/resolver', 'district-tool/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('district-tool/tests/helpers/start-app', ['exports', 'district-tool/app', 'district-tool/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('district-tool/tests/integration/components/transformer-grid-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('transformer-grid', 'Integration | Component | transformer grid', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "rbuOMsPE",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"transformer-grid\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "aFZKTAah",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"transformer-grid\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('district-tool/tests/integration/helpers/even-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('even', 'helper:even', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "0QUOq+Ko",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"even\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('district-tool/tests/test-helper', ['district-tool/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('district-tool/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/transformer-grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/transformer-grid-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/even-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/even-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/editor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/preview-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/preview-test.js should pass ESLint\n\n');
  });
});
define('district-tool/tests/unit/routes/editor-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:editor', 'Unit | Route | editor', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('district-tool/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('district-tool/tests/unit/routes/preview-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:preview', 'Unit | Route | preview', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('district-tool/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
