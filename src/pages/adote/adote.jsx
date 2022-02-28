import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { VscHome, VscHistory, VscLaw, VscCreditCard } from "react-icons/vsc";
import { FaCat, FaDog, FaHome } from 'react-icons/fa';

import { AdoteWrapper, CardStyle } from './styles/adote.styles';
import { NavBar } from './styles/adote.nav.styles';
import ModalBox from '../../component/modal/modal';



function Adote() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
        axios.get(`https://dogs-house-data.herokuapp.com/pets?name=${query}`)
            .then((res) => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setFilteredPets(
            data.filter(pet => {
                return pet.name.toLowerCase().includes(query.toLowerCase());
            })
        )
    }, [query, data])

    return (
        <div>
            <NavBar>
                <h1>Dog's House</h1>
                <input className='search' value={query} placeholder='Pesquise um nome...' onChange={(e) => setQuery(e.target.value)} />
                <div>
                    <Link className='link' style={{ color: '#f5f5f5d6', display: 'flex', margin: ' 1.5rem' }} to="/dogs-house-app"><FaHome /></Link>
                    <span><FaDog /></span>
                    <span><FaCat /></span>
                </div>
            </NavBar>
            <AdoteWrapper>
                {
                    filteredPets.map(({ _id, name, estado, idade, peso, url }) => (
                        <CardStyle key={_id}>
                            <img alt='Pet Img' src={url}></img>
                            <h1>{name}</h1>

                            <div className='grid'>
                                <span><VscHome /> {estado}</span>
                                <span><VscHistory /> {idade}</span>
                                <span><VscLaw /> {peso}</span>
                                <span><VscCreditCard /> Apadrinhe!</span>
                            </div>
                            <ModalBox />
                        </CardStyle>
                    ))
                }
            </AdoteWrapper>
        </div>
    );
}

export default Adote