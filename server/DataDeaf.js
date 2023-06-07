import { products } from "./constatnt/Data.js"
import Product from "./module/ProductSchema.js"
const DataDeaf = async () => {
  try {
    await Product.insertMany(products);
    console.log('Data imported succsefully')
  } catch (error) {
    console.log("error while inserting data", error.message)
  }

}
export default DataDeaf;