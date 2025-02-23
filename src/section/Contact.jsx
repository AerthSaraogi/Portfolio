import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChanges = ({target:{name,value}})=>{
        setForm({ ...form, [name]: value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        setLoading(true) 
    }
  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal" className='absolute inset-0 min-h-screen' />
             <div className='contact-container xl:py-20'>
                <h3 className='head-text'> Let's Talk</h3>
                <p className='text-base xl:text-lg text-white-600 mt-3'>
                    Whether you're looking to build a new website,improve your existing platform, or bring a unique project to life ,I'm here for you.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className='mt-5 xl:mt-12 flex flex-col space-y-4 xl:space-y-7'>
                    <label className='xl:space-y-3 space-y-1'>
                        <span className='field-label'>Full Name</span>
                        <input type="text" name='name' value={form.name} onChange={handleChanges} required className='field-input' placeholder='Aerth Saraogi' />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" name='email' value={form.email} onChange={handleChanges} required className='field-input' placeholder='aerthsaraogi9@gmail.com' />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea name='message' value={form.message} onChange={handleChanges} row={5} className='field-input' placeholder='Hi,I wanna give you a job... ' />
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending...':'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
             </div>
        </div>
    </section>
  )
}

export default Contact