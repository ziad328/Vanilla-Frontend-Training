import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([])
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;

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
      <Stats totalItems={totalItems} packedItems={packedItems} />
    </div>
  )
}

export default App