using { CBSNM as db }  from '../db/CBSEN';

service MyService {


    // Get service
    entity Employee as projection on db.Employee;

    // Get service using calcalution view
    entity EMPVIEW as projection on db.EMPVIEW;

    // post service 
    // action fun_CreateEmployee(oPayload:String) returns String; kk

    entity InsertEmp as projection on db.Employee;
}
