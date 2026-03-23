function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;

    return (
        <footer className="stats">
            <p>You have {totalItems} items on your list, and you have packed {packedItems} of them.</p>
        </footer>
    )
}

export default Stats