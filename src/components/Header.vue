<template>
    <div class="header">
        <div>
            <router-link to="/">illa d'amp</router-link>
        </div>
        <div>
            <router-link to="/escriptura">escriptura</router-link> |
            <router-link to="/rol">rol</router-link>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    align-items: flex-start;
    align-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
    justify-content: space-between;
    border-bottom: 1px solid lightGrey;
}

</style>