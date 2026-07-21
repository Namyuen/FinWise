/* ============================================================
   FinWise — script.js
   Pure vanilla JavaScript. No build tools, no frameworks.
   ============================================================ */

'use strict';

/* ============================================================
   DATA — LESSONS
   ============================================================ */
const LESSONS_DATA = [
  {
    id: 'basics',
    title: 'Money Basics',
    description: 'The fundamental rules of money that everyone should know.',
    iconClass: 'module-icon--violet',
    cardClass: 'lesson-card--violet',
    lessons: [
      {
        id: 'what-is-money',
        title: 'What is Money?',
        explanation: 'At its core, money is a tool used to trade value. Instead of trading a chicken for a haircut, we use money as a universally accepted medium of exchange. It\'s a way to store the value of your time and effort today so you can spend it tomorrow.',
        example: 'If you work 5 hours at a coffee shop for $15/hour, you\'ve converted 5 hours of your life into $75 of stored value. You can then trade that $75 for a pair of shoes, effectively trading your 5 hours for those shoes.',
        keyPoints: [
          'Money is a medium of exchange.',
          'It acts as a store of value.',
          'It represents time and effort.'
        ],
        quiz: {
          question: 'Which of the following is the best definition of money\'s primary purpose?',
          options: ['To make people greedy', 'To act as a universal tool for trading value', 'To be stored in a bank forever', 'To increase in physical size over time'],
          correctAnswer: 1,
          explanation: 'Money simplifies trade by acting as a universal medium of exchange. It replaces the complicated barter system.'
        }
      },
      {
        id: 'needs-vs-wants',
        title: 'Needs vs. Wants',
        explanation: 'A \'Need\' is something essential for survival—food, basic clothing, and shelter. A \'Want\' is everything else. The biggest mistake people make is upgrading their \'wants\' and calling them \'needs\'. You need transportation to get to work; you want a brand new sports car.',
        example: 'Buying groceries is a need. Ordering a $15 avocado toast via delivery is a want. Both satisfy hunger, but one is essential and the other is a luxury.',
        keyPoints: [
          'Needs are essential for survival.',
          'Wants are nice-to-haves that improve quality of life.',
          'Confusing wants for needs is a fast track to being broke.'
        ],
        quiz: {
          question: 'Which of the following is an example of a \'need\'?',
          options: ['A new iPhone', 'Netflix subscription', 'Basic groceries', 'Designer sneakers'],
          correctAnswer: 2,
          explanation: 'Basic groceries are essential for survival, making them a true need.'
        }
      }
    ]
  },
  {
    id: 'budgeting',
    title: 'Budgeting',
    description: 'Tell your money where to go instead of wondering where it went.',
    iconClass: 'module-icon--blue',
    cardClass: 'lesson-card--blue',
    lessons: [
      {
        id: '50-30-20-rule',
        title: 'The 50/30/20 Rule',
        explanation: 'The 50/30/20 rule is a simple way to budget your after-tax income. 50% goes to Needs (housing, groceries, bills), 30% goes to Wants (entertainment, dining out), and 20% goes to Savings and Investments.',
        example: 'If you make $2,000 a month after taxes, $1,000 goes to needs, $600 to wants, and $400 straight into your savings account.',
        keyPoints: [
          '50% for absolute essentials (Needs).',
          '30% for lifestyle choices (Wants).',
          '20% for future you (Savings/Investing).'
        ],
        quiz: {
          question: 'If you make $1,000 this month, how much should go to savings using the 50/30/20 rule?',
          options: ['$50', '$200', '$300', '$500'],
          correctAnswer: 1,
          explanation: '20% of $1,000 is $200. This is the portion dedicated to savings and investing.'
        }
      },
      {
        id: 'tracking-expenses',
        title: 'Tracking Expenses',
        explanation: 'You can\'t manage what you don\'t measure. Tracking your expenses means recording every dollar you spend. Most people are shocked when they see how much small, daily purchases add up over a month.',
        example: 'Buying a $5 coffee every weekday doesn\'t feel like much, but it equals $100 a month, or $1,200 a year. Tracking reveals these hidden drains on your budget.',
        keyPoints: [
          'Record every purchase, no matter how small.',
          'Use an app, spreadsheet, or notebook.',
          'Review your spending at the end of each month.'
        ],
        quiz: {
          question: 'Why is tracking small expenses important?',
          options: ['Because banks require it', 'To avoid paying taxes', 'Small purchases add up to large amounts over time', 'It isn\'t actually important'],
          correctAnswer: 2,
          explanation: 'Small leaks sink great ships. Daily $5 purchases turn into thousands of dollars over a year.'
        }
      }
    ]
  },
  {
    id: 'saving',
    title: 'Saving',
    description: 'Building your safety net and planning for future purchases.',
    iconClass: 'module-icon--emerald',
    cardClass: 'lesson-card--emerald',
    lessons: [
      {
        id: 'emergency-fund',
        title: 'The Emergency Fund',
        explanation: 'An emergency fund is money set aside specifically for unexpected expenses—like a car breaking down, a medical bill, or losing a job. It is the foundation of financial stability. Without it, one stroke of bad luck puts you in debt.',
        example: 'Your laptop breaks right before finals, and repairs cost $400. With an emergency fund, it\'s an inconvenience. Without it, it\'s a crisis that forces you to take on credit card debt.',
        keyPoints: [
          'Start with a goal of $500 - $1,000.',
          'Eventually aim for 3-6 months of living expenses.',
          'Keep it in a high-yield savings account where you can access it quickly.'
        ],
        quiz: {
          question: 'Which scenario is an appropriate use of an emergency fund?',
          options: ['Buying concert tickets', 'Fixing a sudden flat tire', 'A weekend trip with friends', 'Buying a new video game'],
          correctAnswer: 1,
          explanation: 'An emergency fund is for unpredictable, necessary expenses like car repairs, not for entertainment or planned wants.'
        }
      },
      {
        id: 'compound-interest',
        title: 'Compound Growth',
        explanation: 'Compound interest is when you earn interest on your initial savings AND on the interest you\'ve already earned. It\'s how small amounts of money turn into massive wealth over long periods of time.',
        example: 'If you save $100 and earn 10% interest, you have $110. The next year, you earn 10% on $110, giving you $121. Over 40 years, that initial $100 grows exponentially without you doing any extra work.',
        keyPoints: [
          'It\'s interest earning interest.',
          'Time is the most important factor in compound growth.',
          'Starting early is more powerful than starting with a lot of money.'
        ],
        quiz: {
          question: 'What is the most important factor in maximizing compound interest?',
          options: ['The specific bank you use', 'Checking your balance daily', 'Time (starting as early as possible)', 'Only investing in crypto'],
          correctAnswer: 2,
          explanation: 'Because compound interest snowballs over time, the earlier you start, the more dramatic the growth becomes.'
        }
      }
    ]
  },
  {
    id: 'investing',
    title: 'Investing',
    description: 'How to make your money work for you.',
    iconClass: 'module-icon--amber',
    cardClass: 'lesson-card--amber',
    lessons: [
      {
        id: 'stocks-vs-bonds',
        title: 'Stocks vs. Bonds',
        explanation: 'When you buy a stock, you own a tiny piece of a company. If the company does well, your piece becomes more valuable. When you buy a bond, you are lending money to a company or government, and they promise to pay you back with interest.',
        example: 'Buying Apple stock means you own a sliver of Apple. Buying a US Treasury Bond means you loaned money to the government, and they will pay you fixed interest every year.',
        keyPoints: [
          'Stocks = Ownership (Higher risk, higher potential reward).',
          'Bonds = Lending (Lower risk, steady but lower returns).',
          'A healthy portfolio usually contains a mix of both.'
        ],
        quiz: {
          question: 'What does it mean when you buy a share of stock?',
          options: ['You are loaning the company money', 'You own a small piece of the company', 'You are guaranteed a refund', 'You can work at the company for free'],
          correctAnswer: 1,
          explanation: 'Stocks represent equity, or ownership, in a business.'
        }
      },
      {
        id: 'index-funds',
        title: 'Index Funds & ETFs',
        explanation: 'Instead of trying to pick the \'winning\' company, an index fund buys a tiny piece of ALL the top companies at once. It\'s a basket of stocks. This instantly diversifies your investment, significantly lowering your risk.',
        example: 'The S&P 500 index fund buys a piece of the 500 largest companies in the US (Apple, Microsoft, Amazon, etc.). If one company goes bankrupt, your overall investment barely feels it because the other 499 carry the weight.',
        keyPoints: [
          'They offer instant diversification.',
          'They have very low fees compared to actively managed funds.',
          'They consistently outperform most professional stock pickers over decades.'
        ],
        quiz: {
          question: 'Why is an index fund generally safer than buying a single stock?',
          options: ['It is insured by the government', 'It diversifies your investment across hundreds of companies', 'It guarantees a 20% return', 'It doesn\'t cost any money to buy'],
          correctAnswer: 1,
          explanation: 'By holding many different stocks, an index fund spreads out the risk. If one company fails, the others can balance it out.'
        }
      }
    ]
  },
  {
    id: 'real-world',
    title: 'Real World Finance',
    description: 'Credit, debt, and navigating the system.',
    iconClass: 'module-icon--rose',
    cardClass: 'lesson-card--rose',
    lessons: [
      {
        id: 'credit-cards',
        title: 'How Credit Cards Actually Work',
        explanation: 'A credit card is a short-term loan. When you buy something, the bank pays the store. At the end of the month, the bank sends you a bill. If you pay the full amount by the due date, you pay $0 in interest. If you don\'t, they charge you massive interest rates.',
        example: 'You buy a $500 TV. If you pay the $500 bill on time, the TV costs $500. If you only pay the minimum payment, that TV could end up costing you $800 over the next few years due to interest.',
        keyPoints: [
          'Treat it like a debit card: never spend money you don\'t have.',
          'Always pay the statement balance in full every month.',
          'Credit cards can build your credit score or ruin your financial life.'
        ],
        quiz: {
          question: 'How do you avoid paying interest on a credit card?',
          options: ['Only use it on weekends', 'Pay the minimum payment', 'Pay the full statement balance by the due date', 'Close the account immediately after buying something'],
          correctAnswer: 2,
          explanation: 'If you pay your full statement balance before the due date, you utilize the bank\'s money for free and pay zero interest.'
        }
      }
    ]
  }
];

