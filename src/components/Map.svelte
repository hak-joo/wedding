<style lang="scss">
  .map {
    &-wrapper {
      padding: 30px 0;
    }
    &-container {
      width: 405px;
      height: 400px;
    }
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte'

  let map: naver.maps.Map

  onMount(() => {
    const navermaps = window.naver.maps

    map = new navermaps.Map('map', {
      center: new navermaps.LatLng(37.5525301, 126.937759),
      zoom: 16
    })

    const marker = new navermaps.Marker({
      position: new navermaps.LatLng(37.5525301, 126.937759),
      map: map
    })
  })
</script>

<div class="map-wrapper">
  <div id="map" class="map-container" />
</div>
