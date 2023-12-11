import { peopleData1 } from "./data";
import { Table } from "./design-system/Table/Table";

export const PeopleData = () => {
    return (
        <Table columnNames={["ID", "NAME", "AGE", "CITY"]} data={peopleData1} />
    );
};
