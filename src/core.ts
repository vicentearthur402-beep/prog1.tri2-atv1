class Item {
    constructor(public item: string) { }
}

class TodoList {
    private items: Item [] = [];
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    removeItem(index: number) {
        this.items.splice(index, 1);

    }
 
    getItems() {
        return this.items;
    }


}

const lista = new TodoList('arquivo.txt')

lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))
lista.addItem(new Item("Comprar Abacate"))

console.log(lista.getItems())