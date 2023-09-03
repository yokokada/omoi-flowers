import React from 'react';

const ClickHistory = ({ history }) => {
    return (
        <table className="history-table">
            <thead>
                <tr>
                    <th>クリック数</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                {[...history].reverse().map((entry, index) => (
                <tr key={index}>
                        <td>{entry.count}</td>
                        <td>{entry.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ClickHistory;