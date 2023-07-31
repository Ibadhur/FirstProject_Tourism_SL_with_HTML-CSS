
function errorMessage(){
    alert("Not working");
};

function Print(){
    window.print();
};
var app=new Vue({
    el:"#ToDoList",
    data:{
        msg1:"",
        msg2:"",
        msg3:"",
        msg4:"",
        msg5:"",
        msg6:"",
        msg7:"",
        msg8:"",
        msg9:"",


    },

});

const search = document.querySelector('.search');
const Textbox_search = document.querySelector('.Textbox_search');
search.onclick = function(){
    search.classList.toggle('active')
}