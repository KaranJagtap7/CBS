const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {


    this.on('fun_CreateEmployee', async (req) => {
        try {
            console.log("Request Data:", req.data); // Log the request data 
               
            tx = cds.transaction(req);

            var data = JSON.parse(req.data.oPayload)
            const { Employee } = this.entities

              // Declare output parameter variable

            //Check for undefined or invalid values 
            if (!data.EMPID || !data.EMPNM || !data.PHONE || !data.CITY) {
                throw new Error('Missing required fields (Employee id, Name, Phone no and City).');
            }

            let result = await tx.run('Call "CreateEm"(?,?,?,?,?)',[data.EMPID,data.EMPNM,data.PHONE,data.CITY]);

            if (result.FLAG === 0) {
                return 'Employee Added Successfully.';
            } else {
                return 'Employee updated Successfully.';
            }
            
        } catch (error) {

            console.error(error)
            return error.toString()
        }
    })

}) 