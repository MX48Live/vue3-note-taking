<template>
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
        <label class="label has-text-white" v-if="label">{{ label }}</label>
        <div class="field">
                <div class="control">
                    <textarea 
                        v-model="modelValue"
                        @input="$emit('update:modelValue', modelValue)"
                        class="textarea" 
                        :placeholder="placeholderText" 
                        ref="textareaRef" 
                        v-auto-focus
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="buttons"/>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { vAutoFocus } from '@/directives/vAutoFocus'
    
    const textareaRef = ref(null)
    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: 'success'
        },
        placeholderText: {
            type: String,
            default: "Type Somthing..."
        },
        label: {
            type: String
        }
    })

    const focusTextArea = () => {
        textareaRef.value.focus()
    }
    defineExpose({
        focusTextArea
    })

</script>
