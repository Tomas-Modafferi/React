import { useState } from "react";
import useFetch from "../../hooks/useGetFireStore";
import CardItem from "../ItemListContainer/CardItem";
import Circles from "../Spinner";
import {Link} from "react-router-dom"


const GameCenter = () => {
  const { items, loading } = useFetch();
  return (
    <>
      {loading ? (
        <Circles color="black" height="100" width="100"/>
      ) : (
        <div className="grid">
          {items.map((item) => {
            return(
              <Link to={`detail/${item.id}`} key={item.id} style={{textDecoration:"none"}}>
                <CardItem item={item}/>
              </Link>
            )
          }
          )}
        </div>
      )}
    </>
  );
};

export default GameCenter;
