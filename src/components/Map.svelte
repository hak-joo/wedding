<style lang="scss">
  .map {
    &-wrapper {
      padding: 30px 0;
      position: relative;
    }
    &-container {
      width: 405px;
      height: 400px;
    }
    &-button {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 56px;
      height: 30px;
      color: white;
      border-radius: 5px;
      background-color: #bf8dcf99;

      font-family: 'Nanum Myeongjo', serif;
      font-size: 13px;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: #bf8dcf;
      }
    }
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte'

  let map: naver.maps.Map

  const mapToWeddingHall = () => {
    const navermaps = window.naver.maps
    map.setCenter(new navermaps.LatLng(37.5525301, 126.937759))
    map.setZoom(16)
  }

  onMount(() => {
    const navermaps = window.naver.maps

    map = new navermaps.Map('map', {
      center: new navermaps.LatLng(37.5525301, 126.937759),
      zoom: 16
      // draggable: active,
      // zoomControl: active
    })

    const marker = new navermaps.Marker({
      position: new navermaps.LatLng(37.5525301, 126.937759),
      map: map
    })
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="map-wrapper">
  <div id="map" class="map-container" />
  <button class="map-button" on:click={mapToWeddingHall}>예식장</button>
</div>
