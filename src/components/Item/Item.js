import { itemsData } from "./ItemList";

itemsData.map(function(productos){
   return `${productos.id} + ${productos.name} + ${productos.precio}`
})

console.log(itemsData)

