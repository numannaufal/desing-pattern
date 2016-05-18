import {ConcreteCreator} from "./ConcreteCreator";
import {AbstractProduct} from "./AbstractProduct";

let creator: ConcreteCreator = new ConcreteCreator();
let product: AbstractProduct = creator.factoryMethod('concreteProduct');
console.log(product);

/** 
 * 
 * The essense of factory  method is:
 * 
 * It capsulate the concrete product
 * so we don't need/know specific concrete product
 * just know the abstract and the name mapping
 * so we can get the product
 * 
 * 
 * 
 * 
 */