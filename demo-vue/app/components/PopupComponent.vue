<template>
  <StackLayout>
    <Label
      v-for="i in 5"
      :key="i"
      :text="`Hello Popup! ${i}`"
      color="white"
      fontSize="24"
      @tap="$popup.close(i)"
    />
  </StackLayout>
</template>