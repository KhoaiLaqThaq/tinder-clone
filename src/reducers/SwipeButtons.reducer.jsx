const initialSwipeState = {
    action: 'none'
};

export default function swipeButtonsReducers(state = initialSwipeState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'refresh':
            return Object.assign({}, state, { action: 'refresh' });
        case 'remove':
            return Object.assign({}, state, { action: 'remove' });
        case 'star':
            return Object.assign({}, state, { action: 'star' });
        case 'favorite':
            return Object.assign({}, state, { action: 'favorite' });
        case 'flash':
            return Object.assign({}, state, { action: 'flash' });
        case 'none':
            return Object.assign({}, state, { action: 'none' }); 
        default:
            return state;
    }
}