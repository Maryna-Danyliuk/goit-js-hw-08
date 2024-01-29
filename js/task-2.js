class Storage{
  #items;
  constructor(items){
    this.#items = items;
  }
  getItems(){
    return this.#items;
  }
  addItem(newItem){
this.#items.push(newItem);
  }
  removeItem(itemToRemove){
   let index = this.#items.indexOf(itemToRemove); 
 
   this.#items = (this.#items.slice(0, index)).concat(this.#items.slice( index+1));
}
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
storage.addItem("Droid");
console.log(storage.getItems()); 
storage.removeItem("Prolonger");
console.log(storage.getItems()); 