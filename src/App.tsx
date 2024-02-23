import { useState } from 'react'

type CountryValues = {
    name: string
    checked: boolean
}
const COUNTRIES = ['India', 'USA', 'France']
const COUNTRIES_DATA: CountryValues[] = COUNTRIES.map((country) => ({
    name: country,
    checked: false,
}))

function App() {
    const [selectedCountries, setSelectedCountries] =
        useState<CountryValues[]>(COUNTRIES_DATA)

    const handleCheckboxChange = (country: CountryValues, index: number) => {
        const values = [...selectedCountries]
        values.splice(index, 1, {
            ...country,
            checked: !country.checked,
        })
        setSelectedCountries(values)
    }

    const allCountriesSelected = selectedCountries.every(
        (country) => country.checked
    )

    const handleSelectAllChange = () => {
        setSelectedCountries((prev) =>
            prev.map((country) => ({
                ...country,
                checked: allCountriesSelected ? false : true,
            }))
        )
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                margin: 'auto auto',
                width: '20vw',
                height: '80vh',
                fontSize: '1.5rem',
            }}
        >
            <div>
                <input
                    type="checkbox"
                    id={`select_all_id`}
                    checked={allCountriesSelected}
                    onChange={() => handleSelectAllChange()}
                />
                <label htmlFor={`select_all_id`}>Select all</label>
            </div>
            {selectedCountries.map((country, i) => (
                <div key={country.name}>
                    <input
                        type="checkbox"
                        id={`${country.name}_id`}
                        checked={country.checked}
                        onChange={() => handleCheckboxChange(country, i)}
                    />
                    <label htmlFor={`${country.name}_id`}>{country.name}</label>
                </div>
            ))}
        </div>
    )
}

export default App
