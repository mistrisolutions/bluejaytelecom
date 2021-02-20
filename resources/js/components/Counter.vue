<template>
    <div>
        {{ this.value }}
    </div>
</template>
<script>
export default {
    props: {
        end: Number,
        duration: Number
    },
    data() {
        return {
            value: 0
        };
    },
    mounted() {
        this.counter();
    },
    methods: {
        counter() {
            if (this.end != 0) {
                let interval = setInterval(() => {
                    if (this.value > this.end - 2) {
                        clearInterval(interval);
                    }
                    this.value += 1;
                }, this.duration);
            }
        },
    }
};
</script>
