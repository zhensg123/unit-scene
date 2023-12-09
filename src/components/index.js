
export default function registerComponent(app) {
    const ctx = require.context('.', true, /\.vue$/)

    ctx
        .keys()
        .forEach(path => {

            const module = ctx(path)

            /**
             * 兼容 import export 和 require module.export 两种规范
             */
            const component = module.default || module
            app.component(component.name, component)
        })

}