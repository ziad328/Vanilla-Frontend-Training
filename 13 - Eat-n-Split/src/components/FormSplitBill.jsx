import React from 'react'
import Button from './Button';

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split the bill with x</h2>
            <label>💰 Bill value</label>
            <input type="text" />

            <label>💸Your expenses</label>
            <input type="text" />

            <label>💵 X expenses</label>
            <input type="text" />

            <label>🧍‍♂️ Who paid the bill?</label>
            <select>
                <option>You</option>
                <option>x</option>
            </select>
            <Button>Split the bill</Button>
        </form>
    )
}

export default FormSplitBill