<template>
    <div class="edit-note">
    <AddEditNote ref="addEditNoteRef" v-model="noteContent" label="Edit Note" bgColor="link" placeholderText="Edit Note">
        <template #buttons> 
            <button class="button is-link is-light mr-2" @click="$router.back()">
                Cancel
            </button>
            <button class="button is-link has-background-link"
            :disabled="!noteContent"
            @click="handleSave"
            >
                Save Note
            </button>
        </template>
    </AddEditNote>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useStoreNotes } from '../stores/storeNotes';
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    const storeNotes = useStoreNotes()
    const noteContent = ref('')

    const route = useRoute()
    const router = useRouter()

    noteContent.value = storeNotes.getNoteContent(route.params.id)

    const handleSave = () => {
        const payload = {
            id: route.params.id,
            content: noteContent.value
        }
        storeNotes.updateNote(payload)
        router.push('/')
    }
</script>
