import './Page1.css';
import countries from '../utils/countries';
import { useState } from 'react';
import Header from '../components/Header';



function Page1() {

    const [formObject, setFormObject] = useState({
        email: "",
        password: "",
        country: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false,
        country: false,
        acceptCGU: false
    });

    const [checkboxValues, setCheckboxValues] = useState({
        acceptCGU: false
    });

    const valueChanged = event => {
        const {name, value} = event.target;
        const formObject_ = {...formObject};
        formObject_[name] = value;
        setFormObject(formObject_);
    };

    const checkChanged = event => {
        const {name, checked} = event.target;
        const checkboxValues_ = {...checkboxValues};
        checkboxValues_[name] = checked;
        setCheckboxValues(checkboxValues_);
    }

    const onSubmit = event => {
        event.preventDefault();
        const formErrors_ = {...formErrors};
        formErrors_.email = formObject.email.trim().length < 6;
        formErrors_.password = formObject.password.trim().length < 6;
        formErrors_.country = formObject.country.trim().length < 2;
        formErrors_.acceptCGU = !checkboxValues.acceptCGU;
        setFormErrors(formErrors_);
    };

    return (
        <div className='Page1'>
            <Header/>
           <form onSubmit={onSubmit}>
                <h1>
                    Créer un compte
                </h1>

                <div className='form-field'>
                    <label htmlFor="email-input">
                        Email:
                    </label>
                    <input id="email-input" type="email" name="email" onChange={valueChanged} value={formObject.email} />
                    {formErrors.email && <p className="error-msg"> Adresse mail non valide</p>}
                </div>
                <div className='form-field'>
                    <label htmlFor="password-input">
                        Mot de passe:
                    </label>
                    <input id="password-input" type="password" name="password" onChange={valueChanged} value={formObject.password} />
                    {formErrors.password && <p className="error-msg">Le mot de passe doit contenir au moins 6 caractères</p>}
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
                    {formErrors.country && <p className="error-msg">Vous devez sélectionner un pays</p>}
                </div>
                <div className='form-field'>
                    <label htmlFor="accept-cgu-checkbox">
                            J'accepte les conditions générales d'utilisation
                    </label>
                    <input id="accept-cgu-checkbox" type="checkbox" name="acceptCGU" onChange={checkChanged} value={checkboxValues.acceptCGU} />
                    {formErrors.acceptCGU && <p className="error-msg">Vous devez accepter les CGU</p>}
                </div>

                <input type="submit" value="S'inscrire"/>
           </form>
        </div>
    )
}

export default Page1;