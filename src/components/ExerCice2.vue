<template>
    <h1>Exercie 2</h1>
    <nav>
        <router-link to="/groupeA">Groupe A</router-link>
        <router-link to="/groupeB">Groupe B</router-link>
        <router-link to="/groupeAB">Groupe AB</router-link>
    </nav>
</template>

<script>
    import { reactive } from 'vue'

    export const etudiants = reactive ([
                    {nom: "Dupont", note : 12, groupe: "A"},
                    {nom: "Aubin", note : 8, groupe: "B"},
                    {nom: "GUIRAS", note : 14, groupe: "AB"},
                    {nom: "Zouhour", note : 9, groupe: "AB"},
                    {nom: "François", note : 14, groupe: "B"},
                    {nom: "Martin", note : 9, groupe: "A"}
                    ])
    

    export default{
        name:'Exercice2Main',
        emits:['etudiants'],
        data(){
            let etudiants =  [
                    {nom: "Dupont", note : 12, groupe: "A"},
                    {nom: "Aubin", note : 8, groupe: "B"},
                    {nom: "GUIRAS", note : 14, groupe: "AB"},
                    {nom: "Zouhour", note : 9, groupe: "AB"},
                    {nom: "François", note : 14, groupe: "B"},
                    {nom: "Martin", note : 9, groupe: "A"}
                    ];
            let sommeNotes = 0;
            let compteur = 0;

            for (let i = 0; i < etudiants.length; i++){
                sommeNotes += etudiants[i].note;
                compteur++;
            }

            let moyenne = (sommeNotes / compteur);

            return {
            etudiants,
            moyenne
        }
        }
        
    }
</script>


<style scoped>

</style>