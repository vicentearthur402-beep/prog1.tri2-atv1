// Command Line Interface

// import { Item, TodoList } from "./core"
// import { Item as Item1, TodoList as TodoList1 } from "./core";

import TodoListClass, { Item } from "./core";

const todoList = new TodoListClass("todolist.json")

const params = process.argv;
const command = params[2];

if (command === "add") {
    const value = params[3];
    if (!value) {
        console.error("Valor do item é obrigatório");
        process.exit(1);
    }
    try {
    await todoList.addItem(new Item(value))
    } catch (error) {
        console.error("Erro ao adicionar itens ", error)
    }

    console.log(`Item "${value}" adicionado com sucesso`)
    process.exit(0);
}

 console.log(`Comando não reconhecido ${command}
    Comandos Disponíveis:
    - add <item>: Adiciona um item a lista
    - remove <index>: Remove um item da lista por índice
    - list: Lista os itens atuais
    
    
    `)