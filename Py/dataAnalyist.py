from pymongo import MongoClient
import time

client = MongoClient('mongodb+srv://admin:9nueC61OFkcpebOv@mycluster.hb5cg.mongodb.net/get-loans')

mydb = client['get-loans']
mycol = mydb["loans"]

countperrun = 0

def dataAnalyist(mI,cAI,aR,id):
    if aR < mI+cAI or aR == mI+cAI:
        status = "Accepted"
        print("--------------------------------------")
        print(status)
        returnNode(status,id)
        print(id)
        print("--------------------------------------")
    else:
        status = "Declined"
        print(status)
        returnNode(status,id)
        print(id)

def returnNode(status,id):
    myQ = {"_id":id}
    newV = {"$set":{"status":status}}
    mycol.update_one(myQ,newV)
    print("Data Base UPDATED")


def mainloop():
    try:
        x = mycol.find_one({"status": "Pending"},{"_id":1,"monthlyIncome":1,"coApplicantIncome":1,"amountRequested":1})
        id = x["_id"]
        monthlyIncome = x["monthlyIncome"]
        coApplicantIncome = x["coApplicantIncome"]
        amountRequested = x["amountRequested"]

        dataAnalyist(monthlyIncome, coApplicantIncome, amountRequested,id)
        time.sleep(0.5)
    except TypeError:
        print("Out of pending requests.")
        print("Finished Run. Number of iterations: {}.".format(countperrun))
        exit()

while True:
    mainloop()
    countperrun = countperrun + 1
    
