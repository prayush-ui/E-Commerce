import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/metaReducer";
import AddToCart from "./slices/AddToCart";
import authSlice from "./slices/Loginslices";
import Allproduct from "./slices/Allproduct";
import Limitslices from "./slices/Limitslices";
import Userslice from "./slices/Userslice";
import SearchProduct from "./slices/SearchProduct";
import SearchDynamicProducts from "./slices/SearchDynamicProducts";
import SortProducts from "./slices/SortProducts";
import Allproducts from "./slices/Allproducts";

const resetSlices=[
    "addToCart",
    "auth",
    "allproduct",
    "carouseldata",
    "alluser",
    "searchproduct",
    "searchdynamicproduct",
    "sortproduct",
    "allproducts",
]
const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices,
)(
    combineReducers({
        addToCart: AddToCart,
        authinfo:authSlice,
        allproduct:Allproduct,
        carouseldata: Limitslices,
        alluser:Userslice,
        searchproduct:SearchProduct,
        searchdynamicproduct:SearchDynamicProducts,
        sortproduct:SortProducts,
        allproducts:Allproducts,
        
    })
);
const persistConfig={
    key: "root",
    storage,
    Whitelist:resetSlices,
}
export default persistReducer(persistConfig, rootReducer);