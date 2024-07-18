import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityById,
} from './cartSlice';

export function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 px-4 py-3 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      {currentQuantity}
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

UpdateQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};
