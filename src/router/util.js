export function generateRoutes(files, type = '未知') {
    const routes = []
    files
      .keys()
      .forEach(path => {
  
        const module = files(path)
        /**
         * 兼容 import export 和 require module.export 两种规范
         */
        const component = module.default || module
        console.log(component, 'component')

        routes.push({
          path: `/${type}-${path.slice(2, path.length - 4).replace('/', '-')}`,
          component,
          name: component.name,
          meta: { title: path.slice(2, path.length - 4), icon: "el-icon-s-tools" },
        })
      })
      console.log(routes, 'routes')

    return routes.sort((a, b) => a.name && b.name && a.name.localeCompare(b.name, 'zh-Hans-CN', { sensitivity: 'base' }));
  
  }