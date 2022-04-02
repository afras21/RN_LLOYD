import AsyncStorage from '@react-native-async-storage/async-storage'
import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'

// Import Reducers
// import userReducer from '../reducers/userReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({ 
    //   user: persistReducer(persistConfig, userReducer) , // user profile data
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };