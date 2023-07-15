<template>
<div id="Bloc1">
    <div>
        <h2 id="titreElement">Ajouter un élément</h2>
    </div>
    <form>
        <h4 id="titre"> Titre </h4>
        <input type="text" size="55" id="ititre" v-model="titre"/>
        <br/>
        <h4 id="description"> Description </h4>
         <textarea rows="1" cols="53" type="text" id="idescription"  v-model="description"/>
         <br/>
         <label id="done">Tache déjà réalisée ?</label>
         <input name="done" type="checkbox" v-model="fini">
         <br/>
         <button @click.prevent="add" >Ajouter</button>
         <br/>
    </form>
</div>
</template>
<script>
export default {
    name: 'AjouterTache',
    data  : function (){
        return {
            titre : '',
            description : '',
            fini : false
        }
    },
    methods : {
        add : function (){
         
            this.$emit('taskadded', {
                titre : this.titre,
                description : this.description,
                fini: this.fini
            } )
        }
    }
}
</script>

<style scoped>

</style>