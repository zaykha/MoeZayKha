import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Box = styled.form`
  display: grid; gap: 12px; max-width: 520px;
  border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; background: rgba(255,255,255,0.08);
  input, textarea { width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: #fff; }
  button { padding: 10px 12px; border-radius: 8px; background: #00f7ff; color: #000; border: none; cursor: pointer; }
`

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    // Lazy load emailjs to avoid blocking
    import('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js').then(() => {
      window.emailjs?.init?.('hanLzw9pqdz5PNq5a')
    }).catch(() => {})
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const form = formRef.current
      form.contact_number.value = Math.floor(Math.random() * 100000)
      await window.emailjs?.sendForm?.('contact_service', 'contact_form', form)
      setStatus('Message sent successfully!')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('Failed to send. Please try again later.')
    }
  }

  return (
    <Box ref={formRef} onSubmit={onSubmit} aria-label="Contact form">
      <input type="hidden" name="contact_number" />
      <label>
        Name
        <input required name="user_name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input required type="email" name="user_email" placeholder="Your email" />
      </label>
      <label>
        Message
        <textarea required name="message" rows="5" placeholder="How can I help?" />
      </label>
      <button type="submit">Send</button>
      {status ? <div role="status" style={{color:'#9aa0a6'}}>{status}</div> : null}
    </Box>
  )
}
