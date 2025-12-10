import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/humanoid-robotics-book/docs/',
    component: ComponentCreator('/humanoid-robotics-book/docs/', 'a4d'),
    routes: [
      {
        path: '/humanoid-robotics-book/docs/',
        component: ComponentCreator('/humanoid-robotics-book/docs/', 'd5c'),
        routes: [
          {
            path: '/humanoid-robotics-book/docs/',
            component: ComponentCreator('/humanoid-robotics-book/docs/', 'efd'),
            routes: [
              {
                path: '/humanoid-robotics-book/docs/module1/chapter1-what-is-physical-ai/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module1/chapter1-what-is-physical-ai/', 'b46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module1/chapter2-embodiment-perception-action/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module1/chapter2-embodiment-perception-action/', '5ba'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module1/chapter3-robotics-system-components/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module1/chapter3-robotics-system-components/', '51a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module1/chapter4-ai-models-in-physical-systems/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module1/chapter4-ai-models-in-physical-systems/', '816'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module2/chapter4-mechanical-design-principles/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module2/chapter4-mechanical-design-principles/', '119'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module2/chapter5-forward-inverse-kinematics/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module2/chapter5-forward-inverse-kinematics/', 'f01'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module2/chapter6-dynamics-motion-planning/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module2/chapter6-dynamics-motion-planning/', '329'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module3/chapter7-control-architectures/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module3/chapter7-control-architectures/', '2d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module3/chapter8-sensor-systems-perception/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module3/chapter8-sensor-systems-perception/', 'e18'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module3/chapter9-actuation-advanced-control/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module3/chapter9-actuation-advanced-control/', 'f32'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module4/chapter10-humanoid-locomotion/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module4/chapter10-humanoid-locomotion/', '529'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module4/chapter11-human-robot-interaction/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module4/chapter11-human-robot-interaction/', 'f3b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/humanoid-robotics-book/docs/module4/chapter12-future-trends-ethical-considerations/',
                component: ComponentCreator('/humanoid-robotics-book/docs/module4/chapter12-future-trends-ethical-considerations/', 'fbb'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/humanoid-robotics-book/',
    component: ComponentCreator('/humanoid-robotics-book/', '7d5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
