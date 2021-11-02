import { all, call } from "@redux-saga/core/effects";

import { userSagas } from "./redux/user/user.sagas";
import { cartSagas } from "./redux/cart/cart.sagas";
import { shopSagas } from "./redux/shop/shop.sagas";

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}