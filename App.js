class App extends React.Component {
    state= {
        items = items,
        item: '',
        brand: 'auqafina',
        units: '',
        quantity: '',
        isPurchased: false,
         shoppingCart: []

    }
    
    render(){
        return(
            <div>
                <h1>React Groceries</h1>
            </div>
        )
    }
}







ReactDOM.render(<App/>, document.getElementById('root'))

