import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const CanvasComponent = React.lazy(() => import('./CanvasComponent'));

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <CanvasComponent />
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;