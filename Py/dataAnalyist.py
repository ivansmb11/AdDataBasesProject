import pandas as pd
import boto3

class analyzeData():
    def getData():
        id = 0
        name = ""
        edad = 0
        genero = "Hombre"
        casado = 0
        dependientes = 0
        ingresoM = 0
        ingresoCoaplicante = 0
        historial = 0
        tipoPropiedad = "Urbana"
        amount_requested = 0.0
        debt_to_income_ratio = 0.0 #(gastos del hogar + gastos obligatorios)/ingreso mensual
        risk_score = 0.0 #cartera de préstamos con 30 días de vencimiento o más / Total loan portfolio
        employment_length = 0

        