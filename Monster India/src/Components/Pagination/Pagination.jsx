

let style = {
    width: "50px",
    padding: "5px",
    margin: "5px",
    border: "1px solid black",
    cursor: "pointer",
    borderRadius: "20px ",
};
export const Pagination = ({
    perPage,
    totalPages = 1,
    currentPage,
    onChange,
}) => {
    let arr = new Array(totalPages).fill(0).map((_, i) => i + 1);
    console.log(arr, currentPage);
    return (
        <>
            <div
                style={{
                    display: "flex",
                }}
            >
                {arr.map((item) =>
                    item === currentPage ? (
                        <div
                            onClick={() => onChange(item)}
                            key={item}
                            style={{ backgroundColor: "darkslateblue", ...style }}
                        >
                            
                            {item}
                        </div>
                    ) : (
                        <div
                            onClick={() => onChange(item)}
                            key={item}
                            style={{ ...style }}
                        >
                            {item}
                        </div>
                    )
                )}
            </div>
        </>
    );
};



