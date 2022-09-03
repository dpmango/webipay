export default {
  header: {
    back: 'يلغي',
  },
  payment: {
    head: {
      merchant: 'دفع ل:',
      back: 'تغيير الخيار',
    },
    options: {
      title: 'حدد خيار الدفع:',
      pandapay: {
        name: 'Pandapay',
        title: 'ادفع من حسابك المصرفي',
        instruction: `يرجى ملء معرف التحويل في حقل المستفيد وإجراء التحويل من حسابك المصرفي.<br/>
          بدون معرف التحويل ، لن يتم إضافة دفعتك..
          <br/><br/>
          مثال: 2747420 يامادا تارو`,
      },
      wirepay: {
        name: 'Wirepay',
        title: 'الدفع من حسابك المصرفي<br/> يعرف أيضا باسم الدفع المباشر',
        instruction:
          'يرجى إجراء التحويل إلى التفاصيل أدناه من حسابك المصرفي. تأكد من صحة جميع التفاصيل المدخلة',
      },
    },
    form: {
      id: {
        label: 'معرف التحويل',
        required: 'يرجى ملء',
        error: 'رقم غير صالح',
      },
      bankName: 'اسم البنك',
      branchName: 'اسم الفرع',
      accountType: 'نوع الحساب',
      accountNumber: 'رقم الحساب',
      accountHolder: 'صاحب الحساب',
      amount: 'المبلغ',
      close: 'إغلاق',
    },
    contacts: {
      title: 'استفسارات الدفع::',
      email: 'suppor@ovspay.jp',
      phone: '03–6380–8113',
    },
    errors: {
      badRequest:
        'للأسف لم نتمكن من معالجة طلبك. يرجى تحديد خيار دفع مختلف أو إعادة المحاولة لاحقا.',
      pendingRequest: 'تمت معالجة هذا الطلب بالفعل. يرجى العودة إلى التاجر لإجراء دفعة جديدة.',
      expiredRequest: 'انتهت صلاحية هذا الطلب. يرجى العودة إلى التاجر لإجراء دفعة جديدة.',
      back: 'العودة إلى التاجر',
    },
  },
  footer: {
    top: 'تلذذ الدفع هو الاسم التجاري المسجل لهذه المبادرة-الدفع المحدودة, شركة مرخصة ومنظمة من قبل المملكة المتحدة بموجب لوائح النقود الإلكترونية لعام 2011 (سجل الرقم المرجعي 900011) لإصدار النقود الإلكترونية.',
    poweredby:
      'يتم تشغيل زيستباي من قبل تروستلي ، وهي مؤسسة دفع مرخصة بموجب لائحة هيئة الرقابة المالية السويدية (فسا).',
    copyright: '© 2022, zestPay. جميع الحقوق محفوظة.',
    policies: 'السياسات',
  },
  page: {
    policy: {
      title: 'صفحة السياسة',
      text: `
        <p>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</p>
        <p>We build a range of services that help millions of people daily to explore and interact with the world in new ways. Our services include:</p>
        <p>Products that are integrated into third-party apps and sites, like ads, analytics, and embedded Google Maps</p>
      `,
    },
  },
};
