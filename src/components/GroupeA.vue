<template>
  <div>
      <h1>Exercie 2</h1>
      <nav>
        <router-link to="/groupeA">Groupe A</router-link>
        <router-link to="/groupeB">Groupe B</router-link>
        <router-link to="/groupeAB">Groupe AB</router-link>
    </nav>
       <div class="containerPrincipal">
        <div>
            <table class="tableauEtudiants">
                <tr>
                    <th>ID etudiant </th>
                    <th>Nom</th>
                    <th>Note</th>
                </tr>
                <tr v-for="(etudiant, index) in etudiants" :key="etudiant.nom">
                    <td v-if="etudiant.groupe === 'A'">{{index}}</td>
                    <td v-if="etudiant.groupe === 'A'">{{etudiant.nom}}</td>
                    <td v-if="etudiant.groupe === 'A'">{{etudiant.note}}</td>
                </tr>
            </table>
        </div>
         <div class="rajoutEtudiant">
            <form>
                <div>
                    <label for="nom">Nom :</label>
                    <input v-model="nom" type="text" name="nom" id="nom" placeholder="Nom">
                </div>
                <br>
                <div>
                    <label for="groupe">Groupe :</label>
                    <select v-model="groupe" name="note" id="note">
                        <option value="A" selected="selected">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                </div>
                <br>
                <div>
                    <label for="note">Note :</label>
                    <input v-model="note" type="number" name="note" placeholder="Note" min="0" max="20">
                </div>
                <br>
                <div>
                    <button type="button" v-on:click="ajouterEtudiant()">Ajouter etudiant</button>
                </div>                
            </form>
        </div>
    </div>
        <h4>Moyenne du groupe A : {{moyenneGroupe}}</h4>
        <h4>Moyenne des étudiants : {{moyenneEtudiants}}</h4>
        <h4>Note max de ce groupe : {{noteMaxGroupe}} , de tous : {{noteMaxEtudiants}}</h4>
  </div>
</template>

<script>
import {etudiants} from  '@/components/ExerCice2.vue'

export default {
    name: 'GroupeEtudiantsB',
    data () {
        return{
            etudiants,
            nom : '',
            note : '',
            groupe : ''
        }
        
    },
    methods:{
        ajouterEtudiant(){
            if(!this.nom || !this.note || !this.note){
                alert("Veuillez renseigner tous les nom !")
                return 
            }
            const nouvelEtudiant = {
                'id' : this.etudiants.length,
                'groupe' : this.groupe,
                'nom' : this.nom,
                'note' : this.note
            }
            this.etudiants.push(nouvelEtudiant);
            this.nom = '';
            this.note = '';
            this.groupe = '';
        }
    },
    computed:{
        moyenneGroupe(){
            let sommeNotesGroupe = 0; 
            let compteur = 0;
        
            for(let i = 0; i < this.etudiants.length; i++){
                if(this.etudiants[i].groupe === 'A'){
                    compteur++;
                    sommeNotesGroupe += this.etudiants[i].note;
                }
            }
            return sommeNotesGroupe / compteur;
        },
        moyenneEtudiants(){
            let sommeNotes = 0; 
            let compteur = 0;
        
            for(let i = 0; i < this.etudiants.length; i++){
                compteur++;
                sommeNotes += this.etudiants[i].note;
                
            }
            return sommeNotes / compteur;
        },
        noteMaxGroupe(){
            let noteMaxTemp = 0;

            for(let i = 0; i < this.etudiants.length; i++){
                if (this.etudiants[i].note > noteMaxTemp && this.etudiants[i].groupe === 'A'){
                    noteMaxTemp = this.etudiants[i].note;
                }
            }
            return noteMaxTemp;
        },
        noteMaxEtudiants(){
            let noteMaxTemp = 0;

            for(let i = 0; i < this.etudiants.length; i++){
                if (this.etudiants[i].note > noteMaxTemp){
                    noteMaxTemp = this.etudiants[i].note;
                }
            }
            return noteMaxTemp;
        }
    }
}
</script>

<style>
#tableauEleves{
    width: 60%;
    margin: auto;
    margin-top: 30px;
}

#tableauEleves 

#tableauEleves tr td{
    border-bottom: solid palevioletred 1px;
    border-right: solid grey 1px;
}

.tableID{
    width:10%;
    border-left: solid grey 1px;
}

.tableNom{

}
</style>