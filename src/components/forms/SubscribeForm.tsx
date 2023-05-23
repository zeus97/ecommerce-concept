import React, { useState, useEffect } from 'react'
import '../../styles/SubscribeForm.scss'
import image from '../../images/image4.jpg'
//Interface
import { IForm } from '../../interfaces/index'

interface Props {
    closeForm: ()=> void,
    animation:boolean
}

function SubscribeForm({closeForm,animation}:Props) {

    const initialValues:IForm = {
        email:''
    };


    const [data, setData] = useState<IForm>(initialValues);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setData({email: e.target.value});
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(data.email.length > 0  )
        {
            alert('¡Thanks for Subscribe!');
            closeForm();
        }
    }

  return (
    <div className={animation ? 'form-c-box animation-form' : 'form-c-box'}>
        <div className='form-c'>
            <img className='' src={image} alt='...' />
    
            <div className=''>
                <i className="bi bi-x" onClick={closeForm}></i>
                <h2> Subscribe now and get</h2>
                <h3>20% off your next order!</h3>
                <form onSubmit={handleSubmit}>
                    <input type='email'
                     name='email'
                     id='email'
                     placeholder='example@email.com'
                     value={data.email}
                     onChange={handleChange}
                     />
                     <button type='submit' className='btn btn-warning'>Subscribe</button>
                </form>

            </div>

        </div>
    </div>
  )
}

export default SubscribeForm