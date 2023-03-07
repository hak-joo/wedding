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
  import { onMount } from 'svelte'

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  onMount(() => {
    const el = document.getElementById('cont')
    console.log(el)

    if (el) {
      setInterval(() => {
        const screenHeight = el.clientHeight
        const screenWidth = el.clientWidth

        const startLeft = getRandomNumber(0, screenWidth)

        const timeRun = getRandomNumber(17000, 20000)
        const opacityR = Math.random() * (1 - 0.2) + 0.2
        const sizeR = getRandomNumber(5, 20)
        const endLeft = getRandomNumber(startLeft - 100, startLeft + 100)
        const snow = document.createElement('span')
        snow.style.transform = `translate3d(${startLeft + 'px'}, 0px, 0px)`
        snow.style.top = '0px'
        snow.style.left = startLeft + 'px'
        snow.style.opacity = opacityR.toString()
        snow.style.fontSize = sizeR + 'px'
        snow.style.animationDuration = timeRun + 'px'
        snow.textContent = '♥'
        snow.classList.add('snow-heart')
        snow
          .animate(
            [
              {},
              {
                top: (screenHeight - sizeR).toString() + 'px',
                left: endLeft + 'px'
              }
            ],
            {
              duration: timeRun,
              easing: 'linear'
            }
          )
          .addEventListener('finish', e => {
            snow.remove()
          })
        el.append(snow)
      }, 500)
    }
  })
</script>

<main class="root-wrapper">
  <div class="root-container" id="cont">
    <Router {routes} />
  </div>
</main>
