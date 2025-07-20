import { useMemo, useState } from "react"
import useBudget from "../hooks/useBudget"


const BudgetForm = () => {
    const {dispatch} = useBudget()
    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)
        setBudget(e.target.valueAsNumber)

    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'add-budget', payload:{budget}})
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit }>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>
                <input
                    type="number"
                    name="budget"
                    id="budget"
                    placeholder="Define your Budget "
                    className="w-full bg-white border border-gray-200 p-2"
                    value={budget}
                    onChange={handleChange}
                />

            </div>

            <input
                type="submit"
                value='Define Budget'
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-bold disabled:opacity-70"
                disabled={isValid}
            />
        </form>
    )
}

export default BudgetForm