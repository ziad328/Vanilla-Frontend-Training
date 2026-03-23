function Stats({ totalItems, packedItems, percentage }) {
    if (totalItems === 0) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        )
    }

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? `You're all set! Ready for your trip! 🚀` : `You have ${totalItems} items on your list, and you have packed ${packedItems} of them. (${percentage}%)`}
            </em>
        </footer>
    )
}

export default Stats