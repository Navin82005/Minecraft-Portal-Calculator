import React from 'react'

const Calculator = () => {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [num3, setNum3] = React.useState('');
    const [result, setResult] = React.useState(null);

    const handleCalculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        const c = parseFloat(num3);
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            setResult(a + b + c);
        } else {
            setResult('Invalid input');
        }
    };

    return (
        <div style={{
            width: 350,
            margin: '40px auto',
            padding: 24,
            border: '1px solid #ccc',
            borderRadius: 8,
            background: '#f5f5f5',
            boxShadow: '0 2px 8px #aaa'
        }}>
            <h2>Simple Calculator</h2>
            <div style={{ marginBottom: 12 }}>
                <input
                    type="number"
                    step="any"
                    placeholder="First number"
                    value={num1}
                    onChange={e => setNum1(e.target.value)}
                    style={{ width: '100%', padding: 8, marginBottom: 8 }}
                />
                <input
                    type="number"
                    step="any"
                    placeholder="Second number"
                    value={num2}
                    onChange={e => setNum2(e.target.value)}
                    style={{ width: '100%', padding: 8, marginBottom: 8 }}
                />
                <input
                    type="number"
                    step="any"
                    placeholder="Third number"
                    value={num3}
                    onChange={e => setNum3(e.target.value)}
                    style={{ width: '100%', padding: 8 }}
                />
            </div>
            <button
                onClick={handleCalculate}
                style={{
                    width: '100%',
                    padding: 10,
                    background: '#0078d4',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Calculate Sum
            </button>
            {result !== null && (
                <div style={{ marginTop: 16, fontSize: 18 }}>
                    Result: {result}
                </div>
            )}
        </div>
    );
}

export default Calculator;