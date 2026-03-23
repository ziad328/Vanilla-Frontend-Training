import Item from "./Item";
import { useState } from 'react'

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortby, setSortby] = useState('input')
    let sortedItems;
    if (sortby === 'input') sortedItems = items
    if (sortby === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortby === 'packed') sortedItems = items.slice().sort((a, b) => a.packed - b.packed)

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />))}
            </ul>

            <div className="actions">
                <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>
                    clear list
                </button>
            </div>

        </div>
    )
}

export default PackingList