import { useState } from "react"

import './search.css'
export function SearchComponent() {

    const list = [
        "Restaurant", "Beauty", "Hotel", "Contractor", "Tutors", "Event Planner", "Gym", "Jewellery"
    ]

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilterList(null);
            return;
        }
        const filteredValues = list.filter((item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setFilterList(filteredValues);

    }

    return (
        <div >
            <div className="main ">
                <input type="text" name="query" onChange={handleSearch} className="form-control mt-3" placeholder="Search"></input>
            </div>
            {
                filterList && filterList.map((item, index) => (
                    <div className="list" key={index}>{item}</div>
                ))
            }
        </div>
    )
}



