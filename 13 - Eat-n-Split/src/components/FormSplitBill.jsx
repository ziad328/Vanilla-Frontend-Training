import { useState } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend }) {
    const [billValue, setBillValue] = useState('');
    const [userExpense, setUserExpense] = useState('');
    const [paidBy, setPaidBy] = useState('user');
    const friendExpense = billValue ? billValue - userExpense : '';
    return (
        <form className="form-split-bill">
            <h2>Split the bill with {selectedFriend?.name}</h2>
            <label>💰 Bill value</label>
            <input
                type="text"
                value={billValue}
                onChange={(e) => setBillValue(Number(e.target.value))}
            />

            <label>💸Your expenses</label>
            <input
                type="text"
                value={userExpense}
                onChange={(e) => setUserExpense(
                    Number(e.target.value) > billValue ? userExpense : Number(e.target.value)
                )} />

            <label>💵 {selectedFriend?.name} expenses</label>
            <input
                type="text"
                value={friendExpense}
                readOnly
            />

            <label>🧍‍♂️ Who paid the bill?</label>
            <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend?.name}</option>
            </select>
            <Button>Split the bill</Button>
        </form>
    )
}

export default FormSplitBill