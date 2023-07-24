import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const CanvasComponent = React.lazy(() => import('./CanvasComponent'));

function App() {
  console.log("asdasdad");
  return (
    
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <CanvasComponent />
      </Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
