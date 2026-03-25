import React from 'react'
import Button from './Button';

function FormSplitBill({ selectedFriend, currentUser }) {
    return (
        <form className="form-split-bill">
            <h2>Split the bill with {selectedFriend.name}</h2>
            <label>💰 Bill value</label>
            <input type="text" placeholder="Enter bill value" />

            <label>🧍‍♂️ Who paid the bill?</label>
            <select>
                <option value={currentUser.id}>You</option>
                <option value={selectedFriend.id}>{selectedFriend.name}</option>
            </select>

            <label>💡 How much is your share?</label>
            <input type="text" placeholder="Enter your share" />

            <Button>Split the bill</Button>
        </form>
    )
}

export default FormSplitBill