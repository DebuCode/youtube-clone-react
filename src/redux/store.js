import {legacy_createStore as createStore , applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authreducer} from './reducers/auth.reducer'
import { homevideosreducers } from './reducers/videos.reducer';


const rootReducer = combineReducers({
    auth : authreducer,
    homeVideos: homevideosreducers,
})

const store = createStore (rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store

