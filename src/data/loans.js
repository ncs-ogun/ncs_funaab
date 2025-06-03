export const loanTypes = [
  {
    id: 'small-farm',
    name: 'Small Farm Loan',
    maxAmount: 500000,
    duration: '3-12 months',
    interestRate: '5%',
    icon: '🌱',
    description: 'Perfect for small-scale farmers looking to expand their operations',
    features: [
      'Quick approval within 48 hours',
      'Flexible repayment options',
      'No collateral required for loans under ₦200,000',
      'Free financial advisory services'
    ],
    requirements: [
      'Must be a registered farmer',
      'Valid ID and proof of address',
      'Bank statements for the last 6 months',
      'Farm location and size details',
      'Proposed use of funds'
    ],
    eligibility: [
      'Minimum 1 year farming experience',
      'Age between 18-65 years',
      'No existing agricultural loans',
      'Valid bank account'
    ]
  },
  {
    id: 'equipment',
    name: 'Farm Equipment Loan',
    maxAmount: 2000000,
    duration: '12-36 months',
    interestRate: '7%',
    icon: '🚜',
    description: 'Finance your farming equipment and machinery needs',
    features: [
      'Up to ₦2 million funding',
      'Extended repayment period',
      'Equipment insurance included',
      'Technical support available'
    ],
    requirements: [
      'Business registration documents',
      'Valid ID and proof of address',
      'Bank statements for the last 12 months',
      'Equipment quotation from approved vendors',
      'Farm business plan'
    ],
    eligibility: [
      'Minimum 2 years farming experience',
      'Age between 18-65 years',
      'Good credit history',
      'Profitable farm operations'
    ]
  },
  {
    id: 'livestock',
    name: 'Livestock Development Loan',
    maxAmount: 1500000,
    duration: '6-24 months',
    interestRate: '6%',
    icon: '🐄',
    description: 'Grow your livestock business with flexible financing',
    features: [
      'Customized repayment schedule',
      'Livestock insurance included',
      'Veterinary support services',
      'Access to market linkages'
    ],
    requirements: [
      'Livestock farming experience proof',
      'Valid ID and proof of address',
      'Bank statements for the last 9 months',
      'Livestock management plan',
      'Veterinary certification'
    ],
    eligibility: [
      'Minimum 18 months livestock farming experience',
      'Age between 18-65 years',
      'Adequate farming facilities',
      'No defaults on previous loans'
    ]
  },
  {
    id: 'agro-processing',
    name: 'Agro-Processing Loan',
    maxAmount: 5000000,
    duration: '12-48 months',
    interestRate: '8%',
    icon: '🏭',
    description: 'Finance your agricultural processing and value addition projects',
    features: [
      'High funding limit',
      'Grace period available',
      'Business development support',
      'Export market access support'
    ],
    requirements: [
      'Business registration certificate',
      'Valid ID and proof of address',
      'Audited accounts for 2 years',
      'Processing facility details',
      'Environmental impact assessment'
    ],
    eligibility: [
      'Registered business entity',
      'Minimum 3 years business experience',
      'Good credit history',
      'Valid processing permits'
    ]
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse Farming Loan',
    maxAmount: 3000000,
    duration: '12-36 months',
    interestRate: '6.5%',
    icon: '🏡',
    description: 'Start or expand your greenhouse farming operations',
    features: [
      'Competitive interest rates',
      'Technical support included',
      'Flexible repayment terms',
      'Insurance coverage'
    ],
    requirements: [
      'Land ownership/lease documents',
      'Valid ID and proof of address',
      'Bank statements for the last 12 months',
      'Greenhouse construction plan',
      'Crop production schedule'
    ],
    eligibility: [
      'Agricultural training certification',
      'Age between 18-65 years',
      'Clean credit record',
      'Suitable land location'
    ]
  }
];

export const loanStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  DEFAULTED: 'defaulted'
};

export const calculateLoanMetrics = (amount, rate, duration) => {
  const monthlyRate = (rate / 100) / 12;
  const months = parseInt(duration.split('-')[1]);
  const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  
  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(monthlyPayment * months),
    totalInterest: Math.round((monthlyPayment * months) - amount)
  };
};

export const validateLoanApplication = (data) => {
  const errors = {};
  
  if (!data.fullName) errors.fullName = 'Full name is required';
  if (!data.email) errors.email = 'Email is required';
  if (!data.phone) errors.phone = 'Phone number is required';
  if (!data.amount) errors.amount = 'Loan amount is required';
  if (!data.purpose) errors.purpose = 'Loan purpose is required';
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 