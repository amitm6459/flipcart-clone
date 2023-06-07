import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getProducts } from "../../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;
const InputSearchContainer = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SerachIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;


`
function Search(props) {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  const getText = (text) => {
    setText(text);
    console.log(text)
  };
  return (
    <SearchContainer>
      <InputSearchContainer
        placeholder="serach for the product, brands,more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SerachIconWrapper>
        <SearchIcon />
      </SerachIconWrapper>
      {text && (
        <ListWrapper>
          {
            products.filter((product) =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
              <ListItem>
                <Link
                 to={`/product/${product.id}`}
                 onClick={()=> setText('')}
                 style={{textDecoration:'none',color:'inherit'}}
                >
                    {product.title.longTitle}
                </Link>  
              </ListItem>
      ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;
