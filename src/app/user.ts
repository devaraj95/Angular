import { City } from "./model/city";

export class User{
        id!:Number;
        userName!:string;
        email!:string;
        gender!:string;
        phoneNumber!:string;
        // city!:City[];
        city!: { city: string;
                 id: Number };
      
}
