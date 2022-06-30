const app = new Vue ({
    el: '#app',
    data: {
        todoList:[
            'Fadilatur Rohman',
        ],
        newTodo: ''
    },

    methods: {
        createTodo() {
            this.todoList.push(this.newTodo)
            this.newTodo = ''
        },
        deleteTodo(selectedIndex){
            this.todoList = this.todoList.filter((todo,index) => index !== selectedIndex)
        }
    },

    computed: {
        todoCount(){
            return this.todoList.length
        }
    }
})