import React from 'react';
import { FormStyle } from './styles/form.styles';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: '',
            name: '',
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        const { email, name, pet } = this.state
        event.preventDefault()
        alert(`
        ---  Seus dados:  ---\n
        Nome do pet : ${pet}
        Seu nome : ${name}
        Seu email : ${email}
        `)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormStyle>
                    <div>
                        <label >Qual pet você gostaria de adotar?</label>
                        <input
                            name='pet'
                            placeholder='Nome do pet'
                            value={this.state.pet}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label >Seu nome:</label>
                        <input
                            name='name'
                            placeholder='Nome'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Seu email:</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <input className='submit-input' type="submit" value="Enviar" />
                </FormStyle>
            </form>
        );
    }
}

export default Form