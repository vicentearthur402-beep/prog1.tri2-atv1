class Item {
    constructor(public title: string) { }
}

class TodoList {
    private items: Item [] = [];
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    private async saveListToDisk() {
        const file = Bun.file(this.filePath);
        const data = JSON.stringify(this.items);
        await file.write(data)

    }

    private async loadListFromDisk() {
        const file = Bun.file(this.filePath);
        const data = await file.json();
        this.items = data.map((v: any) => new Item(v.title));
    }

    async addItem(item: Item) {
        if (!item)
            throw "Item Inválido";
        if (!item.title.trim())
            throw "Item deve conter um título"
        this.items.push(item);
        await this.saveListToDisk();
    }

    async removeItem(index: number) {
        this.items.splice(index, 1);
        await this.saveListToDisk();

    }
 
    getItems() {
        return Array.from(this.items);
    }


}


export default TodoList;
export { TodoList, Item }