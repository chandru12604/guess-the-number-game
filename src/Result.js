import React from 'react';
function Result(props)



{
    const {term, secretNum} = props;
    let result;
if(term)
    {
    if(term>secretNum)
    {
        result="Higher";
    }

    else if(term<secretNum)
    {
      result="Lower";   
    }

    else if(term==secretNum)
    {
      result="Yipee correct ";   
    }

    else{
        result="Enter a valid number";
    }
}
    

    return <h3>You guessed:{result}</h3>
}

export default Result;