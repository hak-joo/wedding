<style lang="scss">
  .root {
    &-wrapper {
      width: 100%;
      margin: 0 auto;
      background-color: #657098;
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

<main class="root-wrapper">
  <div class="root-container">
    <Router {routes} />
  </div>
</main>
