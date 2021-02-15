import { INCREASE, DECREASE, RESET ,SHOW_ITEM} from './actionsTypes';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const reset = () => ({ type: RESET });
const show_item = () => ({ type: SHOW_ITEM });

export {
    increase,
    decrease,
    reset,
    show_item
}