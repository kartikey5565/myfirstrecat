import './AllExpenses.css'

const AllExpenses = (props)=> {
    const classes = 'allexpenses ' + props.className
    return (<div className= {classes}>
                {props.children}
    </div>);
}

export default AllExpenses 