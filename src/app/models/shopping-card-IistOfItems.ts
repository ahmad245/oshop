import { shoppingCardItem } from "./shopping-card-item";

export class shoppingCardListOfItems
{
    items:shoppingCardItem[]=[];
    constructor(public itemsMap:{[key:string]:shoppingCardItem})
    {
        for(let id in itemsMap)
        {
            this.items.push(itemsMap[id]);
        }
     
    }

    get Totalitem()
    {

      let sum=0;
          for (let index in this.items) {
           sum+=this.items[index].quantity;
          
          }
        return sum;
         
    }
    
    get productId()
    {
     return  Object.keys(this.items);
    }
}