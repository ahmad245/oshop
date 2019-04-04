import { shoppingCard } from './shopping-card';
export class order
{
    constructor(public card:shoppingCard,public shipping:any,public UserId:string)
    {

    }
  
  save()
  {
    let ops=
    {
      dateCreated:new Date().getTime(),
      shipping:this.shipping,
      user:this.UserId,
      items:  this.card.productIdTest.map(data=>
        {
          return{
            product:
            {
             title:data.productItem.title,
             imageUrl:data.productItem.imageUrl,
              price:data.productItem.price
             },  
             quantity:data.quantity ,
             totalPrice:data.quantity*data.productItem.price,
           
             }

        })
       
      };
      return ops;
  }
}