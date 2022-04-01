<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalRef">
            <header class="modal-card-head">
            <p class="modal-card-title">Delete Note ?</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                Are you sure, you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
            <button class="button" @click="closeModal">Cancel</button>
            <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes'
const storeNotes = useStoreNotes()

const modalRef = ref(null)
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

const closeModal = () => {
    emit('update:modelValue', false)
}

onClickOutside(modalRef, (event) => { emit('update:modelValue', false) })

const handleKeyboard = (e) => {
    console.log('test')
    if (e.key === "Escape") {
        closeModal()
    }
}

const handleDelete = (noteId) => {
    
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})
</script>
