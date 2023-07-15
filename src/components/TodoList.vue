<template>
<div>
    <h2 id="titreListe">Liste</h2>
    <br/>
    
    <div id="tableauListe">
        <h3>Tâches effectuées : {{taskDone}}        Tâches non-effectuées : {{taskNotDone}}</h3>
        <table>
          <thead>
            <tr>
                <th id="colTitre">Titre</th>
                <th id="colDesc">Description</th>
                <th id="colEtat">Etat</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="t in taches" :key="t.titre">
                  <td>{{t.titre}}</td>
                  <td>{{t.description}}</td>
                  <td v-if="t.fini === true"><button v-on:click="switchDone(t)" id="btnSwitchDone">&#x2705;</button></td>
                  <td v-else><button v-on:click="switchDone(t)" id="btnSwitchDone">&#x274C;</button></td>
              </tr>
          </tbody>
            
        </table>
    </div>
</div>
</template>
<script>
export default {
    name : 'TodoList',
    props : {
        taches : Array
    },
    data : function (){
        return {

        }
    },
    methods:{
        switchDone(elm){
            if(elm.fini){
                elm.fini = false;
            }else{
                elm.fini = true;
            }
        }
    },
    computed:{
        taskDone(){
            let cmpt = 0;
            for(let i = 0; i< this.taches.length; i++){
                if(this.taches[i].fini === true){
                    cmpt++;
                }
            }
            return cmpt;
        },
        taskNotDone(){
            let cmpt2 = 0;
            for(let i = 0; i< this.taches.length; i++){
                if(this.taches[i].fini === false){
                    cmpt2++;
                }
            }
            return cmpt2;
        }
    }
}
</script>

<style scoped>
#tableauListe{
    border-top: solid blue 2px ;
    padding-top: 25px;
    padding-left: 10%;
    padding-right: 10%;
    margin: 0;
}
#tableauListe > table{
    width: 100%;
}
#tableauListe thead > tr > th{
    border-bottom: solid red 2px;
}
#colTitre{
    width: 30%;
}
#colDesc{
    width: 60%;
}
#colEtat{
    width: 10%;
}

#titreListe{
    text-align: left;
    text-decoration: none;
    color: blue;

}

#btnSwitchDone{
    text-decoration: none;
    background: none;
    border: none;
}


</style>