<template>
<div class="menu-wrap bacground-green">
    <Info />
  <ListSocialMedia />
</div>

</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import ListSocialMedia from "./components/ListSocialMedia.vue";
import Info from "./components/Info.vue";
@Options({
  components: {
    Info,
    ListSocialMedia,
  },
})
export default class Menu extends Vue {}

</script>

<style>
.bacground-green{
  background-color: rgb(99, 192, 192);
}
</style>