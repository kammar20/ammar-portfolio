import { useState } from 'react';
import Form from './Form';

export default function Contact() {
  const [formData, setFormData] = useState({
    userEmail: '',
    userName: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(null);
  const [sendingState, setSendingState] = useState(false);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset value
    setIsError(null);
    setIsSent(false);
    setSendingState(true);

    //
    const data = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        to_name: 'Ammar',
        from_name: formData.userName,
        from_email: formData.userEmail,
        message: formData.message,
      },
    };

    try {
      const res = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Failed to send the message. Please try again later.`);
      }

      // else
      setIsSent(true);
      setFormData({
        userEmail: '',
        userName: '',
        message: '',
      });

      // Remove success message after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } catch (err) {
      setIsError(err.message || 'Something went wrong. Please try again.');
      setTimeout(() => {
        setIsError(null);
      }, 5000); // Clear error after 5 seconds
    } finally {
      setSendingState(false);
    }
  };

  return (
    <section className="mb-32">
      <h5 className="text-lg text-neutral-50 font-semibold mb-6">Contact</h5>
      <Form
        formData={formData}
        setFormData={setFormData}
        isSent={isSent}
        isError={isError}
        sendingState={sendingState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
