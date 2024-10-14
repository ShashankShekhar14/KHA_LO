import React,{useEffect, useState} from 'react'
import "../Style/Contact.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [name,setName]=useState("");
  const [msg,setMsg]=useState("");
  const [state, handleSubmit] = useForm("xzblobrj");
  if (state.succeeded) {
    toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    const mailtoLink = `mailto:shekharshashank093@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoLink;
    document.getElementById("myForm").reset();

  }
  useEffect(() => {
    document.title="KhaLo | Contact"
   },[])
  return (
    <div className='Contact' >
       <form id='myForm' onSubmit={handleSubmit} className='form'>
        <input className='inputs' type="text" value={name} onChange={(e)=>setName(e.target.value)} name='Name' placeholder='Enter Your Name'autoComplete='off' required />
        <input className='inputs' type="text" name='Phoneno' placeholder='Enter Your Phone no.' autoComplete='off' required />
        <input className='inputs' type="text" name='Email' placeholder='Enter Your E-mail' autoComplete='off' required />
        <input className='inputs' type="text" value={msg} name='Message'onChange={(e)=>setMsg(e.target.value)} placeholder='Enter The Message' autoComplete='off' required />
        <button type='submit' className='formbtn' disabled={state.submitting}>Submit</button>
       </form>
       <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  )
}

export default Contact;