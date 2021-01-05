<template>
  <div class="home">
      <Menu/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Menu from '../components/Menu/Menu.vue'; // @ is an alias to /src

@Options({
  components: {
    Menu,
  },
})
export default class Home extends Vue {}
</script>
