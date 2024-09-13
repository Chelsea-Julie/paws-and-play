<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Paws&Play &copy;  <span class="shadow">{{ cYear }} </span></p>
        </div>
    </footer>
</template>


<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    },
}
</script>