/* ============================================================
   DATA — QUIZ
   ============================================================ */
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What is the primary purpose of an emergency fund?',
    options: ['To save up for a luxury vacation', 'To cover unexpected, necessary expenses without going into debt', 'To invest in the stock market', 'To pay for regular monthly groceries'],
    correctAnswer: 1,
    explanation: 'An emergency fund acts as a financial safety net for unpredictable events like medical emergencies or car repairs, keeping you out of high-interest debt.'
  },
  {
    id: 2,
    question: 'According to the 50/30/20 rule, what does the 20% represent?',
    options: ['Needs (Housing, Food)', 'Wants (Entertainment, Dining Out)', 'Taxes', 'Savings and Investing'],
    correctAnswer: 3,
    explanation: 'The 50/30/20 rule suggests putting 50% toward needs, 30% toward wants, and 20% toward savings, investing, and debt payoff.'
  },
  {
    id: 3,
    question: 'What happens if you only pay the \'minimum payment\' on your credit card bill?',
    options: ['You avoid paying any interest', 'Your credit score goes to a perfect 850', 'You will be charged high interest on the remaining balance', 'The bank will cancel your card'],
    correctAnswer: 2,
    explanation: 'Paying only the minimum keeps your account in good standing, but you will be charged massive interest on whatever balance you didn\'t pay off.'
  },
  {
    id: 4,
    question: 'Which of the following is the best example of \'compound interest\'?',
    options: ['Getting a 5% discount at a store', 'Earning interest on your initial deposit, AND on the interest you previously earned', 'A fixed fee charged by a bank', 'Paying taxes on your investments'],
    correctAnswer: 1,
    explanation: 'Compound interest is \'interest on interest\'. It causes your wealth to snowball over time.'
  },
  {
    id: 5,
    question: 'Why is investing in an Index Fund generally considered safer than buying a single company\'s stock?',
    options: ['Index funds guarantee a 10% return', 'Index funds don\'t lose value in a recession', 'Index funds instantly diversify your money across hundreds of companies', 'Index funds are backed by gold'],
    correctAnswer: 2,
    explanation: 'An index fund buys a slice of many companies at once. If one company fails, the others can balance out the loss.'
  },
  {
    id: 6,
    question: 'What is the difference between a stock and a bond?',
    options: ['Stocks represent a loan, bonds represent ownership', 'Stocks represent ownership in a company, bonds represent a loan to a company or government', 'Stocks are only for rich people, bonds are for everyone', 'There is no difference'],
    correctAnswer: 1,
    explanation: 'When you buy a stock, you own a piece of a business (equity). When you buy a bond, you are lending your money for a fixed return (debt).'
  },
  {
    id: 7,
    question: 'Which of these is a \'Need\' in a typical budget?',
    options: ['A brand new smartphone every year', 'A subscription to Netflix', 'Basic groceries', 'Eating at restaurants with friends'],
    correctAnswer: 2,
    explanation: 'Needs are absolute essentials for survival and maintaining a job: housing, basic food, utilities, and basic transportation.'
  },
  {
    id: 8,
    question: 'When should you start saving for retirement?',
    options: ['In your 50s, when you make the most money', 'As soon as you have an income, to take advantage of compound interest', 'When you have no other expenses', 'Only after you buy a house'],
    correctAnswer: 1,
    explanation: 'Because of compound interest, starting in your teens or 20s requires significantly less money out-of-pocket than starting in your 40s or 50s.'
  },
  {
    id: 9,
    question: 'What is the main danger of inflation?',
    options: ['It makes the stock market crash', 'It decreases the purchasing power of your money over time', 'It lowers your credit score', 'It makes bank accounts illegal'],
    correctAnswer: 1,
    explanation: 'Inflation means things get more expensive over time. If your money is just sitting under a mattress, it will buy less in 10 years than it does today.'
  },
  {
    id: 10,
    question: 'If an investment promises a \'Guaranteed 25% monthly return with zero risk\', it is most likely:',
    options: ['A great opportunity', 'A standard government bond', 'A financial scam or Ponzi scheme', 'An index fund'],
    correctAnswer: 2,
    explanation: 'In finance, high returns always come with risk. Any \'investment\' promising massive returns with zero risk is almost certainly a scam.'
  }
];

