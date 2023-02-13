import User from "./User";
import Product from "./Product";
import OrderItem from "./OrderItem";
import OrderDetail from "./OrderDetail";
import Category from "./Category";

Category.hasMany(Product, {foreignKey: "category_id"});
Product.belongsTo(Category);

Product.hasMany(OrderItem, {foreignKey: "product_id"});
OrderItem.belongsTo(Product);

OrderDetail.hasMany(OrderItem, {foreignKey:"order_detail_id"})
OrderItem.belongsTo(OrderDetail);

User.hasMany(OrderDetail, {foreignKey:"user_id"});
OrderDetail.belongsTo(User);

export  {
    Category,
    Product,
    OrderItem,
    OrderDetail,
    User
}