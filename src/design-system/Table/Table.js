export const Table = ({ columnNames, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columnNames.map((column, idx) => {
                        return <th key={idx}>{column}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr>
                            {Object.values(item).map((value) => {
                                return <td>{value}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
