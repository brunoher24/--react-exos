import './Page1.css';
import countries from '../utils/countries';
import { useState } from 'react';


function Page1() {

    const [formObject, setFormObject] = useState({
        email: "",
        password: "",
        country: ""
    });

    const valueChanged = event => {
        const {name, value} = event.target;
        const formObject_ = {...formObject};
        formObject_[name] = value;
        setFormObject(formObject_);
    };

    return (
        <div className='Page1'>
           <form>
                <h1>
                    Créer un compte
                </h1>

                <div className='form-field'>
                    <label htmlFor="email-input">
                        Email:
                    </label>
                    <input id="email-input" type="email" name="email" onChange={valueChanged} value={formObject.email} />
                </div>
                <div className='form-field'>
                    <label htmlFor="password-input">
                        Mot de passe:
                    </label>
                    <input id="password-input" type="password" name="password" onChange={valueChanged} value={formObject.password} />
                </div>
                <div className='form-field'>
                    <label htmlFor="country-select">
                       Pays :
                    </label>
                    <select id="country-select" name="country" onChange={valueChanged} value={formObject.country}>
                        <option value="">--Sélectionner un pays--</option>
                        {countries.map(country => (
                            <option key={country.code} value={country.code}>{country.name}</option>
                        ))}
                    </select>
                </div>

                <input type="submit" value="S'inscrire"/>
           </form>
        </div>
    )
}

export default Page1;