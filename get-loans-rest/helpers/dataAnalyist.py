from pymongo import *

class analyzeData():

    client = MongoClient('mongodb+srv://admin:9nueC61OFkcpebOv@mycluster.hb5cg.mongodb.net/get-loans')
    mydb = client["get-loans"]
    collection = 


    status = "pending"

    def verifyData(self,amountRequestedV,incomeV,coApplicantIncomeV):
        if amountRequestedV < incomeV+coApplicantIncomeV or amountRequestedV == incomeV+coApplicantIncomeV:
            status = "Accepted"
            print(status)
            self.returnNode(status)
        else:
            status = "Rejected"
            print(status)
            self.returnNode(status)

    def getData(self,):
        aR = float(input("Amount requested: \n"))
        inc = float(input("Income: \n"))
        cAI = float(input("Coapplicant income: \n"))

        self.verifyData(aR,inc,cAI)

    def returnNode(self,stat):
        if stat == "Accepted":
            print("UPDATE succesful.")
        elif stat == "Rejected":
            print("UPDATE succesful.")
        else:
            print("ERROR: UPDATE failed.")


run = analyzeData()
run.getData()