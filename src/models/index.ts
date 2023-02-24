import User from './User';
import Product from './Product';
import PurchaseProduct from './PurchaseProduct';
import Purchase from './Purchase';
import Category from './Category';

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Product.hasMany(PurchaseProduct, { foreignKey: 'product_id' });
PurchaseProduct.belongsTo(Product, { foreignKey: 'product_id' });

Purchase.hasMany(PurchaseProduct, { foreignKey: 'purchase_id' });
PurchaseProduct.belongsTo(Purchase, { foreignKey: 'purchase_id' });

User.hasMany(Purchase, { foreignKey: 'user_id' });
Purchase.belongsTo(User, { foreignKey: 'user_id' });

export { Category, Product, PurchaseProduct, Purchase, User };