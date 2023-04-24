import './newExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props)=>{
    const [addBtn, setAddBtn] = useState(false)
    function submitted(data){
        // console.log(data)
        props.onNewExpense(data)
        setAddBtn(false)
    }
    const showForm = ()=>{
        setAddBtn(true)
    }
    const dontShowForm = ()=>{
        setAddBtn(false)
    }

    return <div className='new-expense'>
    
       {!addBtn && <button onClick={showForm}>Add Expense</button>}
       {addBtn && <ExpenseForm onCancel = {dontShowForm} onSubmitForm={submitted} />}
    </div>
}
export default NewExpense