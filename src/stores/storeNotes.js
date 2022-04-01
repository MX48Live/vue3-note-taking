// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum similique odio natus quasi iusto asperiores in mollitia suscipit beatae laboriosam quidem optio ipsam, maxime, corporis reiciendis ullam ex magni iste!'
                },
                {
                    id: 'id2',
                    content: 'Content from ID2'
                }
            ]
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter((note) => (note.id === id))[0].content
            }
        },

        totalNoteCount: (state) => {
            return state.notes.length
        },

        totalCharactorsCount: (state) => {
            let count = 0;
            state.notes.forEach((note) => (
                count = count + note.content.length
            ))

            return count
        }
    },
    actions: {
        async addNewNote(newNote) {
            let currentDate = new Date().getTime()
            let id = currentDate.toString()

            let note = {
                id: id,
                content: newNote
            }
            try {
                this.notes = await [note, ...this.notes]
            } catch (error) {
                console.log(error)
            }
        },

        deleteNote(noteID) {
            this.notes = this.notes.filter((note) => {
                return note.id !== noteID
            })
        },

        updateNote({id, content}) {
            let index = this.notes.findIndex((note) => {
                return note.id === id
            })
            this.notes[index].content = content
        }
    }
})
