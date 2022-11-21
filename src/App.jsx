import { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeMirror';

const App = () => {
    const [jsonData, setJsonData] = useState();

    const handleJsonData = (jsonData) => {
        setJsonData(jsonData);
    };

    return (
        <div className='w-11/12 border-2 border-gray-400'>
            <CodeEditor jsonData={jsonData} setJsonData={handleJsonData} />
        </div>
    );
};

export default App;
