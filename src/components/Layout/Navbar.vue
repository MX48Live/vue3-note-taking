<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace" href="https://bulma.io">
                    NoteTaking 
                </div>

                <a 
                    role="button" 
                    class="navbar-burger" 
                    :class="{ 'is-active' : showMobileNav}" 
                    @click="handleMobileNav"
                    aria-label="menu" aria-expanded="false" 
                    ref="navbarBurgerRef"
                    data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : showMobileNav}" ref="navbarMenuRef">
                <div class="navbar-end">
                    <RouterLink @click="handleMobileNav" to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
                    <RouterLink @click="handleMobileNav" to="/stats" class="navbar-item"  active-class="is-active">Stats</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

const handleMobileNav = (e) => {
    e.preventDefault();
    showMobileNav.value = !showMobileNav.value
}

const showMobileNav = ref(false)
onClickOutside(navbarMenuRef, (event) => { showMobileNav.value = false }, { ignore: [navbarBurgerRef]})

</script>

<style scoped>
@media screen and (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
