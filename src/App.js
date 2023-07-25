import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

const CanvasComponent = React.lazy(() => import('./CanvasComponent'));

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Suspense fallback={<div>Loading...</div>}>
                <CanvasComponent />
            </Suspense>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
