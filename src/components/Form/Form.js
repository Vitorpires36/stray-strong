import React, { useState } from 'react';
import './Form.css';

const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    participationType: 'host',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Thank you for joining! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      city: '',
      participationType: 'host',
      message: ''
    });
    onClose(); // Fecha o modal após envio
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="form-header">
          <h2 className="form-title">JOIN THE WAITLIST</h2>
          <p className="form-subtitle">Be part of the Stray Strong movement</p>
        </div>

        <form className="waitlist-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              placeholder="Your city"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">I want to:</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="participationType"
                  value="host"
                  checked={formData.participationType === 'host'}
                  onChange={handleChange}
                />
                <span className="radio-text">🏠 Host a feeder in my neighborhood</span>
              </label>
              
              <label className="radio-option">
                <input
                  type="radio"
                  name="participationType"
                  value="supply"
                  checked={formData.participationType === 'supply'}
                  onChange={handleChange}
                />
                <span className="radio-text">💧 Supply existing feeders</span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="participationType"
                  value="both"
                  checked={formData.participationType === 'both'}
                  onChange={handleChange}
                />
                <span className="radio-text">🌟 Both - host and supply</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="3"
              placeholder="Tell us about your interest in the project..."
            />
          </div>

          <button type="submit" className="form-submit">
            Join Waitlist
          </button>

        </form>
      </div>
    </div>
  );
};

export default Form;