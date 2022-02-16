import React from 'react';
import PETS from '../../data/card.data';
import { Link } from 'react-router-dom';

import { VscHome,VscHistory, VscLaw, VscCreditCard } from "react-icons/vsc";
import { FaCat, FaDog, FaHome } from 'react-icons/fa';

import { AdoteWrapper, CardStyle } from './styles/adote.styles';
import { NavBar } from './styles/adote.nav.styles';
import ModalBox from '../../component/modal/modal';



class Adote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: PETS
        }
    }

    BntChangeDogs = () => { this.setState({cards: PETS.filter(item => {return item.tipo === 'canino'}) })};
    BntChangeCats = () => { this.setState({cards: PETS.filter(item => {return item.tipo === 'felino'}) })};

    render() {
        const { cards } = this.state;
    
        return (
            <div>
                <NavBar>
                    <h1>Dog's House</h1>
                    <div>
                        <Link className='link' style={{ color: '#f5f5f5d6', display: 'flex', margin:' 1.5rem' }} to="/dogs-house-app"><FaHome /></Link>
                        <span onClick={this.BntChangeDogs}><FaDog/></span>
                        <span onClick={this.BntChangeCats}><FaCat/></span>
                    </div>
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
                                <ModalBox/>
                            </CardStyle>

                        ))

                    }
                </AdoteWrapper>

                
            </div>
        );

    }


}



export default Adote