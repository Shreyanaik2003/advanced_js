const filterTransactions = (transactions, criteria) => {
    return transactions.filter(({ amount, date, type }) => {
        return (
            (criteria.minamount === undefined || amount >= criteria.minamount) &&
            (criteria.maxamount === undefined || amount <= criteria.maxamount) &&
            (criteria.startdate === undefined || date >= criteria.startdate) &&
            (criteria.enddate === undefined || date <= criteria.enddate) &&
            (criteria.type === undefined || type === criteria.type)
        );
    });
};

const transactions = [
    { amount: 200, date: '2025-03-15', type: 'credit' },
    { amount: 100, date: '2025-03-16', type: 'debit' },
    { amount: 300, date: '2025-03-17', type: 'credit' },
    { amount: 150, date: '2025-03-16', type: 'debit' },
];

const criteria={minamount:150, startdate:'2025-03-16' ,
    type:'debit'};
console.log(filterTransactions(transactions,criteria));


