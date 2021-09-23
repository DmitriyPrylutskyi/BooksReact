function SearchResultComponent(props) {
    return (
        <>
            {props.items &&
            <table>
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
                    console.log("Item", item.volumeInfo);
                    return (
                        <tr>
                            <td>{item.volumeInfo.title}</td>
                            <td>{item.volumeInfo.subtitle}</td>
                            <td>{item.volumeInfo.authors}</td>
                            <td>{item.volumeInfo.description}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
            }
        </>
    );

}

export default SearchResultComponent;