function checkCollection(collection){
    return (collection instanceof Array)? collection.slice(): Object.values(collection)
}

function myEach(collection,callback){
    const newCollection = checkCollection(collection)
    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection,callback){
    const newCollection = checkCollection(collection)
    const newArray =[]
    for(let i = 0; i < newCollection.length; i++){
        let result = callback(newCollection[i])
        newArray.push(result)
    }
    return newArray
}

function myReduce(collection,callback,acc){
    let newCollection = checkCollection(collection)
    if(!acc){
        acc =newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for(let i = 0; i < newCollection.length; i++) {
        acc = callback(acc,newCollection[i],newCollection)
    }
    return acc
}

function myFind(collection, callback){
    let newCollection = checkCollection(collection)  
    for(let i = 0; i < newCollection.length; i++){
        if(callback(newCollection[i])){
            return newCollection[i]
            break
        }
    }
}

function myFilter(collection,callback){
    let newCollection = checkCollection(collection)
    let filterResult = []
    for(let i = 0; i < newCollection.length; i++) {
        if(callback(newCollection[i]) === true){
            filterResult.push(newCollection[i])
        }
    }
    return filterResult
}

function mySize(collection){
    let newCollection = checkCollection(collection)
    return newCollection.length
}

function myFirst(collection,n){
    let newCollection = checkCollection(collection)
    if(Number.isInteger(n) === true ){
        return newCollection.slice(0,n) 
    } else {
        return parseInt(newCollection.slice(0,1))
    }
}

function myLast(collection,n){
    let newCollection = checkCollection(collection)
    if(Number.isInteger(n) === true ){
        return newCollection.slice(-n) 
    } else {
        return parseInt(newCollection.slice(-1))
    }
}

function myKeys(obj){
    const newArray = []
    for(let key in obj){
        newArray.push(key)
    }
    return newArray
}

function myValues(obj){
    const newArray =[]
    for(let value in obj){
        if(Object.hasOwnProperty.call(obj,value)){
            let val = obj[value]
            newArray.push(val)
        }
    }
    return newArray
}