import React from 'react';

interface IMyComponentProps {
  defaultName: string;
  begin: number;
}

interface IMyComponentState {
  name: string;
  start: number;
}

class Hello extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = { 
        name: this.props.defaultName,
        start: this.props.begin,
    };
  }

  public handleOnChange(event: any): void {
    this.setState((prevState, props) => ({
      name: event.target.value,
      start: props.begin,
    }));
  }

  public render() {
    console.log(this);
    return (
      <div>
        <div>
            <p>Começou em { this.state.start }</p>
          <input onChange={(e) => this.handleOnChange(e)} />
        </div>
        <div>Hello {this.state.name}!</div>
      </div>
    );
  }
}

export default Hello;
