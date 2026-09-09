import React, { useEffect, useState } from "react";
import db from "@/data/db.json";
import HomeCard from "@/components/modules/HomeCard";

function Homes() {
  const [allHomes, setAllHomes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("-1");

  const [page, setPage] = useState(1);

  const paginationHandler = (event, page) => {
    event.preventDefault();
    // console.log("Next Page:", page);
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;

    const paginatedHomes = db.homes.slice(startIndex, endIndex);

    setAllHomes(paginatedHomes);
  };

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...allHomes].sort((a, b) => a.price - b.price);
        setAllHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...allHomes].sort(
          (a, b) => a.roomCount - b.roomCount,
        );
        setAllHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...allHomes].sort((a, b) => a.meterage - b.meterage);
        setAllHomes(newHomes);
        break;
      }
      default: {
        setAllHomes([...db.homes]);
      }
    }
  }, [sort]);

  useEffect(() => {
    const searchHandler = () => {
      let filteredHomes = db.homes.filter((home) =>
        home.title.includes(searchValue),
      );
      console.log(filteredHomes);
      if (filteredHomes == []) {
        setAllHomes([...db.homes]);
      } else {
        setAllHomes(filteredHomes);
      }
    };
    // searchHandler();
    setTimeout(searchHandler, 1000);
    return () => {
      clearTimeout(searchHandler);
    };
  }, [searchValue]);

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1" selected>
              انتخاب کنید
            </option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس متراژ</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="جستجو کنید"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="homes">
        {allHomes.slice(0, 3).map((home) => (
          <HomeCard key={home.id} {...home} />
        ))}
      </div>
      <ul className="pagination__list">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li
              className={`pagination__item`}
              onClick={(event) => {
                setPage(index + 1);
                paginationHandler(event, index + 1);
              }}
            >
              <a href="#" className={index + 1 == page ? "btn-active" : null}>
                {index + 1}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default Homes;
