import React from 'react'

function Item({ item }) {
    return (
        <li className="item">
            <input type="checkbox" />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

export default Item