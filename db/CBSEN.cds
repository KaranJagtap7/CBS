namespace CBSNM;

entity Employee{
    key EMPID:String(30);
        EMPNM:String(100);
        PHONE:Integer;
        CITY:String(20);
}

@cds.persistence.exists
@cds.persistence.calcview
entity EMPVIEW{
    key EMPID:String(30);
        EMPNM:String(100);
        PHONE:Integer;
        CITY:String(20);
}

@cds.persistence.exists
@cds.persistence.calcview
entity ADDSVIEW{
    key EMPID:String(30);
        ADDRS:String(100);
} 