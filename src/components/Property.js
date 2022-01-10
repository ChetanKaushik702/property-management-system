import React, { useState } from 'react'
import Details from './Details';

function Property() {

    const [details, setDetails] = useState([]);

    const [property, setProperty] = useState({
        name: '',
        description: '',
        size: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name] : value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetails([...details, {...property, id: details.length}]);
    }

    const handleReset = () => {
        setProperty({name: '', description: '', size: ''});
    }

    const deleteDetails = (id) => {
        setDetails(details => {
            return details.filter(property => property.id !== id);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="form-group" style={{width: "50%", margin: "auto"}}>
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={property.name} onChange={handleChange} required />
            </div>
            <div className="form-group" style={{width: "50%", margin: "auto"}}>
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" name="description" value={property.description} onChange={handleChange} rows="3"></textarea>
            </div>
            <div className="form-group" style={{width: "50%", margin: "auto"}}>
                <label htmlFor="size">Size</label>
                <input type="number" className="form-control" id="size" name="size" value={property.size} onChange={handleChange} required />
            </div>
            <div className='text-center my-2'>
            <button type="submit" className="btn btn-primary mx-5 px-3">Submit</button>
            <button type="button" onClick={handleReset} className="btn btn-primary px-3">Reset</button>
            </div>
            </form>

            <hr/>
            <h3 style={{textAlign: 'center', marginTop: '20px'}}>Properties Added</h3>
            {
                details && details.map((property, id) => (
                    <Details key={id} property={property} delete={deleteDetails}/>
                ))
            }
        </>
    )
}

export default Property
