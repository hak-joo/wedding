<style lang="scss">
  .root {
    &-wrapper {
      width: 100%;
      margin: 0 auto;
      background-color: #ccc;
    }
    &-container {
      position: relative;
      width: fit-content;
      margin: 0 auto;
      background-color: white;
      overflow-x: hidden;
    }
  }
</style>

<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
</script>

<main class="root-wrapper" id="wrapper">
  <div class="root-container" id="cont">
    <Router {routes} />
  </div>
</main>
