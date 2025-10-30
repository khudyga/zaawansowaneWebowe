const ItemList = ({items, title}) => { 
    return (
      <div>
        <h4>{title}</h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
 }

 export default ItemList