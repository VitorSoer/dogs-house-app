import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import {
  VscHome,
  VscHistory,
  VscLaw,
  VscCreditCard,
  VscSearch,
} from "react-icons/vsc";
import { AdoteWrapper, CardStyle, SearchStyle } from "./styles/adote.styles";
import ModalBox from "../../component/modal/modal";
import Navbar from "../../component/navbar/navbar";
import { PaginateWrapper } from "./styles/pagination.styles";
import Skeleton from "../../component/skeleton/skeleton";

function Adote() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(filteredPets.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios
      .get(`https://dogs-house-data.herokuapp.com/pets?name=${query}`)
      .then((res) => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setFilteredPets(
      data.filter((pet) => {
        return pet.name.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [query, data]);

  return (
    <div>
      <Navbar />
      <SearchStyle>
        <label>Encontre seu pet:</label>
        <input
          className="search"
          value={query}
          placeholder="Pesquise um nome..."
          onChange={(e) => {
            setQuery(e.target.value);
            setPageNumber(0);
          }}
        />
        <VscSearch />
      </SearchStyle>
      <AdoteWrapper>
        {loading ? (
          filteredPets
            .slice(pageVisited, pageVisited + userPerPage)
            .map(({ _id, name, estado, idade, peso, url }) => (
              <CardStyle key={_id}>
                <img alt="Pet Img" src={url}></img>
                <h1>{name}</h1>

                <div className="grid">
                  <span>
                    <VscHome /> {estado}
                  </span>
                  <span>
                    <VscHistory /> {idade}
                  </span>
                  <span>
                    <VscLaw /> {peso}
                  </span>
                  <span>
                    <VscCreditCard /> Apadrinhe!
                  </span>
                </div>
                <ModalBox />
              </CardStyle>
            ))
        ) : (
          <Skeleton />
        )}
      </AdoteWrapper>
      <PaginateWrapper>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"disabledBtn"}
          activeClassName={"activeBtn"}
        />
      </PaginateWrapper>
    </div>
  );
}

export default Adote;
