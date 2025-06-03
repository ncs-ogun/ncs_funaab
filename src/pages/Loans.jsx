/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiX, FiAlertCircle, FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';
import { loanTypes, calculateLoanMetrics } from '../data/loans';
import LoanDetails from '../components/LoanDetails';

const Loans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
    duration: '',
    farmDetails: '',
    experience: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedActiveLoan, setSelectedActiveLoan] = useState(null);

  // Mock active loans data with more details
  const activeLoansMock = [
    {
      id: 1,
      type: 'Small Farm Loan',
      amount: 200000,
      nextPayment: '2024-04-03',
      status: 'active',
      progress: 30,
      startDate: '2024-01-01',
      totalPayments: 12,
      documents: [
        { name: 'Loan Agreement', url: '#' },
        { name: 'Payment Schedule', url: '#' },
        { name: 'Terms & Conditions', url: '#' }
      ]
    },
    {
      id: 2,
      type: 'Equipment Loan',
      amount: 1500000,
      nextPayment: '2024-04-15',
      status: 'pending',
      progress: 0,
      startDate: '2024-02-01',
      totalPayments: 36,
      documents: [
        { name: 'Loan Agreement', url: '#' },
        { name: 'Payment Schedule', url: '#' },
        { name: 'Terms & Conditions', url: '#' }
      ]
    }
  ];

  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
    setShowApplication(false);
    setShowDashboard(false);
  };

  const handleStartApplication = () => {
    setShowApplication(true);
    setShowDashboard(false);
  };

  const handleViewDashboard = () => {
    setShowDashboard(true);
    setShowApplication(false);
    setSelectedLoan(null);
  };

  const handleViewLoanDetails = (loan) => {
    setSelectedActiveLoan(loan);
  };

  const handleCloseLoanDetails = () => {
    setSelectedActiveLoan(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Here you would typically make an API call to submit the loan application
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        amount: '',
        purpose: '',
        duration: '',
        farmDetails: '',
        experience: ''
      });
      setShowApplication(false);
      setShowDashboard(true);
    } catch (error) {
      setFormErrors({
        submit: 'Failed to submit application. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="loans-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Agricultural Loans
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            Flexible financing solutions for your farming needs
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="loans-container">
        {/* Navigation Tabs */}
        <div className="loans-tabs">
          <button 
            className={`tab-button ${!showDashboard ? 'active' : ''}`}
            onClick={() => {
              setShowDashboard(false);
              setSelectedLoan(null);
            }}
          >
            Available Loans
          </button>
          <button 
            className={`tab-button ${showDashboard ? 'active' : ''}`}
            onClick={handleViewDashboard}
          >
            My Loans Dashboard
          </button>
        </div>

        {showDashboard ? (
          // Loans Dashboard
          <div className="loans-dashboard">
            <div className="dashboard-header">
              <h2>My Loans Overview</h2>
              <div className="dashboard-stats">
                <div className="stat-card">
                  <FiDollarSign className="stat-icon" />
                  <div>
                    <h3>Total Active Loans</h3>
                    <p>₦1,700,000</p>
                  </div>
                </div>
                <div className="stat-card">
                  <FiCalendar className="stat-icon" />
                  <div>
                    <h3>Next Payment Due</h3>
                    <p>April 3, 2024</p>
                  </div>
                </div>
                <div className="stat-card">
                  <FiClock className="stat-icon" />
                  <div>
                    <h3>Payment Status</h3>
                    <p className="text-success">Up to date</p>
                  </div>
                </div>
              </div>

              <div className="active-loans">
                <h3>Active Loans</h3>
                <div className="loans-table">
                  {activeLoansMock.map(loan => (
                    <div key={loan.id} className="loan-row">
                      <div className="loan-info">
                        <h4>{loan.type}</h4>
                        <p>₦{loan.amount.toLocaleString()}</p>
                      </div>
                      <div className="loan-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${loan.progress}%` }}
                          />
                        </div>
                        <p>{loan.progress}% Repaid</p>
                      </div>
                      <div className="loan-status">
                        <span className={`status-badge ${loan.status}`}>
                          {loan.status}
                        </span>
                        <p>Next: {new Date(loan.nextPayment).toLocaleDateString()}</p>
                      </div>
                      <button 
                        className="view-details-btn"
                        onClick={() => handleViewLoanDetails(loan)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : showApplication ? (
          // Loan Application Form
          <div className="loan-application">
            <div className="application-header">
              <h2>Apply for {selectedLoan.name}</h2>
              <p>Fill out the form below to apply for your loan</p>
            </div>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.fullName && (
                    <span className="error-message">{formErrors.fullName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="amount">Loan Amount (₦)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    max={selectedLoan.maxAmount}
                    required
                  />
                  <small>Maximum amount: ₦{selectedLoan.maxAmount.toLocaleString()}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Loan Duration</label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select duration</option>
                    {selectedLoan.duration.split('-').map(months => (
                      <option key={months} value={months}>
                        {months} months
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="purpose">Loan Purpose</label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="farmDetails">Farm Details</label>
                  <textarea
                    id="farmDetails"
                    name="farmDetails"
                    value={formData.farmDetails}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Describe your farm size, location, and current operations"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="experience">Farming Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Describe your farming experience and any relevant training"
                  />
                </div>
              </div>

              {formErrors.submit && (
                <div className="error-message text-center">{formErrors.submit}</div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => setShowApplication(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Loans Listing
          <div className="loans-grid">
            {loanTypes.map(loan => (
              <motion.div
                key={loan.id}
                className={`loan-card ${selectedLoan?.id === loan.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => handleLoanSelect(loan)}
              >
                <div className="loan-card-header">
                  <span className="loan-icon">{loan.icon}</span>
                  <h3>{loan.name}</h3>
                  <p className="loan-amount">Up to ₦{loan.maxAmount.toLocaleString()}</p>
                </div>

                <div className="loan-details">
                  <div className="loan-feature">
                    <FiClock />
                    <span>Duration: {loan.duration}</span>
                  </div>
                  <div className="loan-feature">
                    <FiDollarSign />
                    <span>Interest Rate: {loan.interestRate}</span>
                  </div>
                </div>

                <p className="loan-description">{loan.description}</p>

                {selectedLoan?.id === loan.id && (
                  <motion.div
                    className="loan-expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="loan-sections">
                      <div className="loan-section">
                        <h4>Features</h4>
                        <ul>
                          {loan.features.map((feature, index) => (
                            <li key={index}>
                              <FiCheck className="feature-icon" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="loan-section">
                        <h4>Requirements</h4>
                        <ul>
                          {loan.requirements.map((req, index) => (
                            <li key={index}>
                              <FiArrowRight className="feature-icon" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="loan-section">
                        <h4>Eligibility</h4>
                        <ul>
                          {loan.eligibility.map((item, index) => (
                            <li key={index}>
                              <FiCheck className="feature-icon" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="loan-calculator">
                      <h4>Loan Calculator</h4>
                      <div className="calculator-result">
                        {calculateLoanMetrics(1000000, parseFloat(loan.interestRate), loan.duration).monthlyPayment.toLocaleString()}
                        <span className="calculator-label">Estimated Monthly Payment (₦)</span>
                      </div>
                    </div>

                    <button
                      className="apply-button"
                      onClick={handleStartApplication}
                    >
                      Apply Now
                      <FiArrowRight />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Loan Details Modal */}
      {selectedActiveLoan && (
        <LoanDetails
          loan={selectedActiveLoan}
          onClose={handleCloseLoanDetails}
        />
      )}
    </div>
  );
};

export default Loans; 