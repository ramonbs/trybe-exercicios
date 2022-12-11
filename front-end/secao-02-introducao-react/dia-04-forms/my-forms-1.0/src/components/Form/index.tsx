import React, { Component } from 'react';
import './index.css';

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      arquivo: '',
    };
  }

  public handleChange({ target }: any) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h2>
        <form className='form'>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name='estadoFavorito'
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <fieldset>
            <legend>Qual a sua idade?</legend>
            <label>
              <input
                type='number'
                name='idade'
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <label>
            <input
              type='file'
              name='arquivo'
              value={this.state.arquivo}
              onChange={this.handleChange}
            />
          </label>
          <fieldset>
            <legend>Você vai comparecer ao evento?</legend>
            <label>
              <input
                type='checkbox'
                name='vaiComparecer'
                checked={this.state.vaiComparecer}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
