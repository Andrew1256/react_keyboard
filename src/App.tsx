import React from 'react';

interface AppState {
  key: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    key: '',
  };

  divRef: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    this.divRef.current?.focus();
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div
        className="App"
        ref={this.divRef}
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
      >
        {!key && <p className="App__message">Nothing was pressed yet</p>}
        {key && <p className="App__message">The last pressed key is [{key}]</p>}
      </div>
    );
  }
}
