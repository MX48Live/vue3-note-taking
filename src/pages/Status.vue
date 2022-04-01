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
        <input type="text" placeholder="Do you love this app" class="input" v-auto-focus>
    </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutoFocus } from '@/directives/vAutoFocus'
const storeNotes = useStoreNotes()
</script>
