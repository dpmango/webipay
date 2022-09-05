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
      errorpay: {
        name: 'Wirepay',
        title: 'Will trigger an error',
        instruction: 'nope',
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
    top: 'zestPay is a registered trading name of PSI-Pay Ltd, company authorised and regulated by the <a href="https://www.fca.org.uk/" target="_blank">the Financial Conduct Authority</a> of the United Kingdom under the Electronic Money Regulations 2011 (register reference number 900011) for the issuing of electronic money.',
    poweredby:
      'zestPay is powered by Trustly, an authorised payment institution under Swedish Financial Supervisory Authority (FSA) regulation.',
    copyright: '© 2022, zestPay. All rights reserved.',
    policies: 'Policies',
  },
  page: {
    policy: {
      title: 'Policy page',
      text: `
        <p>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</p>
        <p>We build a range of services that help millions of people daily to explore and interact with the world in new ways. Our services include:</p>
        <p>Products that are integrated into third-party apps and sites, like ads, analytics, and embedded Google Maps</p>
      `,
    },
  },
  ui: {
    copy: 'Click to copy',
    copied: 'Copied',
  },
};
