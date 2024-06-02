import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactFormulaire() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParameters = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_lru9jxr',
        'template_ncpgpjp',
        templateParameters,
        'cPhUqYjZA7L_RoZyS'
      )
      .then(
        (response) => {
          console.log('Success', response.status, response.text);
          setStatus('message sent succefully');
          setName('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.error('Failed...', err);
          setStatus('Failed send message, Please try again.');
        }
      );
  };
  return (
    <div className="contactForm">
      <h2>Contact form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
