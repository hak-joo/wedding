<style lang="scss">
  .modal {
    &-wrapper {
      position: fixed;
      display: flex;
      z-index: 1000;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #657098;
    }
    &-container {
      display: flex;
      flex-direction: column;
      width: 440px;
      height: 100%;
      background-color: #ced2df;
    }
    &-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 60px;
      background-color: #e2e2e2;
    }
    &-slot {
      max-height: 100%;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    &-title {
      font-size: 1.6vw;
      font-family: 'Nanum Myeongjo', serif;
      &-close {
        position: absolute;
        right: 5%;
      }
    }
  }
</style>

<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import { portal } from 'svelte-portal'

  export let isShow: boolean = true
  export let title = ''
</script>

{#if isShow}
  <div class="modal-wrapper" use:portal={'#portal'} transition:fade>
    <div class="modal-container" transition:fly={{ y: 3000 }}>
      <div class="modal-header">
        <span class="modal-title">{title}</span>
        <button
          class="modal-title-close"
          on:click={() => {
            isShow = false
          }}>X</button
        >
      </div>
      <div class="modal-slot">
        <slot />
      </div>
    </div>
  </div>
{/if}
