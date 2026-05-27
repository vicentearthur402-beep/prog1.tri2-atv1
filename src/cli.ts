// Command Line Interface

// import { Item, TodoList } from "./core"
// import { Item as Item1, TodoList as TodoList1 } from "./core";

import TodoListClass, { Item } from "./core";

const todoList = new TodoListClass("todolist.json")

const params = process.argv;
const command = params[2];

// -------------------------------------------------------------------------------------------
// --- Comando List
// -------------------------------------------------------------------------------------------

if (command === "list") {
    const items = await todoList.getItems()
    console.log("Lista de itens:")
    items.forEach((item, index) => {
        console.log(`${index}: ${item.title}`)
    })
}


// -------------------------------------------------------------------------------------------
// --- Comando add
// -------------------------------------------------------------------------------------------

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



// -------------------------------------------------------------------------------------------
// --- Comando Remove
// -------------------------------------------------------------------------------------------

if (command === "remove") {
    const indexStr = params[3]
    if (!indexStr) {
        console.error("índice do item é obrigatório")
        process.exit(1)
    }

    const index = parseInt(indexStr)
    if (isNaN(index)) {
        console.error("Índice inválido, precisa ser um número inteiro")
        process.exit(1)

    }

    await todoList.removeItem(index)
    console.log(`Item no índice ${index} removido om sucesso`)
    process.exit(0);
}

// ----------------------------------------------------------------------------------------------------------------------------
// Comando Update
// ----------------------------------------------------------------------------------------------------------------------------

if (command == "update") {
    const indexStr = params[3];
    const value = params[4];





    if (!indexStr) {
        console.error("Insira um índice válido");
        process.exit(1);
    }

    const index = parseInt(indexStr)
    if (isNaN(index)) {
        console.error("Insira um índice válido! (numero inteiro)")
        process.exit(1)
    }



    if (!value) {
        console.error("Valor do item é obrigatório");
        process.exit(1);
    }


    const oldItem = await todoList.updateItem(index, new Item(value))

    console.log(`Item "${oldItem!.title}" foi alterado para "${value}" com sucesso`)
    // Essa parte do "oldItem!.title" eu pesquisei por fora e achei muito interessante a maneira como ele garante que não vá retornar undefined
    process.exit(0);
}

console.log(`Comando não reconhecido ${command}
    Comandos Disponíveis:
    - add <item>: Adiciona um item a lista
    - remove <index>: Remove um item da lista por índice
    - list: Lista os itens atuais
    - update <index>: Atualiza um item da lista por índice
    
    `)








