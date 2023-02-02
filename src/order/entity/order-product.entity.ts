import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {OrderEntity} from "./order.entity";
import {ProductEntity} from "../../product/entity/product.entity";



@Entity("order_product")
export class OrderProductEntity{


    @PrimaryGeneratedColumn()
    id : number


    @ManyToOne(
        type => OrderEntity,
        order=>order.orderProducts
    )
    order : OrderEntity


    @ManyToOne(
        type => ProductEntity,
        {
            cascade : true
        }
    )
    product : ProductEntity


    @Column()
    itemsNumber : number

}