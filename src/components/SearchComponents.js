import { useState } from "react";
import SearchResultComponent from "./SearchResultComponent";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function SearchComponent(props) {

    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState({});

    function inputHandler(evt) {
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
            })
            .catch(reason => {
                setSearchResult({});
            });
        }
    }

    return(
      <Container>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary"
                  onClick={search}
                >
                  Search
                </Button>
                <FormControl
                  aria-label="search text"
                  aria-describedby="search"
                  onInput={inputHandler}
                />
              </InputGroup>
            </Col>
          </Row>

            <SearchResultComponent items={searchResult.items}/>
      </Container>
    );
}

export default SearchComponent;