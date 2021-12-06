<template>
  <div class="new-page">
    <h1 class="new-page__title">New Page</h1>
    <p class="new-page__conent"></p>
    <p>Selected value is: {{ selected }}</p>
    <div style="width: 200px">
      <multiselect v-model="selected" :options="['1', '2', '3']" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.new-page {
  background-color: paleturquoise;
  height: 400px;

  &__title {
    font-size: 30px;
  }

  &__content {
    font-style: italic;
  }
}
</style>
