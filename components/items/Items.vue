<template>
  <div class="Items">
    <div class="MainItems">
      <div
        v-for="itemSet in limitArray(item, 6)"
        :key="itemSet.name"
        class="Item flx dir-r jst-c ialgn-c"
      >
        <Item :itemSet="itemSet" />
      </div>
    </div>
    <Ward :wardItem="item" />
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    limitArray(arr, length) {
      if (arr && arr.length) {
        if (length == -1) {
          return arr;
        }
        if (length > arr.length) {
          return arr;
        }
        return arr.slice(0, length);
      }
      return null;
    },
  },
};
</script>

