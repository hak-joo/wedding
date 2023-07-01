<style lang="scss">
  $svgMask: '/assets/heart.svg';
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

      width: 30px;
      aspect-ratio: 1;
      -webkit-mask: url($svgMask);
      mask: url($svgMask);
      background-color: #bf8dcf99;

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
    map.setCenter(new navermaps.LatLng(37.2616553, 127.0334093))
    map.setZoom(16)
  }

  onMount(() => {
    const navermaps = window.naver.maps

    map = new navermaps.Map('map', {
      center: new navermaps.LatLng(37.2616553, 127.0334093),
      zoom: 16

    })

    const marker = new navermaps.Marker({
      position: new navermaps.LatLng(37.2616553, 127.0334093),
      map: map
    })
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="map-wrapper">
  <div id="map" class="map-container" />
  <button class="map-button" aria-label="center" on:click={mapToWeddingHall} />
</div>
