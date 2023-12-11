import { peopleData } from "./data";
import { Table } from "./design-system/Table/Table";

const flattenPeopleData = (data) => {
    return data.map((item) => {
        const finance = { ...item.finance };
        const person = {
            firstName: item.firstName,
            lastname: item.lastName,
            age: item.age,
            profession: item.profession,
            ...finance
        };
        return person;
    });
};

export const FinanceData = () => {
    return (
        <Table
            columnNames={[
                "First Name",
                "Last Name",
                "Age",
                "Profession",
                "Yearly Salary",
                "Yearly Total Expenses",
                "Credit Score"
            ]}
            data={flattenPeopleData(peopleData)}
        />
    );
};
