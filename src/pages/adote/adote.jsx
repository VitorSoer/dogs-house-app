import React from 'react';
import PETS from '../../data/card.data';

import { VscHome,VscHistory, VscLaw, VscCreditCard } from "react-icons/vsc";
import { FaCat, FaDog, FaHome } from 'react-icons/fa';

import { AdoteWrapper, CardStyle } from './styles/adote.styles';
import { ButtonComponent } from '../../component/button/button.styles'
import { NavBar } from './styles/adote.nav.styles';

class Adote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: PETS[0].items
        }
    }

    BntChangeDogs = () => { this.setState({cards: PETS[0].items})};
    BntChangeCats = () => { this.setState({cards: PETS[1].items})};

    render() {
        const { cards } = this.state;
    
        return (
            <div>
                <NavBar>
                    <h1>Dog's House</h1>
                    <ul>
                        <li><FaHome/></li>
                        <li onClick={this.BntChangeDogs}><FaDog/></li>
                        <li onClick={this.BntChangeCats}><FaCat/></li>
                    </ul>
                </NavBar>
                <AdoteWrapper>
                    {
                        cards.map(({ id, name, estado, idade, peso, imageUrl }) => (
                            <CardStyle key={id}>
                                <img alt='Pet Img' src={imageUrl}></img>
                                <h1>{name}</h1>

                                <div className='grid'>
                                    <span><VscHome /> {estado}</span>
                                    <span><VscHistory /> {idade}</span>
                                    <span><VscLaw /> {peso}</span>
                                    <span><VscCreditCard /> Apadrinhe!</span>
                                </div>
                                <ButtonComponent active> Encontre seu pet</ButtonComponent>
                            </CardStyle>

                        ))

                    }
                </AdoteWrapper>
                
            </div>
        );

    }


}



export default Adote