import "./App.css";
import { peopleData } from "./data";

const Person = (props) => {
    return (
        <tr>
            <td>{props.order}</td>
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

const personWithMaxSalary = peopleData.reduce((maxSalaryPerson, person) => {
    return person.finance.yearlySalary > maxSalaryPerson.finance.yearlySalary
        ? person
        : maxSalaryPerson;
}, peopleData[0]);

const personWithMinSalary = peopleData.reduce((minSalaryPerson, person) => {
    return person.finance.yearlySalary < minSalaryPerson.finance.yearlySalary
        ? person
        : minSalaryPerson;
}, peopleData[0]);

function App() {
    return (
        <div className="container">
            <h1>People Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
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
                </thead>
                <tbody>
                    {peopleData.map((person, idx) => (
                        <Person
                            key={idx}
                            order={idx + 1}
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
                    ))}
                </tbody>
            </table>
            <h2>Person with Max Yearly Salary:</h2>
            <ul>
                <li>First Name: {personWithMaxSalary.firstName}</li>
                <li>Last Name: {personWithMaxSalary.lastName}</li>
                <li>Age: {personWithMaxSalary.age}</li>
                <li>
                    Yearly Salary: {personWithMaxSalary.finance.yearlySalary}
                </li>
            </ul>

            <h2>Person with Min Yearly Salary:</h2>
            <ul>
                <li>First Name: {personWithMinSalary.firstName}</li>
                <li>Last Name: {personWithMinSalary.lastName}</li>
                <li>Age: {personWithMinSalary.age}</li>
                <li>
                    Yearly Salary: {personWithMinSalary.finance.yearlySalary}
                </li>
            </ul>
        </div>
    );
}

export default App;
