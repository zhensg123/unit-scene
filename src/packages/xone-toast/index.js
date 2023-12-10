import toast from "./xone-toast.vue"
import Vue from 'vue';

let ToastInst = Vue.extend(toast);
const Toast = function(options){
    const div = document.createElement('div')
    let tpl = new ToastInst().$mount(div);  // 2、创建实例，挂载到文档以后的地方
    document.body.appendChild(tpl.$el);     // 3、把创建的实例添加到body中
    setTimeout(function () {        // 4、延迟2.5秒后移除该提示
        document.body.removeChild(tpl.$el);
    }, 2500)
}


export default Toast


// const Message = function(options) {
//     if (Vue.prototype.$isServer) return;
//     options = options || {};
//     if (typeof options === 'string') {
//       options = {
//         message: options
//       };
//     }
//     let userOnClose = options.onClose;
//     let id = 'message_' + seed++;
  
//     options.onClose = function() {
//       Message.close(id, userOnClose);
//     };
//     instance = new MessageConstructor({
//       data: options
//     });
//     instance.id = id;
//     if (isVNode(instance.message)) {
//       instance.$slots.default = [instance.message];
//       instance.message = null;
//     }
//     instance.$mount();
//     document.body.appendChild(instance.$el);
//     let verticalOffset = options.offset || 20;
//     instances.forEach(item => {
//       verticalOffset += item.$el.offsetHeight + 16;
//     });
//     instance.verticalOffset = verticalOffset;
//     instance.visible = true;
//     instance.$el.style.zIndex = PopupManager.nextZIndex();
//     instances.push(instance);
//     return instance;
//   };