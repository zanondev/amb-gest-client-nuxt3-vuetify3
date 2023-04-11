<template>
  <div>
    <navigation />
    <slot />
  </div>
</template>

<script>
import navigation from "~~/components/Navigation.vue"

export default {
    name: 'default',
    components: {
        navigation
    }

    
}
</script>

<style>
body, html {
    background: #D3D3D3;
}

</style>
