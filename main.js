(function(){
  'use strict';

  var vm = new Vue({
    el:'#app',
    data:{
      newItem:'',
      todos:[{
        title:'Vue.Fesに行きたい',
        isDone:false
      },{
        title:'技術書典で本を買う',
        isDone:false
      },{
        title:'Google I/Oに行きたい',
        isDone:false
      }]
      // todos:[]
    },
    methods:{
      // addItem:function(){
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      //   this.newItem ="";
      // }
      addItem:function(){
        var item = {
          title:this.newItem,
          isDone:false
        };
        this.todos.push(item);
        this.newItem ="";//テキストボックスに値が残るので空文字を追加
      },
      deleteItem:function(index){
        if(confirm('are you sure?')){
          this.todos.splice(index, 1);
        }
      },
      purge:function(){
        if(!confirm('delete finished?')){
          return;
          }
        this.todos = this.todos.filter(function(todo){
          return !todo.isDone;
        });
    }
  },
  computed:{
    remaining:function(){
      var items =this.todos.filter(function(todo){
        return !todo.isDone;
      });
      return items.length;

    }
  }
  });
})();
