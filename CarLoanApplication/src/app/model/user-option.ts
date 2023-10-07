export class UserOption {

    
    public static userOptions:Array<any>=[
        //0th index we have on object that have properties like re,oe,cm,ah
          {
            re: [
                  {label:'Add Enquiry' , path:'addEnquiry'},
                  {label:'View Enquiry' , path :'viewenq'},
                  {label:'Send Enquiry Feedback', path:'sendEnqFeed'},
                  {label:'Apply For Loan', path:'applyloan'},
                  {label:'View Accepted Loans', path:'viewloans'},
                ],
            oe:[
              {label:'Check cibil' , path:'check_cibil'},
              {label:'Verify Documents' , path :'verify_doc'},
         
              ],
          customer:[

                {label:'Apply For Loan' , path:'apply_loan'},
      
                {label:'EMI Calculator' , path :'emical'},
                {label:'Track Status' , path :'track_status'},
                {label:'How to Apply' , path :'how_to_apply'},
                {label:'Overview' , path :'overview'},
                
             ],
             
             cm:[
              {label:'View Loan Applications' , path:'view_loan'},
                {label:'Generate Sanction Letter' , path :'sanction_sendmail'},
                
             ],
             
             ah:[
              {label:'Sanctioned Loan' , path :'sanction_loan'},
                {label:'Desbursement' , path :'disbursement'},
                {label:'Generate Ledger' , path :'generate_ledger'},
                {label:'View Ledger' , path :'view_ledger'},
                {label:'Defaulter List' , path :'defaulter_list'},
              
             ],
             admin:[
              {label:'Add Employee' , path :'add_employee'},
              {label:'View Employee' , path :'view_employee'},
            
             ]
        }
      ]
  

}
