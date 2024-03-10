import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import useAlert from "../hooks/useAlert"
import { Alert, Loader } from '../components';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const { alert, showAlert, hideAlert } = useAlert()
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };
  const handleFocus = (e) => {};
  const handleBlur = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ashok",
        from_email: form.email,
        to_email: "ashok.reddy.6790@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message!.",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      },
      (error) => {
        setIsLoading(false);
        console.error(error);

        showAlert({
          show: true,
          text: "Something went wrong. I didn't receive your message.",
          type: "danger",
        });
      }
    );
  };

  return (
    <section className='relative flex lg:flex-row flex-col
     max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1>Let's Connect</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input type='text' name='name' className='input' 
              placeholder='Name' required value={form.name} 
              onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input type='email' name='email' className='input' 
              placeholder='xyz@outlook.com' required value={form.email} 
              onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea name='message' className='input' 
              rows={4}
              placeholder='How can I be of service to you?' required value={form.message} 
              onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <button type='submit' className='btn' disabled={isLoading}
            onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact