import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 py-2  border-blue-500">
        Nuevo Gasto
      </legend>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="expenseName" className="text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Add the name of the expense"
          className="bg-slate-100 p-2"
          name="expenseName"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add amount ex. 300"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select
          id="category"
          className="bg-slate-100 p-2"
          name="category"
          defaultValue={''} 
        >   <option value='' disabled={true} > -- Select Category --</option>
            {categories.map(category => 
            (
            <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="date" className="text-xl">
          Date :
        </label>
        <DatePicker
            className=' bg-slate-100 text-slate-800 p-2 border-0' 
            
        
        />
       
      </div>

            <input type="submit" 
            className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" 
            value={'Register'}/>

    </form>
  );
};

export default ExpenseForm;
