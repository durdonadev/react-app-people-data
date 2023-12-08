import "./App.css";
import { peopleData } from "./data";

const Person = (props) => {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>{props.profession}</td>
            <td>{props.yearlySalary}</td>
            <td>{props.yearlyTotalExpenses}</td>
            <td>{props.creditScore}</td>
            <td>{props.yearlySaving}</td>
            <td>{props.averageMonthlyExpense}</td>
        </tr>
    );
};

function App() {
    return (
        <div className="container">
            <h1>People Data</h1>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Profession</th>
                    <th>Yearly Salary</th>
                    <th>Yearly Total Expenses</th>
                    <th>Credit Score</th>
                    <th>Yearly Saving</th>
                    <th>Average Monthly Expense</th>
                </tr>
                {peopleData.map((person, idx) => {
                    return (
                        <Person
                            key={idx}
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}
                            profession={person.profession}
                            yearlySalary={person.finance.yearlySalary}
                            yearlyTotalExpenses={
                                person.finance.yearlyTotalExpenses
                            }
                            creditScore={person.finance.creditScore}
                            yearlySaving={
                                person.finance.yearlySalary -
                                person.finance.yearlyTotalExpenses
                            }
                            averageMonthlyExpense={
                                person.finance.yearlyTotalExpenses / 12
                            }
                        />
                    );
                })}
            </table>
        </div>
    );
}

export default App;
