<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
                <div class="control">
                    <textarea class="textarea" v-model="newNote" 
                    ref="newNoteRef" placeholder="New Note" />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success"
                        @click="addNote"
                        :disabled="!newNote"
                    >
                        Add New Note
                    </button>
                </div>
            </div>
        </div>

        <Notes  v-for="note in notes" :key="note.id" :note="note" @delete="deleteNote" />

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Notes from '@/components/Notes/Notes.vue'

    const data = [
        {
            id: 'id1',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum similique odio natus quasi iusto asperiores in mollitia suscipit beatae laboriosam quidem optio ipsam, maxime, corporis reiciendis ullam ex magni iste!'
        },
        {
            id: 'id2',
            content: 'Content from ID2'
        }
    ]

    const notes = ref(data)
    const newNote = ref('')
    const newNoteRef = ref(null)

    const addNote = (e) => {
        let currentDate = new Date().getTime()
        let id = currentDate.toString()

        let note = {
            id: id,
            content: newNote.value
        }
        
        notes.value = [note, ...notes.value]
        newNote.value = ""
        newNoteRef.value.focus()
    }

    const deleteNote = (idToDelete) => {
        notes.value = notes.value.filter((note) => {
            return note.id !== idToDelete
        })
    }

</script>
