<template>
  <div class="home">
    <h1>Exercice 1</h1>

    <AjouterTache @taskadded="ajouterTache" />
    <TodoList :taches="taches" />
  </div>
</template>

<script>
import TodoList from './TodoList.vue'
import AjouterTache from './AjouterTache.vue'
export default {
  name: 'HomeView',
  components: {
    TodoList,
    AjouterTache
  },
  data : function (){
    return {
      taches : [
        {
          titre : 'tp3',
          description : 'description TP3',
          fini : true
        },
         {
          titre : 'tp3.3',
          description : 'description TP3 ////',
          fini : false
        }
      ]
    }
  },
  methods : {
    ajouterTache :  function (task){
      this.taches.push(task);
    }
  }
}
</script>
