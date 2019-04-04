import { cardtest } from './card-Test';
export class cardtestList
{
    constructor(public listOfCard:cardtest[])
    {
      
    }

 get totat()
 {
     let sum=0;
     for(let item of this.listOfCard)
     {
         sum+=item.quantity;
     }
     return sum;
 }


}