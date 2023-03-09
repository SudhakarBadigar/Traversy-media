const todos = [
    {
        id:1,
        text:'learn the basics',
        iscompleted:true
    },

    {
        id:2,
        text:'code the programs',
        iscompleted: false,
    },

    {
        id:3,
        text:'finish the project',
        iscompleted:false
    }
];

const todojson = JSON.stringify(todos);
console.log(todojson);

//foreach 
const todoforeach = todos.map(function(todo){
    return todo.text

});
console.log(todoforeach);

//