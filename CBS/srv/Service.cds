using { CBSNM as db }  from '../db/CBSEN';

service MyService {


    // Get service
    @readonly
    entity EmployeeDetails as projection on db.Employee;

    // Post service
    entity Emp as projection on db.Employee;

    // Get service using calcalution view
    entity EMPVIEW as projection on db.EMPVIEW;
    entity ADDSVIEW as projection on db.ADDSVIEW;

    // post service employee
    function fun_CreateEmployee(oPayload:String) returns String;

    // post service adress
    function fun_CreateAddress(oPayload:String) returns String;

}
