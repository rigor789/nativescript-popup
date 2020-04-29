<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label
        class="message"
        horizontalAlignment="middle"
        :text="msg"
        col="0"
        row="0"
        @tap="showPopup"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { Label } from "@nativescript/core";
import PopupComponent from "./PopupComponent";

export default {
  data() {
    return {
      msg: "Hello World!",
    };
  },

  methods: {
    async showPopup(args) {
      const res = await this.$popup.show(args.object, PopupComponent, {
        width: 200,
        height: 200,
        backgroundColor: "#22543D",
        elevation: 20,
      });
      console.log(`Selected item from popup: ${res}`);
    },
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
