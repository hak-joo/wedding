<style lang="scss">
  .opening {
    &-container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff9ee0;
    }
    &-letter {
      font-size: 1.5vw;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
</style>

<script>
  import { fade, fly } from 'svelte/transition'
  import { onMount, onDestroy } from 'svelte'

  export let show = true
  export let toggle = () => {}

  /**
   * @type {HTMLDivElement}
   */
  let textWrapper

  const text = 'ㅎㅅㅎ ㅇㅅㅇ 결혼합니다.'
  let countdown = text.length

  let now = Date.now()
  let end = now + countdown * 1000

  $: count = Math.round((end - now) / 1000)

  const updateTimer = () => {
    now = Date.now()
  }

  let interval = setInterval(updateTimer, 1)
  $: if (count === 0) clearInterval(interval)

  onMount(() => {
    now = Date.now()
    end = now + count * 1000
    setTimeout(() => toggle(), 4000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

{#if show}
  <div bind:this={textWrapper} class="opening-container" transition:fade>
    {#each text as letter, index}
      {#if index <= countdown - count}
        <span transition:fly class="opening-letter">
          {letter}
        </span>
      {/if}
    {/each}
  </div>
{/if}
