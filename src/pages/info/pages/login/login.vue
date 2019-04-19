<template>
    <div class="login">
        <h2>Info -> Login Page</h2>
        <h3>{{num}}</h3>
        <button @click="addNum">Add</button>
        <button @click="setNum">Set</button>
    </div>
</template>

<script>
export default {
    computed: {
        num() {
            return this.$store.state.num;
        }
    },
    methods: {
        addNum() {
            this.$store.commit("addNum");
        },
        setNum() {
            this.$store.commit("setNum", Math.random() * 999);
        }
    }
};
</script>
