import {combineReducers} from 'redux'
import loginReducer from '../pages/login/redux/reducer'
// profess: professionalReducer,
const reducer = combineReducers({
    login: loginReducer
});
export default reducer;
