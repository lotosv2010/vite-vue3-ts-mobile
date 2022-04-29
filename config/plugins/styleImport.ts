import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

export default function configStyleImport() {
  return createStyleImportPlugin({
    resolves: [VantResolve()],
    libs: [
      // {
      //   libraryName: 'element-plus',
      //   esModule: true,
      //   base: 'element-plus/theme-chalk/base.css',
      //   resolveStyle: (name) => {
      //     return `element-plus/theme-chalk/${name}.css`;
      //   },
      // },
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style/less`,
      },
    ],
  });
}
