// import './ExpenseForm.css'

function ExpenseForm(){
    const typing = (e)=>{
        console.log(e.nativeEvent.data)
    }
    return (
        <div>
            <form>
                {/* <label>Expense Title</label> */}
                <input onChange={typing} type={"text"} placeholder="Title"/>
                <input onChange={typing} type={"number"} placeholder="Amount"/>
                <input type={"date"}/>
                <button type='button'>Submit</button>
            </form>
        </div>
    );
}
export default ExpenseForm