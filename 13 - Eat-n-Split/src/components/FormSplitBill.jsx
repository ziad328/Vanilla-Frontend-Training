import React from 'react'
import Button from './Button';

function FormSplitBill({ selectedFriend }) {
    return (
        <form className="form-split-bill">
            <h2>Split the bill with {selectedFriend?.name}</h2>
            <label>💰 Bill value</label>
            <input type="text" />

            <label>💸Your expenses</label>
            <input type="text" />

            <label>💵 {selectedFriend?.name} expenses</label>
            <input type="text" />

            <label>🧍‍♂️ Who paid the bill?</label>
            <select>
                <option>You</option>
                <option>{selectedFriend?.name}</option>
            </select>
            <Button>Split the bill</Button>
        </form>
    )
}

export default FormSplitBill