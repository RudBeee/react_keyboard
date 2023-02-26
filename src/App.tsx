import React from 'react';

export class App extends React.Component {
  state = {
    pressButton: 0,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  handlerKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressButton: event.key });
  };

  render() {
    const { pressButton } = this.state;
    const text = pressButton === 0
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${pressButton}]`;

    return (
      <div className="App">
        <p className="App__message">
          {text}
        </p>
      </div>
    );
  }
}