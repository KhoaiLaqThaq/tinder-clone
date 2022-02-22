import { combineReducers } from 'redux';
import swipeButtonsReducers from './SwipeButtons.reducer';
import tinderCardReducer from './TinderCards.reducer';

const rootReducer = combineReducers({
    tinderCardReducer,
    swipeButtonsReducers
});

export default rootReducer;
