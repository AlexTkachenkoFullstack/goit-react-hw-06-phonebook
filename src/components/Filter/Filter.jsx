import React from "react";
import { FilterContainer,FilterLable, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";

function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(setStatusFilter(event.target.value))
    }

    return (<FilterContainer>
                <FilterLable htmlFor="findContacts">Find contacts by name</FilterLable>
                <FilterInput type="text" id='findContacts' onChange={handleFilterChange}/>
            </FilterContainer>
                )
}


export default Filter
