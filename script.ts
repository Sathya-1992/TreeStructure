var employeeDetails = [
    {
        name : "Santhosh",
        mentorName : "Damu"
    },
    {
        name : "Sathya",
        mentorName : "Damu"
    },
    {
        name : "Muppudathi",
        mentorName : "Damu"
    },
    {
        name : "Ganesh",
        mentorName : "Raghul"
    },
    {
        name : "Subha",
        mentorName : "Vasu"
    },
    {
        name : "Hari",
        mentorName : "Vasu"
    },
    {
        name : "Vishnu",
        mentorName : "Vasu"
    },
    {
        name : "Vasu",
        mentorName : "Siva"
    },
    {
        name : "Damu",
        mentorName : "Shibu Alexis"
    },
    {
        name : "Siva",
        mentorName : "Shibu Alexis"
    },
    {
        name : "Raghul",
        mentorName : "Shibu Alexis"
    },
    {
        name : "Mani",
        mentorName : "Sathish"
    },
    {
        name : "Venkatesh",
        mentorName : "Damu"
    },
    {
        name : "Andrews",
        mentorName : "Siva"
    },
    {
        name : "Sathish",
        mentorName : "Shibu Alexis"
    }
];

var Manager:string = "Shibu Alexis";
var continentElement:HTMLElement = document.querySelector(".container"); 

type Tree = {
    name:string;
    children:Tree[];
}
var treeModel:Tree[] = [];

/**
 * To generate Tree structure in json.
 */
treeModel.push({
    name : Manager,
    children : generateTreeModel(Manager)
})
console.log(treeModel)
/**
 * 
 * @param searchValue to get children of given value
 * @returns treelist (name,children) of given parent value
 */
function generateTreeModel(searchValue:string):Tree[]{
    var treeList = [];
    employeeDetails.forEach((object) =>{
        if(object.mentorName === searchValue){
            let childrenArray = generateTreeModel(object.name);
            if(childrenArray.length === 0){
                treeList.push({
                    name : object.name
                });
            }
            else{
                treeList.push({
                    name : object.name,
                    children : childrenArray
                });
            }
        }
    })
    return treeList;
}

let treeElement="<ul>";
/**
 * 
 * @param tree which is used to show the tree structure
 * @returns the string of tree structured elements
 */
function displayTreeModel(tree:Tree[]){
    tree.forEach(function(data){
        treeElement += `<li><div>${data.name}</div>`;
        if(data.hasOwnProperty("children")){
            treeElement += "<ul>"
            displayTreeModel(data.children);
        }
        else{
            treeElement += "</li>"
        }
    })
    treeElement +="</ul></li>"
    return treeElement; 
}
let treeHtml = displayTreeModel(treeModel)+"</ul>";
continentElement.insertAdjacentHTML("afterbegin",treeHtml);