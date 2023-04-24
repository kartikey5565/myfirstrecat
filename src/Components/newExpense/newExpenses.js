import './newExpense.css'
import ExpenseForm from './ExpenseForm'


const newExpense = (props)=>{

    function submitted(data){
        // console.log(data)
        props.onNewExpense(data)
    }

    return <div className='new-expense'>
        <ExpenseForm onSubmitForm={submitted} />
    </div>
}
export default newExpense