/* ============================================================
   HELPERS
   ============================================================ */
function svgIcon(name, extraClass) {
  const cls = extraClass ? ` class="${extraClass}"` : '';
  const icons = {
    sparkles: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
    arrowRight: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    check: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    checkCircle: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
    xCircle: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`,
    x: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    key: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
    lightbulb: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    playCircle: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
    trophy: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    rotateCcw: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    menu: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    close: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    externalLink: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    wallet: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    pieChart: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
    piggyBank: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1a2 2 0 0 0 2 2h1"/><path d="M16 11h.01"/></svg>`,
    trendingUp: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    landmark: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
    calculator: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    shieldCheck: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    bookOpen: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    target: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    coins: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`,
    globe: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    code: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    shield: `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
  };
  return icons[name] || '';
}

function formatCurrency(n) {
  return '$' + Math.round(n).toLocaleString();
}

/* ============================================================
   NAVBAR — active link + hamburger
   ============================================================ */
function initNavbar() {
  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(function(link) {
    const href = link.getAttribute('href') || '';
    const isHome = (href === 'index.html' || href === './') && (path === 'index.html' || path === '');
    const isOther = href !== 'index.html' && href !== './' && path !== '' && path !== 'index.html' && path === href;
    if (isHome || isOther) link.classList.add('active');
  });

  // Hamburger toggle
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-mobile-menu');
  const iconMenu  = document.getElementById('nav-icon-menu');
  const iconClose = document.getElementById('nav-icon-close');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const open = menu.classList.toggle('open');
      if (iconMenu)  iconMenu.style.display  = open ? 'none'  : 'block';
      if (iconClose) iconClose.style.display = open ? 'block' : 'none';
    });
    // Close when a mobile link is clicked
    menu.querySelectorAll('.navbar__mobile-link').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('open');
        if (iconMenu)  iconMenu.style.display  = 'block';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  }
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

