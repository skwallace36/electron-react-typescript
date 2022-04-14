import React from 'react';

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props)
    // window.api.receive()
    
    window.electronAPI.send('toMain', "hello");
    window.electronAPI.receive('fromMain', (data: String) => {
      console.log(data)
    })
  }
  
  render() {
    return (<>
      <h1>success</h1>
    </>);
  }
}

export default App;
