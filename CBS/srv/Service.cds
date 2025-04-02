using { CBSNM as db }  from '../db/CBSEN';

service MyService {


    // Get service
    entity Employee as projection on db.Employee;

    // post service 
    // action fun_CreateEmployee(oPayload:String) returns String; 

    entity InsertEmp as projection on db.Employee;
}