/* ============================================================
   LEARN PAGE — render modules + modal
   ============================================================ */
function initLearnPage() {
  const container = document.getElementById('modules-container');
  if (!container) return;

  let activeLesson = null;
  let selectedOption = null;
  let quizSubmitted = false;

  const moduleIcons = ['wallet', 'pieChart', 'piggyBank', 'trendingUp', 'landmark'];

  // Render modules
  LESSONS_DATA.forEach(function(module, mIdx) {
    const section = document.createElement('section');
    section.className = 'module-section reveal reveal-delay-' + Math.min(mIdx + 1, 4);

    const iconName = moduleIcons[mIdx] || 'wallet';
    section.innerHTML =
      '<div class="module-header">' +
        '<div class="module-icon ' + module.iconClass + '">' + svgIcon(iconName) + '</div>' +
        '<div class="module-header-text"><h2>' + module.title + '</h2><p>' + module.description + '</p></div>' +
      '</div>' +
      '<div class="lessons-grid">' +
        module.lessons.map(function(lesson) {
          return '<div class="lesson-card ' + module.cardClass + '" data-lesson-id="' + lesson.id + '" data-module-id="' + module.id + '" role="button" tabindex="0">' +
            '<div class="lesson-card__header">' +
              '<span class="lesson-card__title">' + lesson.title + '</span>' +
              '<span class="lesson-card__arrow">' + svgIcon('arrowRight') + '</span>' +
            '</div>' +
            '<p class="lesson-card__desc">' + lesson.explanation + '</p>' +
          '</div>';
        }).join('') +
      '</div>';

    container.appendChild(section);
  });

  // Open modal on lesson card click
  container.addEventListener('click', function(e) {
    const card = e.target.closest('.lesson-card');
    if (!card) return;
    const lessonId = card.dataset.lessonId;
    const moduleId = card.dataset.moduleId;
    const module = LESSONS_DATA.find(function(m) { return m.id === moduleId; });
    if (!module) return;
    activeLesson = module.lessons.find(function(l) { return l.id === lessonId; });
    if (!activeLesson) return;
    selectedOption = null;
    quizSubmitted = false;
    renderModal(activeLesson);
    document.getElementById('lesson-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Keyboard accessibility
  container.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.lesson-card');
      if (card) card.click();
    }
  });

  // Close modal
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('lesson-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    document.getElementById('lesson-modal').classList.remove('open');
    document.body.style.overflow = '';
    activeLesson = null;
  }

  function renderModal(lesson) {
    document.getElementById('modal-title').textContent = lesson.title;
    document.getElementById('modal-explanation').textContent = lesson.explanation;
    document.getElementById('modal-example').textContent = lesson.example;

    const kpList = document.getElementById('modal-keypoints');
    kpList.innerHTML = lesson.keyPoints.map(function(pt) {
      return '<li>' + svgIcon('checkCircle') + '<span>' + pt + '</span></li>';
    }).join('');

    document.getElementById('modal-quiz-question').textContent = lesson.quiz.question;
    renderQuizOptions(lesson);
    document.getElementById('modal-quiz-result').innerHTML = '';
    document.getElementById('modal-quiz-result').className = 'quiz-result';
    document.getElementById('modal-quiz-result').style.display = 'none';
    document.getElementById('modal-quiz-submit').style.display = 'block';
    document.getElementById('modal-quiz-submit').disabled = true;
  }

  function renderQuizOptions(lesson) {
    const container = document.getElementById('modal-quiz-options');
    container.innerHTML = lesson.quiz.options.map(function(opt, i) {
      return '<button class="quiz-option" data-index="' + i + '">' +
        '<span>' + opt + '</span>' +
        '<span class="quiz-icon-slot"></span>' +
      '</button>';
    }).join('');

    container.querySelectorAll('.quiz-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (quizSubmitted) return;
        selectedOption = parseInt(this.dataset.index);
        container.querySelectorAll('.quiz-option').forEach(function(b) { b.classList.remove('selected'); });
        this.classList.add('selected');
        document.getElementById('modal-quiz-submit').disabled = false;
      });
    });
  }

  document.getElementById('modal-quiz-submit').addEventListener('click', function() {
    if (selectedOption === null || !activeLesson || quizSubmitted) return;
    quizSubmitted = true;
    const correct = activeLesson.quiz.correctAnswer;

    document.querySelectorAll('.quiz-option').forEach(function(btn, i) {
      btn.disabled = true;
      const iconSlot = btn.querySelector('.quiz-icon-slot');
      if (i === correct) {
        btn.classList.add('correct');
        iconSlot.innerHTML = svgIcon('checkCircle');
      } else if (i === selectedOption && i !== correct) {
        btn.classList.add('wrong');
        iconSlot.innerHTML = svgIcon('xCircle');
      } else {
        btn.classList.add('dimmed');
      }
    });

    const isCorrect = selectedOption === correct;
    const resultEl = document.getElementById('modal-quiz-result');
    resultEl.className = 'quiz-result ' + (isCorrect ? 'quiz-result--correct' : 'quiz-result--wrong');
    resultEl.style.display = 'block';
    resultEl.innerHTML =
      '<div class="quiz-result__status">' +
        (isCorrect
          ? svgIcon('checkCircle') + '<span>Correct!</span>'
          : svgIcon('xCircle')    + '<span>Not quite.</span>') +
      '</div>' +
      '<p>' + activeLesson.quiz.explanation + '</p>' +
      '<div class="quiz-result-close-btn">' +
        '<button class="btn btn--muted btn--full" id="modal-close-lesson-btn">Close Lesson</button>' +
      '</div>';

    document.getElementById('modal-close-lesson-btn').addEventListener('click', closeModal);
    this.style.display = 'none';
  });
}

