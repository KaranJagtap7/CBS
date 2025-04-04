const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {


    this.on('fun_CreateEmployee', async (req) => {
        try {
            console.log("Request Data:", req.data); // Log the request data 
               
            tx = cds.transaction(req);

            var data = JSON.parse(req.data.oPayload)
            // const { Employee } = this.entities

            //Check for undefined or invalid values 
            if (!data.EmpDetails.EMPID || !data.EmpDetails.EMPNM || !data.EmpDetails.PHONE || !data.EmpDetails.CITY) {
                throw new Error('Missing required fields (Employee id, Name, Phone no and City).');
            }

            let result = await tx.run('Call "CreateEm"(?,?,?,?,?)',[data.EmpDetails.EMPID,data.EmpDetails.EMPNM,data.EmpDetails.PHONE,data.EmpDetails.CITY]);
            let result2 = await tx.run('Call "CreateAddress"(?,?)',[data.EmpAddress.EMPID,data.EmpAddress.ADDRS]);

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

    // this.on('fun_CreateAddress', async (req) => {
    //     try {
    //         console.log("Request Data:", req.data); // Log the request data 
               
    //         tx = cds.transaction(req);

    //         var data = JSON.parse(req.data.oPayload)

    //         //Check for undefined or invalid values 
    //         if (!data.EMPID || !data.ADDRS) {
    //             throw new Error('Missing required fields (Employee id, address).');
    //         }

    //         let result = await tx.run('Call "CreateAddress"(?,?)',[data.EMPID,data.ADDRS]);

    //         return 'Employee Address Added Successfully.';
            
    //     } catch (error) {

    //         console.error(error)
    //         return error.toString()
    //     }
    // })

}) 