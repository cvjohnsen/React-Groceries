class App extends React.Component {
    state= {
        items: items,
        item:'',
        brand:'',
        units: 0,
        quantity: 0,
        isPurchased: true,
         shoppingCart: []
 }
handleChange = (event) =>{
// console.log(event);
// Destructor make key an array
this.setState({[event.target.id] : event.target.value})
};
handleSubmit = (event) => {
    // Prevents erase default
    event.preventDefault();    
    const newItem = {
       item: this.state.item,
        brand: this.state.brand,
        units: this.state.unit,
        quantity: this.state.quantity
    };
    // Create new array in state (dont Push() to mutate) instead use Spread Operator to join/add...
    this.setState({
        items:[newItem, ...this.state.items],
        item:'',
        brand:'',
        units: 0,
        quantity: 0,
        isPurchased: true,
    
    })
}
// Adding in new item cart array w/ spread OP
addToCart = (item)=> {
    this.setState({
        shoppingCart: [item, ...this.state.shoppingCart]
    })
}

    render(){
        return(
            <div>
                <h1>React Groceries</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='item'>Item Name</label>
                <input type='text' value={this.state.item} id='item'
                onChange={this.handleChange} /> <br/>

                <label htmlFor='unit'>Price</label>
                <input type='number' value={this.state.unit} id='unit' 
                onChange={this.handleChange}/><br/>

                <label htmlFor='description'>Quantity</label>
                <input type='number' value={this.state.quantity} id='quantity' 
                onChange={this.handleChange}/><br/>

                <input type='submit'></input>
                </form>

                    {/* Product List */}
                   <ul>
                       <h1>Products</h1>
                    {/* map using state */}
                    {this.state.items.map((item) => (
                        // Access to each product below in data
                        <Product item={item} addToCart={this.addToCart}/>
                        ))}    
                </ul>
                     {/* Access to Shopping Cart */}
                    <ShoppingCart cartItems={this.state.shoppingCart}/>
            </div>
        
        )
    }
}
class Product extends React.Component {
    render() {
        return(
            <li key={this.props.item.item} onClick={ () => this.props.addToCart(this.props.item)}>
            {this.props.item.item}  {this.props.item.unit} - {this.props.item.quantity}
            </li>
        )
    }
}

class ShoppingCart extends React.Component {
    render(){
        return(
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                   {this.props.cartItems.map(item => <li key={item.item}>{item.item} 
                   - {item.unit} {item.quantity}</li>)}
                </ul>
            </div>
        )
    }
}







ReactDOM.render(<App/>, document.getElementById('root'))