/* ============================================================
   TOOLS PAGE
   ============================================================ */
function initToolsPage() {
  if (!document.getElementById('tools-tabs')) return;

  // ---- TABS ----
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const target = this.dataset.tab;
      tabBtns.forEach(function(b) {
        b.classList.remove('active--violet', 'active--amber', 'active--green');
      });
      tabPanels.forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active--' + this.dataset.color);
      document.getElementById('tab-' + target).classList.add('active');
    });
  });

  // ---- BUDGET CALCULATOR ----
  function getBudgetInputs() {
    return {
      income:        parseFloat(document.getElementById('b-income').value)        || 0,
      housing:       parseFloat(document.getElementById('b-housing').value)       || 0,
      food:          parseFloat(document.getElementById('b-food').value)          || 0,
      transport:     parseFloat(document.getElementById('b-transport').value)     || 0,
      entertainment: parseFloat(document.getElementById('b-entertainment').value) || 0,
      other:         parseFloat(document.getElementById('b-other').value)         || 0,
    };
  }

  function updateBudget() {
    const v = getBudgetInputs();
    const totalExpenses = v.housing + v.food + v.transport + v.entertainment + v.other;
    const remaining     = v.income - totalExpenses;
    const savingsPct    = v.income > 0 ? Math.round((remaining / v.income) * 100) : 0;

    let status = 'good';
    if (savingsPct < 20) status = 'warning';
    if (remaining  < 0) status = 'danger';

    document.getElementById('b-total-expenses').textContent = formatCurrency(totalExpenses);
    document.getElementById('b-remaining').textContent      = formatCurrency(remaining);

    const remainingTile = document.getElementById('b-remaining-tile');
    remainingTile.className = 'summary-tile ' +
      (status === 'danger' ? 'summary-tile--red' : status === 'warning' ? 'summary-tile--yellow' : 'summary-tile--green');

    document.getElementById('b-savings-rate').textContent = savingsPct + '%';

    const barEl = document.getElementById('b-progress-bar');
    const barVal = Math.max(0, Math.min(100, savingsPct));
    barEl.style.width = barVal + '%';
    barEl.className = 'progress-bar ' +
      (status === 'danger' ? 'progress-bar--red' : status === 'warning' ? 'progress-bar--amber' : 'progress-bar--green');

    document.getElementById('b-note').textContent =
      status === 'danger'  ? 'You are spending more than you earn. Review your expenses.' :
      status === 'warning' ? "You're saving some, but try to reach the 20% target." :
                             'Great job! You are saving 20% or more of your income.';
  }

  ['b-income','b-housing','b-food','b-transport','b-entertainment','b-other'].forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateBudget);
  });
  updateBudget();

  // ---- COMPOUND INTEREST CALCULATOR ----
  let compoundChart = null;

  function getCompoundInputs() {
    return {
      principal:    parseFloat(document.getElementById('c-principal').value)    || 0,
      monthly:      parseFloat(document.getElementById('c-monthly').value)      || 0,
      rate:         parseFloat(document.getElementById('c-rate').value)         || 7,
      years:        parseInt  (document.getElementById('c-years').value)        || 10,
    };
  }

  function computeCompoundData(p, m, r, y) {
    var data = [];
    var total = p, contributed = p;
    data.push({ year: 0, total: Math.round(total), contributions: Math.round(contributed), interest: 0 });
    for (var yr = 1; yr <= y; yr++) {
      for (var mo = 0; mo < 12; mo++) {
        total += m;
        total *= (1 + (r / 100) / 12);
        contributed += m;
      }
      data.push({ year: yr, total: Math.round(total), contributions: Math.round(contributed), interest: Math.round(total - contributed) });
    }
    return data;
  }

  function updateCompound() {
    const v = getCompoundInputs();
    document.getElementById('c-rate-label').textContent = v.rate + '%';
    document.getElementById('c-years-label').textContent = v.years + ' years';

    const data = computeCompoundData(v.principal, v.monthly, v.rate, v.years);
    const last = data[data.length - 1];

    document.getElementById('c-future-value').textContent     = formatCurrency(last.total);
    document.getElementById('c-contributed').textContent      = formatCurrency(last.contributions);
    document.getElementById('c-interest-earned').textContent  = formatCurrency(last.interest);
    document.getElementById('c-years-display').textContent    = v.years;

    const labels = data.map(function(d) { return 'Yr ' + d.year; });
    const totals = data.map(function(d) { return d.total; });
    const contribs = data.map(function(d) { return d.contributions; });

    if (compoundChart) {
      compoundChart.data.labels = labels;
      compoundChart.data.datasets[0].data = totals;
      compoundChart.data.datasets[1].data = contribs;
      compoundChart.update();
    } else if (window.Chart) {
      const ctx = document.getElementById('compound-chart').getContext('2d');
      compoundChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total Value',
              data: totals,
              borderColor: '#7c3aed',
              backgroundColor: 'rgba(124,58,237,0.12)',
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 5,
            },
            {
              label: 'Contributions',
              data: contribs,
              borderColor: '#94a3b8',
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderDash: [5, 5],
              fill: false,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11 } } },
            tooltip: {
              callbacks: {
                label: function(ctx) { return ctx.dataset.label + ': ' + formatCurrency(ctx.parsed.y); }
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 }, maxTicksLimit: 10 } },
            y: {
              grid: { color: 'rgba(0,0,0,0.05)' },
              ticks: {
                font: { size: 11 },
                callback: function(val) { return val >= 1000 ? (val/1000).toFixed(0) + 'k' : val; }
              }
            }
          }
        }
      });
    }
  }

  ['c-principal','c-monthly'].forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateCompound);
  });
  const rateSlider  = document.getElementById('c-rate');
  const yearsSlider = document.getElementById('c-years');
  if (rateSlider)  rateSlider.addEventListener('input',  updateCompound);
  if (yearsSlider) yearsSlider.addEventListener('input', updateCompound);

  // wait for Chart.js
  if (window.Chart) {
    updateCompound();
  } else {
    window.addEventListener('load', updateCompound);
  }

  // ---- SAVINGS GOAL CALCULATOR ----
  function updateSavings() {
    const goal    = parseFloat(document.getElementById('s-goal').value)    || 0;
    const current = parseFloat(document.getElementById('s-current').value) || 0;
    const monthly = parseFloat(document.getElementById('s-monthly').value) || 0;

    const months = monthly > 0 ? Math.max(0, Math.ceil((goal - current) / monthly)) : 0;
    const pct    = goal > 0 ? Math.min(100, Math.round((current / goal) * 100)) : 0;

    const timeEl = document.getElementById('s-time-result');
    const reachedEl = document.getElementById('s-goal-reached');

    if (current >= goal && goal > 0) {
      if (timeEl)    timeEl.style.display = 'none';
      if (reachedEl) { reachedEl.style.display = 'block'; reachedEl.textContent = 'Goal Reached! 🎉'; }
    } else {
      if (reachedEl) reachedEl.style.display = 'none';
      if (timeEl)    timeEl.style.display = 'block';
      document.getElementById('s-months').textContent = months;
      document.getElementById('s-years').textContent  = (months / 12).toFixed(1);
    }

    document.getElementById('s-current-label').textContent = formatCurrency(current);
    document.getElementById('s-goal-label').textContent    = formatCurrency(goal);
    document.getElementById('s-progress-bar').style.width  = pct + '%';
    document.getElementById('s-pct').textContent = pct + '% Complete';
  }

  ['s-goal','s-current','s-monthly'].forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateSavings);
  });
  updateSavings();
}

