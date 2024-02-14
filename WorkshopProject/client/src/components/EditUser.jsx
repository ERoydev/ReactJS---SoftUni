import { useState } from "react";

const EditUser = ({
    hideModal,
    editUserHandler,
    data

}) => {
    const [userData, setUserData] = useState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        imageUrl: data.imageUrl,
        address: {
            country: data.address.country,
            city: data.address.city,
            street: data.address.street,
            streetNumber: data.address.streetNumber,
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if  (['country', 'city', 'street', 'streetNumber'].includes(name)) {
            setUserData(state => ({...state, address: {...state, [name]: value}}));
        } else {
            setUserData(state => ({...state, [name]: value}));
        };
    };


    return (
        <div className="overlay">
        <div className="backdrop" onClick={hideModal} />
        <div className="modal">
            <div className="user-container">
            <header className="headers">
                <h2>Edit User</h2>
                <button className="btn close" onClick={hideModal}>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                    fill="currentColor"
                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                    ></path>
                </svg>
                </button>
            </header>
            <form onSubmit={editUserHandler}>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-user" />
                    </span>
                    <input id="firstName" name="firstName" type="text" value={userData.firstName} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-user" />
                    </span>
                    <input id="lastName" name="lastName" type="text" value={userData.lastName} onChange={handleChange}/>
                    </div>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-envelope" />
                    </span>
                    <input id="email" name="email" type="text" value={userData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-phone" />
                    </span>
                    <input id="phoneNumber" name="phoneNumber" type="text" value={userData.phoneNumber} onChange={handleChange}/>
                    </div>
                </div>
                </div>
                <div className="form-group long-line">
                <label htmlFor="imageUrl">Image Url</label>
                <div className="input-wrapper">
                    <span>
                    <i className="fa-solid fa-image" />
                    </span>
                    <input id="imageUrl" name="imageUrl" type="text" value={userData.imageUrl} onChange={handleChange}/>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-map" />
                    </span>
                    <input id="country" name="country" type="text" value={userData.address.country} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-city" />
                    </span>
                    <input id="city" name="city" type="text" value={userData.address.city} onChange={handleChange}/>
                    </div>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-map" />
                    </span>
                    <input id="street" name="street" type="text" value={userData.address.street} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="streetNumber">Street number</label>
                    <div className="input-wrapper">
                    <span>
                        <i className="fa-solid fa-house-chimney" />
                    </span>
                    <input id="streetNumber" name="streetNumber" type="text" value={userData.address.streetNumber} onChange={handleChange}/>
                    </div>
                </div>
                </div>
                <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                    Save
                </button>
                <button id="action-cancel" className="btn" type="button" onClick={hideModal}>
                    Cancel
                </button>
                </div>
            </form>
            </div>
        </div>
    </div>

    );
}

export default EditUser