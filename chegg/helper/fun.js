const fun = (arr1,arr2,i=0,resArray=[],obj={
    "questionNumber" :'',
    "question":'',
    "answer":'',
}) => {
if(i === arr1.length) return resArray;
obj["questionNumber"] = i;
obj["question"] = arr1[i];
obj["answer"] = arr2[i];
resArray.push(obj);
return fun (arr1,arr2,i+1,resArray,obj={
    questionNumber :'',
    question:'',
    answer:'',
})
};

console.log(fun (["madhu","sudhan","beesetty"],["answer1","answer2","answer3"]));