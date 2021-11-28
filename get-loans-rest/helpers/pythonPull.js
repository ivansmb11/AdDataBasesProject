// helper for Express execution on python functions

function pythonPull(amountRequested, income, co_applicant_income) {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["AdDataBasesProject/Py/dataAnalyist.py", amountRequested, income, co_applicant_income]);
 } 