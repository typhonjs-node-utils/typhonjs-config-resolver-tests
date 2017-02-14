/**
 * Defines all tests to run against 'config:resolver:resolve' event binding of ConfigResolver.
 *
 * title - The title displayed for the test.
 * config - The config to resolve.
 * verify - The JSON string of the result compared against the output of the resolver.
 * removeExtends - File based tests have full file paths in the `extends` array, so they must be removed to test.
 *
 * @type {*[]}
 */
module.exports = [
   {
      // This category tests `extends` field for config extensions with file and NPM modules.
      title: 'Extends',
      tests:
      [
         {
            title: 'basic resolve (file)',
            config: { 'extends': './node_modules/typhonjs-config-resolver-tests/config/basic.json' },
            verify: '{"basic1":"basic1","basic2":"basic2"}',
            removeExtends: 1
         },

         {
            title: 'basic resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/basic.json' },
            verify: '{"basic1":"basic1","basic2":"basic2","extends":["typhonjs-config-resolver-tests/config/basic.json"]}'
         },

         {
            title: 'basic extends resolve (file)',
            config: { 'extends': ['./node_modules/typhonjs-config-resolver-tests/config/extends/extends-basic.json'] },
            verify: '{"extends-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-basic"},{"name":"plugin-level0","target":"basic-target"}],"extends-level-1":true,"extends-level-0":true,"basic-extends":"basic-extends","extends-basic":true}',
            removeExtends: 4
         },

         {
            title: 'basic array extends resolve (file)',
            config: { 'extends': './node_modules/typhonjs-config-resolver-tests/config/extends/extends-basic-array.json' },
            verify: '{"basic1":"basic1","basic2":"basic2","extends-level-2":true,"plugins":[{"name":"plugin-level0","target":"basic-target"},{"name":"plugin-basic"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-level2","target":"level1-target"}],"extends-level-1":true,"extends-level-0":true,"basic-extends":"basic-extends","extends-basic":true,"extends-basic-array":true}',
            removeExtends: 6
         },

         {
            title: 'basic circular resolve (file)',
            config: { 'extends': './node_modules/typhonjs-config-resolver-tests/config/extends/extends-basic-circular-0.json' },
            verify: '{"extends-basic-circular-1":true,"plugins":[{"name":"plugin-basic-circular1"},{"name":"plugin-basic-circular0"}],"basic-circular":"basic-circular","extends-basic-circular-0":true}',
            removeExtends: 2
         },

         {
            title: 'basic extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-basic.json' },
            verify: '{"extends-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-basic"},{"name":"plugin-level0","target":"basic-target"}],"extends-level-1":true,"extends-level-0":true,"basic-extends":"basic-extends","extends-basic":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-basic.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-0.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-1.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-2.json"]}'
         },

         {
            title: 'basic array extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-basic-array.json' },
            verify: '{"basic1":"basic1","basic2":"basic2","extends-level-2":true,"plugins":[{"name":"plugin-level0","target":"basic-target"},{"name":"plugin-basic"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-level2","target":"level1-target"}],"extends-level-1":true,"extends-level-0":true,"basic-extends":"basic-extends","extends-basic":true,"extends-basic-array":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-basic-array.json","typhonjs-config-resolver-tests/config/extends/extends-basic.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-0.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-1.json","typhonjs-config-resolver-tests/config/extends/extends-basic-level-2.json","typhonjs-config-resolver-tests/config/basic.json"]}'
         },

         {
            title: 'basic circular extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-basic-circular-0.json' },
            verify: '{"extends-basic-circular-1":true,"plugins":[{"name":"plugin-basic-circular1"},{"name":"plugin-basic-circular0"}],"basic-circular":"basic-circular","extends-basic-circular-0":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-basic-circular-0.json","typhonjs-config-resolver-tests/config/extends/extends-basic-circular-1.json"]}'
         },

         {
            title: 'subdir extends resolve (file)',
            config: { 'extends': ['./node_modules/typhonjs-config-resolver-tests/config/extends/extends-subdir.json'] },
            verify: '{"extends-subdir-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subdir"},{"name":"plugin-subdir2"}],"extends-subdir-level-1":true,"extends-subdir-level-0":true,"extends-subdir":true}',
            removeExtends: 4
         },

         {
            title: 'subdir circular extends resolve (file)',
            config: { 'extends': ['./node_modules/typhonjs-config-resolver-tests/config/extends/extends-subdir-circular.json'] },
            verify: '{"extends-subdir-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subdir"},{"name":"plugin-subdir2"}],"extends-subdir-level-1":true,"extends-subdir-level-0":true,"extends-subdir":true}',
            removeExtends: 4
         },

         {
            title: 'subdir extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-subdir.json' },
            verify: '{"extends-subdir-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subdir"},{"name":"plugin-subdir2"}],"extends-subdir-level-1":true,"extends-subdir-level-0":true,"extends-subdir":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-subdir.json","typhonjs-config-resolver-tests/config/extends/level0/extends-subdir-level-0.json","typhonjs-config-resolver-tests/config/extends/level0/level1/extends-subdir-level-1.json","typhonjs-config-resolver-tests/config/extends/level0/level1/level2/extends-subdir-level-2.json"]}'
         },

         {
            title: 'subdir circular extends resolve (module)',
            config: { 'extends': ['typhonjs-config-resolver-tests/config/extends/extends-subdir-circular.json'] },
            verify: '{"extends-subdir-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subdir"},{"name":"plugin-subdir2"}],"extends-subdir-level-1":true,"extends-subdir-level-0":true,"extends-subdir":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-subdir-circular.json","typhonjs-config-resolver-tests/config/extends/level0/extends-subdir-level-0.json","typhonjs-config-resolver-tests/config/extends/level0/level1/extends-subdir-level-1.json","typhonjs-config-resolver-tests/config/extends/level0/level1/level2/extends-subdir-level-2.json"]}'
         },

         {
            title: 'subnpm extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-subnpm.json' },
            verify: '{"extends-subnpm-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subnpm"},{"name":"plugin-subnpm2"}],"extends-subnpm-level-1":true,"extends-subnpm-level-0":true,"extends-subnpm":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-subnpm.json","typhonjs-config-resolver-tests/config/extends/level0/extends-subnpm-level-0.json","typhonjs-config-resolver-tests/config/extends/level0/level1/extends-subnpm-level-1.json","typhonjs-config-resolver-tests/config/extends/level0/level1/level2/extends-subnpm-level-2.json"]}'
         },

         {
            title: 'subnpm circular extends resolve (module)',
            config: { 'extends': 'typhonjs-config-resolver-tests/config/extends/extends-subnpm-circular.json' },
            verify: '{"extends-subnpm-level-2":true,"plugins":[{"name":"plugin-level2","target":"level1-target"},{"name":"plugin-level0"},{"name":"plugin-level1","target":"level0-target"},{"name":"plugin-subnpm"},{"name":"plugin-subnpm2"}],"extends-subnpm-level-1":true,"extends-subnpm-level-0":true,"extends-subnpm":true,"extends":["typhonjs-config-resolver-tests/config/extends/extends-subnpm-circular.json","typhonjs-config-resolver-tests/config/extends/level0/extends-subnpm-circular-level-0.json","typhonjs-config-resolver-tests/config/extends/level0/level1/extends-subnpm-circular-level-1.json","typhonjs-config-resolver-tests/config/extends/level0/level1/level2/extends-subnpm-circular-level-2.json"]}'
         }
      ]
   }


];
