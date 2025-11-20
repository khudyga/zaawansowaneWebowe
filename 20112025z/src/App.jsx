import React, { useState } from 'react'
import Item from './Item'

const App = () => {
	const [items, setItems] = useState([
		{ id: 1, name: 'Mleko', quantity: 2, bought: false },
		{ id: 2, name: 'Chleb', quantity: 1, bought: true },
		{ id: 3, name: 'Jajka', quantity: 12, bought: false },
		{ id: 4, name: 'Masło', quantity: 1, bought: false },
	])

	const toggleItem = id => {
		setItems(prev => prev.map(item => (item.id === id ? { ...item, bought: !item.bought } : item)))
	}

	const deleteItem = id => {
		setItems(prev => prev.filter(item => item.id !== id))
	}

	const editQuantity = (id, newQuantity) => {
		setItems(prev => prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)))
	}

	return (
		<div className='maincontainer'>
			<div className='p-4 border rounded' style={{ width: '400px' }}>
				<h1 className='text-center mb-4'>Lista zakupów</h1>

				{items.map(item => (
					<Item key={item.id} item={item} onToggle={toggleItem} onDelete={deleteItem} onEditQuantity={editQuantity} />
				))}
			</div>
		</div>
	)
}

export default App
