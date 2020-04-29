import { Popup } from "./";

export default function install(Vue: any) {
  function _findParentPopupEntry(vm: any) {
    if (!vm) {
      return false;
    }

    let entry = vm.$parent;
    while (entry && entry.$options.name !== "PopupEntry") {
      entry = entry.$parent;
    }

    return entry;
  }

  Vue.prototype.$popup = new Vue({
    methods: {
      show(anchor: any, component: any, options: any) {
        const popup = new Popup(options);
        const popupInstance = new Vue({
          name: "PopupEntry",
          render: (h: any) => h(component),
          methods: {
            closeCb(data) {
              popup.hidePopup(data);
            },
          },
        });

        return popup
          .showPopup(anchor, popupInstance.$mount().$el.nativeView)
          .then((data) => {
            popupInstance.$destroy();
            return data;
          });
      },
      close() {},
    },
  });

  Vue.mixin({
    created() {
      this.$popup.close = (data: any) => {
        const entry = _findParentPopupEntry(this);

        if (entry) {
          entry.closeCb(data);
        }
      };
    },
  });
}
