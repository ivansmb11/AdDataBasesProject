import pandas as pd
import boto3

class connection():
    print('hola')
    client = boto3.client('s3',region_name = 'us-east-1',aws_access_key_id='AKIAUOXETNFCEWU3SM7L',aws_secret_access_key='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')
    client.create_bucket(Bucket = 'boto3')

class analyzeData():
    def getData():
        data = []

        id = 0
        name = ""
        edad = 0
        genero = "Hombre"
        casado = True
        dependientes = 0
        ingresoM = 0.0
        ingresoCoaplicante = 0.0
        historial = 0
        tipoPropiedad = "Urbana"
        amonto_req = 0.0
        debt_to_income_ratio = 0.0 #(gastos del hogar + gastos obligatorios)/ingreso mensual
        risk_score = 0.0 #cartera de préstamos con 30 días de vencimiento o más / Total loan portfolio
        employment_length = 0.0

    def algorithmDev():
        pass

new = connection()

