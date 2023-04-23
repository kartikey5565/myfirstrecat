import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = ()=>{

    const [enteredTitle, setenteredTitle] = useState("")
    const [enteredAmount, setenteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")
    const titleChangeHandler = (event)=>{
        setenteredTitle(event.target.value)
    }

    const amountChangeHandler = (event)=>{
        setenteredAmount(event.target.value)
    }
    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = event =>{
        event.preventDefault()
        const userData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(userData)
    }
    return <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type='number'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type='date'/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

}
export default ExpenseForm