import React, { useEffect, useState } from 'react'
import Details from './Details';
import axios from 'axios';

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
        const config = { headers: { "Content-Type": "application/json" } };
        axios.post(`/api/v1/property/add`, property, config)
        .then(res => {
            alert('Data added successfully!');
            const { data } = res;
            setDetails([...data.properties]);
        })
        .catch(err => {
            alert('Oops! An unexpected error occurred while adding the record!!');
            console.log(err);
        });
        
    }

    const handleReset = () => {
        setProperty({name: '', description: '', size: ''});
    }

    const deleteDetails = (id) => {
        axios.delete(`/api/v1/property/delete/${id}`)
        .then(res => {
            alert('Record deleted successfully!');
            const { data } = res;
            setDetails([...data.properties]);
        })
        .catch(err => {
            alert('Oops! An unexpected error occurred while deleting a record!!');
            console.log(err);
        })
    }

    useEffect(() => {
        axios.get(`/api/v1/property/get`)
        .then(res => {
            const { data } = res;
            setDetails([...data.properties]);
        })
    }, []);

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
                details && details.map((property) => (
                    <Details key={property._id.toString()} property={property} delete={deleteDetails}/>
                ))
            }
        </>
    )
}

export default Property
