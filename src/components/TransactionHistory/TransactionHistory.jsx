import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHistoryHeadRow}>
          <th className={css.transactionHistoryHeadTh}>Type</th>
          <th className={css.transactionHistoryHeadTh}>Amount</th>
          <th className={css.transactionHistoryHeadTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.transactionHistoryBodyRow} key={item.id}>
            <td className={css.transactionHistoryBodyTh}>{item.type}</td>
            <td className={css.transactionHistoryBodyTh}>{item.amount}</td>
            <td className={css.transactionHistoryBodyTh}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
