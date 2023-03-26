<template>
  <div>
    <app-header />
    <slot />
  </div>
</template>

<script>
import appHeader from "~~/components/appHeader.vue"

export default {
    name: 'default',
    components: {
        appHeader
    }

    
}
</script>

<style>
body {
    background: #D3D3D3;
}
</style>
