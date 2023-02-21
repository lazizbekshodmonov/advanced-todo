<template >
    <div >
        <input 
            :type="type" 
            :placeholder="placeholder" 
            autocomplete="true" 
            :value="modelValue" 
            @input="updateInput">

    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        modelValue: [String, Number]

    },
    emits: ['update:modelValue'],
    methods:{
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
    div {
        margin-bottom: 32px;
    }
    div input{
        width: 300px;
        height: 45px;
        background: #224957 !important;
        border-radius: 10px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        outline: none;
    }
    div input::placeholder{
        color: #FFFFFF;
    }
    div input:focus{
        border: none;
    }
</style>
