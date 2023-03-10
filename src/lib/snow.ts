const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const ActivateSnow = () => {
  const el = document.getElementById('cont')
  if (el) {
    setInterval(() => {
      const screenHeight = el.clientHeight
      const screenWidth = el.clientWidth

      const startLeft = getRandomNumber(0, screenWidth)

      const timeRun = getRandomNumber(40000, 50000)
      const opacityR = Math.random() * (1 - 0.2) + 0.2
      const sizeR = getRandomNumber(5, 20)
      const endLeft = getRandomNumber(startLeft - 100, startLeft + 100)
      const snow = document.createElement('span')
      snow.style.cssText = `
        -webkit-transform: translate3d(${startLeft + 'px'}, 0px, 0px);
        -moz-transform: translate3d(${startLeft + 'px'}, 0px, 0px);
        -o-transform: translate3d(${startLeft + 'px'}, 0px, 0px);
        -ms-transform: translate3d(${startLeft + 'px'}, 0px, 0px);
        tranfrom: translate3d(${startLeft + 'px'}, 0px, 0px);
        top: 0px;
        left: ${startLeft}px;
        opacity: ${opacityR.toString()};
        fontSize: ${sizeR}px;
        animationDuration: ${timeRun}px;
      `
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
        .addEventListener('finish', () => {
          el.removeChild(snow)
          snow.remove()
        })

      el.append(snow)
    }, 800)
  }
}
