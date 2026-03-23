import Item from "./Item";
import { useState } from 'react'

function PackingList({ items, onDeleteItem, onToggleItem }) {
    const [sortby, setSortby] = useState('input')

    return (
        <div className="list">
            <ul>
                {items.map(item => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />))}
            </ul>

            <div className="actions">
                <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
            </div>

        </div>
    )
}

export default PackingList