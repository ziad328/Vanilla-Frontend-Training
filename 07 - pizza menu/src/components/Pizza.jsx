import { pizzaData } from './../data';

function Pizza() {
    return (
        <div>
            {pizzaData.map((pizza) => (
                <div key={pizza.name}>
                    <img src={pizza.photoName} alt={pizza.name} />
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>{pizza.price}$</span>
                </div>
            ))}

        </div>
    )
}

export default Pizza