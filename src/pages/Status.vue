<template>
    <div class="status">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNoteCount}}</td>
                </tr>
                <tr>
                    <td>Number of Charactor (of all notes)</td>
                    <td>{{ storeNotes.totalCharactorsCount }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" maxlength="50" placeholder="Do you love this app" class="input" v-auto-focus v-model="loveNote">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutoFocus } from '@/directives/vAutoFocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const loveNote = ref('')
useWatchCharacters(loveNote, 50)

</script>
