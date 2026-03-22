import { useState } from 'react'

function Form() {
    const [description, setDescription] = useState()
    const [quantity, setQuantity] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        if (!description || !quantity) return

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now()
        }
        console.log(newItem);

        setDescription('')
        setQuantity('')
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? 📷🚞</h3>
            <input
                type="number"
                placeholder="Quantity..."
                max={30}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="Item..."
                maxLength={20}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}

export default Form