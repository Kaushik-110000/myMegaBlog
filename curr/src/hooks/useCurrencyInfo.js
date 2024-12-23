import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-19/v1/currencies/${currency}.json`)
            .then((val) => {
                return val.json();
            })
            .then((val) => {
                setData(val[currency]);
            })
    }, [currency]);
    // console.log(data);
    return data
}

export default useCurrencyInfo
//* We returned the entire method