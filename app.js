let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', ".es" ,".cl"]

function generateDomain (arr,arr2,arr3){
    let newDomain = ""
    for (let i=0;i<pronoun.length;i++){
        for (let j=0;j<adj.length;j++){
            for (let k=0;k<noun.length;k++){
               for (let l=0;l<ext.length;l++){
                newDomain += pronoun[i] + adj[j] + noun[k]+ ext[l] + "\n"
               }
            }
        }
    }
    return newDomain
}
console.log(generateDomain(pronoun,adj,noun))