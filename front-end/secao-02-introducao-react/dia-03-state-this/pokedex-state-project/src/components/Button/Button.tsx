import React from "react";

class Button extends React.Component<any, any> {
    render() {
        return (
            <button type="button" className="button" onClick={ this.props.onClick }>
               {this.props.text}
            </button>
        );
    }
}

export default Button;