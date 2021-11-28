#!/usr/local/bin/python3
import datetime
from enum import Enum
import locale
locale.setlocale(locale.LC_ALL, '')

class Loan:
    class PaymentFrequency(Enum):
        monthly = 1
        biweekly = 2
        weekly = 3

    def __init__(self, name, starting_balance, interest_rate, date_disbursed):
        self.name = name
        self.starting_balance = starting_balance
        self.interest_rate = interest_rate
        self.date_disbursed = date_disbursed

    def first_due_date(today, payment_day):
        if today.day <= payment_day:
            due_date = datetime.date(today.year, today.month, payment_day)
        elif today.day > payment_day:
            if today.month == 12:
                due_date = datetime.date(today.year + 1, 1, payment_day)
            else:
                due_date = datetime.date(today.year, today.month + 1, payment_day)

        return due_date

    def pay(self, payment_amount, payment_day, payment_frequency):
        current_balance = self.starting_balance
        current_date = self.date_disbursed
        payment_due_date = Loan.first_due_date(current_date, payment_day)

        total_paid = 0.0
        total_interest = 0.0
        total_payment_count = 0

        header = self.name.upper() + ': ' + payment_frequency.name + ' payments of ' + locale.currency(payment_amount, grouping = True)
        print(len(header) * '=')
        print(header)
        print(len(header) * '=')
        print('      Balance:', locale.currency(self.starting_balance, grouping = True))
        print('First payment:', payment_due_date.isoformat())
        #print('Original balance:', locale.currency(self.starting_balance, grouping = True))
        #print('Funding date:    ', self.date_disbursed)
        #print('Payment day:     ', payment_day)

        while current_balance > 0:
            # Accumulate interest.

            interest_today = current_balance * (self.interest_rate / 365)
            current_balance += interest_today
            total_interest += interest_today

            # Make a payment if one is due today.

            if current_date == payment_due_date:
                if current_balance < payment_amount:
                    total_paid += current_balance
                    current_balance = 0.0
                else:
                    current_balance -= payment_amount
                    total_paid += payment_amount

                total_payment_count += 1

                # Forward the due date.

                if payment_frequency == Loan.PaymentFrequency.monthly:
                    if current_date.month == 12:
                        payment_due_date = datetime.date(current_date.year + 1, 1, payment_day)
                    else:
                        payment_due_date = datetime.date(current_date.year, current_date.month + 1, payment_day)
                elif payment_frequency == Loan.PaymentFrequency.biweekly:
                    payment_due_date += datetime.timedelta(weeks = 2)
                elif payment_frequency == Loan.PaymentFrequency.weekly:
                    payment_due_date += datetime.timedelta(weeks = 1)

                # Print what happened.

                #print(current_date.isoformat(), '==', locale.currency(current_balance, grouping = True))

            # Forward the current date.

            #print(current_date.isoformat(), '==', locale.currency(current_balance, grouping = True))
            if current_balance > 0:
                current_date += datetime.timedelta(days = 1)

        print(' Last payment:', current_date.isoformat(), '(' + str(total_payment_count) + ' payments)')
        print('     Duration:', "%.1f" % ((current_date - self.date_disbursed).days / 365), 'years')
        print('   Total paid:', locale.currency(total_paid, grouping = True))
        print('Interest paid:', locale.currency(total_interest, grouping = True), '(' + "%.2f" % ((total_interest / total_paid) * 100) + '%)')

car = Loan('New Car', 20000.0, 0.0415, datetime.date(2016, 1, 1))
car.pay(500.0, 20, Loan.PaymentFrequency.monthly)