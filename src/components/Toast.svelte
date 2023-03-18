<style>
  .toast-wrapper {
    --toastContainerTop: auto;
    --toastContainerBottom: 0.5rem;
    --toastWidth: 300px;

    --toastMinHeight: 2rem;
    --toastPadding: 0 0.5rem;
    --toastBarHeight: 0;

    --toastContainerLeft: calc(50% - 150px);

    font-size: 0.875rem;
    font-weight: 600;

    --toastBorderRadius: 2rem;
  }
</style>

<script lang="ts">
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
</script>

<div class="toast-wrapper">
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</div>
