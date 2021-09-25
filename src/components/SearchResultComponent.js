import {Col, Row, Table} from "react-bootstrap";

function SearchResultComponent(props) {
    return (
      <Row>
            {props.items &&
                <Col>
                    <h2>Search result</h2>

                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>title</th>
                            <th>subtitle</th>
                            <th>authors</th>
                            <th>descriptions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.volumeInfo.title}</td>
                                    <td>{item.volumeInfo.subtitle}</td>
                                    <td>{item.volumeInfo.authors}</td>
                                    <td>{item.volumeInfo.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </Table>
                </Col>
            }
      </Row>
    );
}

export default SearchResultComponent;