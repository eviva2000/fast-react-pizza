import { formatCurrency } from '../../utils/helpers';

import PropTypes from 'prop-types';

function OrderItem({ item, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {ingredients.join(',') ?? []}
      </p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default OrderItem;
