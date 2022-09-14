var employeeDetails = [
    {
        name : "Maths-Staff",
        chiefName : "1yr Faculty"
    },
    {
        name : "Physics-Staff",
        chiefName : "1yr Faculty"
    },
    {
        name : "Chemistry-Staff",
        chiefName : "2yr Faculty"
    },
    {
        name : "Maths1-Staff",
        chiefName : "2yr Faculty"
    },
    {
        name : "Biology-Staff",
        chiefName : "2yr Faculty"
    },
    {
        name : "Chemistry1-Staff",
        chiefName : "3yr Faculty"
    },
    {
        name : "Maths2-Staff",
        chiefName : "3yr Faculty"
    },
    {
        name : "Physics1-Staff",
        chiefName : "3yr Faculty"
    },
    {
        name : "1yr Faculty",
        chiefName : "Maths-HOD"
    },
    {
        name : "2yr Faculty",
        chiefName : "Physics-HOD"
    },
    {
        name : "3yr Faculty",
        chiefName : "Chemistry-HOD"
    },
    {
        name : "Maths-HOD",
        chiefName : "Vice Principal"
    },
    {
        name : "Physics-HOD",
        chiefName : "Vice Principal"
    },
    {
        name : "Chemistry-HOD",
        chiefName : "Vice Principal"
    },
    {
        name : "Vice Principal",
        chiefName : "Principal"
    }
];

var founder:string = "Principal";
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
    name : founder,
    children : generateTreeModel(founder)
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
        if(object.chiefName === searchValue){
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