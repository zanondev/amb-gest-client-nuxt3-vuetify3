<template>
  <div>
    <app-header />
    <slot />
  </div>
</template>

<script>
import appHeader from "~/components/AppHeader.vue"

export default {
    name: 'default',
    components: {
        appHeader
    }

    
}
</script>

<style>
body, html {
    background: #D3D3D3;
}

</style>
