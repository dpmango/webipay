export default {
  header: {
    back: 'Cancel',
  },
  payment: {
    head: {
      merchant: 'Payment to:',
      back: 'Change option',
    },
    options: {
      title: 'Select a payment option:',
      pandapay: {
        name: 'Pandapay',
        title: 'Pay from your bank account',
        instruction: `Please fill in the Transfer ID in the Beneficiary field and make the transfer from your bank account.<br/>
          Without Transfer ID your payment will not be credited.
          <br/><br/>
          Example: 2747420 ヤマ ダ タロ`,
      },
      wirepay: {
        name: 'Wirepay',
        title: 'Pay from your bank account,<br/> also known as direct payment',
        instruction:
          'Please make the transfer to below details from your bank account. Make sure that all entered details are correct',
      },
    },
    form: {
      id: {
        label: 'Transfer ID',
        required: 'Please fill',
        error: 'Invalid number',
      },
      bankName: 'Bank name',
      branchName: 'Branch name',
      accountType: 'Account type',
      accountNumber: 'Account number',
      accountHolder: 'Account holder',
      amount: 'Amount',
      close: 'Close',
    },
    contacts: {
      title: 'Payment inquiries:',
      email: 'suppor@ovspay.jp',
      phone: '03–6380–8113',
    },
    errors: {
      badRequest:
        'Unfortunately we could not process your request. Please select a different payment option or try again later.',
      pendingRequest:
        'This request has already been processed. Please return to the merchant to make a new payment.',
      expiredRequest:
        'This request is expired. Please return to the merchant to make a new payment.',
      back: 'Back to Merchant',
    },
  },
  footer: {
    top: 'zestPay is a registered trading name of PSI-Pay Ltd, company authorised and regulated by the <a href="#">the Financial Conduct Authority</a> of the United Kingdom under the Electronic Money Regulations 2011 (register reference number 900011) for the issuing of electronic money.',
    poweredby:
      'zestPay is powered by Trustly, an authorised payment institution under Swedish Financial Supervisory Authority (FSA) regulation.',
    copyright: '© 2022, zestPay. All rights reserved.',
    policies: 'Policies',
  },
};
