import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([])
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  function handleAddItem(item) {
    setItems([...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    }))
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats totalItems={totalItems} packedItems={packedItems} percentage={percentage} />
    </div>
  )
}

export default App