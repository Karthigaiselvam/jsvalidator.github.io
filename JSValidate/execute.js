function emiCalculator(principalAmount,interestRate,tenurePeriod){ 
    
    //alert("call from method");
    let total = ((principalAmount* (interestRate/100))*tenurePeriod)+principalAmount; 
    let emi = total/(tenurePeriod*12);
    
    return emi; 
}

//alert()
var userdefined_method_definition={
    "name":"emiCalculator",
    "args":["principalAmount","interestRate","tenurePeriod"],
    "Exception_handling":true
}
var testCases=[
    {
    "type":testCases, 
    "name":"Test Case 1", 
    "args":{principalAmount:170000,interestRate:12.5,tenurePeriod:3},
    "result":6493.05,
    "result_type":1,
    "mark":2
    },
    
    {
    "type":testCases, 
    "name":"Test Case 2", 
    "args":{principalAmount:121989,interestRate:16,tenurePeriod:2},
    "result":6709.395,  
    "result_type":1,
    "mark":2
    
    },
    
    {
    "type":testCases, 
    "name":"Test Case 3",     
    "args":{principalAmount:3699999,interestRate:8.20,tenurePeriod:10},
    "expectedResult":56116.65,
    "result_type":1,
    "mark":2
    
    }]

    function vlaideta_testcase(testCases,userdefined_method_definition){
    
    testcaseResult=[];
    
    testCases.forEach(testcase => {
        var finalResult;
        //try{
            //  console.log(testcase.args.principalAmount);
            //console.log(userdefined_method_definition.name);
            var methodName=`${userdefined_method_definition.name}`;
            // var arg1=`${userdefined_method_definition.args[0]}`;
            // var arg2=`${userdefined_method_definition.args[1]}`;
            // var arg3=`${userdefined_method_definition.args[2]}`;
            //alert(aname);
            
            //console.log(testcase.args[arg1]);
            var argument=[];
            userdefined_method_definition.args.forEach(arg => {
                var eachArg=`${arg}`;
                //testcase.args[eachArg];
                argument.push(testcase.args[eachArg]);
            });
            
            // var funct=window[methodName];

            // if(typeof funct === "function"){
            //     var result=funct.apply(null, argument);
            //     console.log(result);
            // }
            

            //alert(typeof(userdefined_method_definition.name));
            // var str=userdefined_method_definition.name;
            //finalResult=emiCalculator(testcase.args.principalAmount,testcase.args.interestRate,testcase.args.tenurePeriod/*1,2,xtestcase.args.principalAmount,testcase.args.interestRate,testcase.args.tenurePeriod*/);
            // console.log(finalResult);
           
            //}catch(err){ 
            //finalResult=err.name;
            
       // }
       var result;
        try{
            var funct=window[methodName];

            if(typeof funct === "function"){
                result=funct.apply(null, argument);
                //console.log(result);
            }
            if(result==testcase.expectedResult){
                
            }
        }catch(err){
                result=err.name;
        }
        
        //if(finalResult === testcase.exceptedResult){
            var obj={
                "name":testcase.name,
                // "result":finalResult,
                "case": "Test Case Passed"
            }
    
            testcaseResult.push(obj);
            console.log(testcaseResult);
        //}

        
        
        });
        return testcaseResult

    }
    // console.log(userdefined_method_definition.name);
    // var mname=`${userdefined_method_definition.name}`;
   
    // var functionStr="emiCalculator";
    // console.log(typeof(mname));
    // var argument=[170000, 12.5, 3];
    
    // var funct=window[mname];

    // //alert(typeof funct);
    // var number=funct.apply(null, argument);
    // console.log(number);

   // console.log(testcaseResult);

