import { useState } from "react";
import SearchResultComponent from "./SearchResultComponent";

function SearchComponent(props) {

    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState({});

    function inputHandler(evt) {
        console.log("Input:", evt.target.value);
        setSearchText(evt.target.value);
    }

    function search() {
        if (searchText) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
            .then((response) => {
                return response.json();
            })
            .then(value => {
                setSearchResult(value);
                console.dir(value);
            })
            .catch(reason => {
                setSearchResult({});
            });
        }
    }

    return(
        <>
            <input type="text" onInput={inputHandler}/>
            <button onClick={search}>Search</button>
                <div>
                    Search text: {searchText}
                </div>

                <SearchResultComponent items={searchResult.items}/>
        </>
    );
}

export default SearchComponent;