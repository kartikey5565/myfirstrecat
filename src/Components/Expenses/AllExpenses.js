import './AllExpenses.css'

const AllExpense = (props)=> {
    const classes = 'allexpenses ' + props.className
    return (<div className= {classes}>
                {props.children}
    </div>);
}

export default AllExpense