import React from 'react';

const ClickHistory = ({ history }) => {
    return (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>クリック数</th>
                        <th>時間</th>
                        <th>ID</th> {/* 新しいセルを追加 */}
                    </tr>
                </thead>
                <tbody>
                    {[...history].reverse().map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.count}</td>
                            <td>{entry.time}</td>
                            <td>{entry.id}</td> {/* IDを表示 */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClickHistory;
