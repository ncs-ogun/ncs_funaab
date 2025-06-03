/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiX, FiDownload, FiCalendar, FiDollarSign, FiClock } from 'react-icons/fi';

const LoanDetails = ({ loan, onClose }) => {
  // Calculate repayment schedule
  const generateRepaymentSchedule = () => {
    const schedule = [];
    const totalMonths = Math.ceil(loan.progress / (100 / loan.totalPayments));
    const monthlyAmount = Math.round(loan.amount / loan.totalPayments);

    for (let i = 1; i <= loan.totalPayments; i++) {
      const date = new Date(loan.startDate);
      date.setMonth(date.getMonth() + i);
      
      schedule.push({
        paymentNo: i,
        dueDate: date.toISOString().split('T')[0],
        amount: monthlyAmount,
        status: i <= totalMonths ? 'Paid' : i === totalMonths + 1 ? 'Due' : 'Upcoming'
      });
    }

    return schedule;
  };

  return (
    <motion.div
      className="loan-details-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{loan.type}</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="loan-overview">
          <div className="overview-card">
            <FiDollarSign className="overview-icon" />
            <div>
              <h3>Loan Amount</h3>
              <p>₦{loan.amount.toLocaleString()}</p>
            </div>
          </div>
          <div className="overview-card">
            <FiCalendar className="overview-icon" />
            <div>
              <h3>Next Payment</h3>
              <p>{new Date(loan.nextPayment).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="overview-card">
            <FiClock className="overview-icon" />
            <div>
              <h3>Progress</h3>
              <p>{loan.progress}% Completed</p>
            </div>
          </div>
        </div>

        <div className="loan-progress-details">
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${loan.progress}%` }}
              />
            </div>
            <div className="progress-labels">
              <span>Start</span>
              <span>Current: {loan.progress}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="repayment-schedule">
          <div className="schedule-header">
            <h3>Repayment Schedule</h3>
            <button className="download-button">
              <FiDownload />
              Download Schedule
            </button>
          </div>

          <div className="schedule-table">
            <table>
              <thead>
                <tr>
                  <th>Payment No.</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {generateRepaymentSchedule().map((payment) => (
                  <tr key={payment.paymentNo}>
                    <td>{payment.paymentNo}</td>
                    <td>{new Date(payment.dueDate).toLocaleDateString()}</td>
                    <td>₦{payment.amount.toLocaleString()}</td>
                    <td>
                      <span className={`payment-status ${payment.status.toLowerCase()}`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="loan-documents">
          <h3>Loan Documents</h3>
          <div className="documents-grid">
            <button className="document-button">
              <FiDownload />
              Loan Agreement
            </button>
            <button className="document-button">
              <FiDownload />
              Payment Schedule
            </button>
            <button className="document-button">
              <FiDownload />
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanDetails; 