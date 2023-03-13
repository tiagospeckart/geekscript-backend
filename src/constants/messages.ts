const MESSAGE = {
  ERROR: {
    INVALID_DATA: 'Invalid e-mail or password, please try again',
    SEARCH_DB: 'Unable to perform this action',
    ID_NOT_FOUND: 'ID not found',
    UPDATE_REGISTER: 'Unable to update data',
    DELETE: 'Unable to delete data',
    CHECKOUT_REG: 'Failed to create new purchase',
    CHECKOUT: 'Unable to complete the purchase',
    TOKEN: 'Unable to generate a token',
    REGISTER: {
      CATEGORY: 'Unable to register category',
      PRODUCT: 'Unable to register product',
      USER: 'Unable to register user',
      PURCHASE: 'Unable to register this purchase',
      DISCOUNT: 'Unable to register discount',
    },
    EXIST: {
      CATEGORY: 'Category already exists',
      EMAIL: 'E-mail already registered',
    }
  },
};

export default MESSAGE;