/* ============================================================
   QUIZ PAGE
   ============================================================ */
function initQuizPage() {
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  let currentIdx  = 0;
  let selected    = null;
  let isAnswered  = false;
  let score       = 0;

  function render() {
    if (currentIdx >= QUIZ_QUESTIONS.length) {
      renderResults();
      return;
    }
    const q = QUIZ_QUESTIONS[currentIdx];
    const progress = (currentIdx / QUIZ_QUESTIONS.length) * 100;

    quizContainer.innerHTML =
      '<div class="mb-8">' +
        '<div class="quiz-progress-row">' +
          '<span class="quiz-badge">Question ' + (currentIdx + 1) + ' of ' + QUIZ_QUESTIONS.length + '</span>' +
        '</div>' +
        '<div class="progress-wrap progress-wrap--sm" style="margin-top:0.75rem">' +
          '<div class="progress-bar progress-bar--violet" style="width:' + progress + '%"></div>' +
        '</div>' +
      '</div>' +
      '<div class="card quiz-card">' +
        '<div class="quiz-card__top-bar"></div>' +
        '<div class="quiz-card__header">' +
          '<p class="quiz-card__question">' + q.question + '</p>' +
        '</div>' +
        '<div class="quiz-card__options">' +
          q.options.map(function(opt, i) {
            return '<button class="quiz-main-option" data-index="' + i + '">' +
              '<span>' + opt + '</span>' +
              '<span class="quiz-result-icon"></span>' +
            '</button>';
          }).join('') +
        '</div>' +
        '<div id="quiz-exp"></div>' +
        '<div class="quiz-card__footer">' +
          '<button id="quiz-action-btn" class="btn btn--primary btn--lg" disabled>Submit Answer</button>' +
        '</div>' +
      '</div>';

    // Bind option clicks
    quizContainer.querySelectorAll('.quiz-main-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (isAnswered) return;
        selected = parseInt(this.dataset.index);
        quizContainer.querySelectorAll('.quiz-main-option').forEach(function(b) { b.classList.remove('selected'); });
        this.classList.add('selected');
        document.getElementById('quiz-action-btn').disabled = false;
      });
    });

    // Action button
    document.getElementById('quiz-action-btn').addEventListener('click', function() {
      if (!isAnswered) {
        // Submit
        if (selected === null) return;
        isAnswered = true;
        const correct = q.correctAnswer;
        if (selected === correct) score++;

        quizContainer.querySelectorAll('.quiz-main-option').forEach(function(btn, i) {
          btn.disabled = true;
          const iconSlot = btn.querySelector('.quiz-result-icon');
          if (i === correct) {
            btn.classList.add('correct');
            iconSlot.innerHTML = svgIcon('checkCircle');
          } else if (i === selected && i !== correct) {
            btn.classList.add('wrong');
            iconSlot.innerHTML = svgIcon('xCircle');
          } else {
            btn.classList.add('dimmed');
          }
        });

        const isCorrect = selected === correct;
        const expEl = document.getElementById('quiz-exp');
        expEl.innerHTML =
          '<div class="quiz-explanation quiz-explanation--' + (isCorrect ? 'correct' : 'wrong') + '">' +
            '<div class="exp-label">' +
              (isCorrect ? svgIcon('checkCircle') + '<span>Correct!</span>' : svgIcon('xCircle') + '<span>Incorrect</span>') +
            '</div>' +
            '<p>' + q.explanation + '</p>' +
          '</div>';

        const btn = document.getElementById('quiz-action-btn');
        btn.disabled = false;
        btn.className = 'btn btn--lg' + (currentIdx === QUIZ_QUESTIONS.length - 1 ? ' btn--primary' : '');
        btn.style.background = '#1e1b4b';
        btn.style.color = '#fff';
        btn.textContent = currentIdx === QUIZ_QUESTIONS.length - 1 ? 'See Results' : 'Next Question';
        btn.innerHTML += ' ' + svgIcon('arrowRight');

      } else {
        // Next
        currentIdx++;
        selected   = null;
        isAnswered = false;
        render();
      }
    });
  }

  function renderResults() {
    let level = 'Beginner', msg = '', levelClass = 'level--beginner';
    if (score >= 8) {
      level = 'Advanced';
      msg = 'Incredible! You have a solid grasp of financial concepts. Future you is going to be wealthy.';
      levelClass = 'level--advanced';
    } else if (score >= 4) {
      level = 'Intermediate';
      msg = 'Not bad! You know your way around money, but there\'s still more to learn.';
      levelClass = 'level--intermediate';
    } else {
      msg = 'You\'re just starting out! Head over to the Learn section to build your knowledge.';
    }

    quizContainer.innerHTML =
      '<div class="card results-card">' +
        '<div class="results-hero">' +
          '<div class="results-trophy">' + svgIcon('trophy') + '</div>' +
        '</div>' +
        '<div class="results-body">' +
          '<h2 style="font-size:1.75rem;font-weight:900;margin-bottom:0.5rem">Quiz Complete!</h2>' +
          '<p style="color:var(--muted-fg);margin-bottom:1.5rem">Here is how you scored on the financial literacy test.</p>' +
          '<div class="results-score">' + score + '<span> / ' + QUIZ_QUESTIONS.length + '</span></div>' +
          '<div class="results-level ' + levelClass + '">Level: ' + level + '</div>' +
          '<p class="results-message" style="margin-top:1rem">' + msg + '</p>' +
        '</div>' +
        '<div class="results-footer">' +
          '<button id="quiz-restart-btn" class="btn btn--muted">' + svgIcon('rotateCcw') + ' Retake Quiz</button>' +
          '<a href="learn.html" class="btn btn--primary">Go to Learn ' + svgIcon('arrowRight') + '</a>' +
        '</div>' +
      '</div>';

    document.getElementById('quiz-restart-btn').addEventListener('click', function() {
      currentIdx  = 0;
      selected    = null;
      isAnswered  = false;
      score       = 0;
      render();
    });
  }

  render();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initScrollReveal();
  initLearnPage();
  initToolsPage();
  initQuizPage();
});
