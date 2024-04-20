import {Sum} from '../components/Sum'
test("sum of two numbers ",()=>{
    const result=Sum(3,4);
   // we should have sum expectation but it is not necessary
   
    expect(result).toBe(7);
    
})