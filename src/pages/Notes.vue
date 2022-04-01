<template>
    <div class="notes">
        <AddEditNote v-model="newNote" ref="addEditNoteRef">
            <template #buttons> 
                <button class="button is-link has-background-success"
                    @click="addNote"
                    :disabled="!newNote"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <Notes  v-for="note in storeNotes.notes" :key="note.id" :note="note" />
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Notes from '@/components/Notes/Notes.vue'
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    import { useStoreNotes } from '@/stores/storeNotes'
    
    const storeNotes = useStoreNotes()

    const newNote = ref('')
    const addEditNoteRef = ref(null)

    const addNote = (e) => {
        storeNotes.addNewNote(newNote.value)
        newNote.value = ""
        addEditNoteRef.value.focusTextArea()
    }
</script>
