const Item = ({ item, onToggle, onDelete, onEditQuantity }) => {
	return (
		<div className='d-flex align-items-center gap-3 mb-3 maincontaier'>
			<input type='checkbox' checked={item.bought} onChange={() => onToggle(item.id)} className='form-check-input' />

			<span className='flex-grow-1' style={{ textDecoration: item.bought ? 'line-through' : 'none' }}>
				{item.name} — {item.quantity}
			</span>

			<button className='btn btn-sm btn-primary' onClick={() => onEditQuantity(item.id, item.quantity + 1)}>
				+
			</button>

			<button
				className='btn btn-sm btn-secondary'
				onClick={() => item.quantity > 1 && onEditQuantity(item.id, item.quantity - 1)}
			>
				-
			</button>

			<button className='btn btn-sm btn-light' onClick={() => onDelete(item.id)}>
				Usuń
			</button>
		</div>
	)
}

export default Item
