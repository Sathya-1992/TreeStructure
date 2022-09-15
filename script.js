var employeeDetails = [
    {
        name: "Santhosh",
        chiefName: "Damu"
    },
    {
        name: "Sathya",
        chiefName: "Damu"
    },
    {
        name: "Muppudathi",
        chiefName: "Damu"
    },
    {
        name: "Ganesh",
        chiefName: "Raghul"
    },
    {
        name: "Subha",
        chiefName: "Vasu"
    },
    {
        name: "Hari",
        chiefName: "Vasu"
    },
    {
        name: "Vishnu",
        chiefName: "Vasu"
    },
    {
        name: "Vasu",
        chiefName: "Siva"
    },
    {
        name: "Damu",
        chiefName: "Shibu Alexis"
    },
    {
        name: "Siva",
        chiefName: "Shibu Alexis"
    },
    {
        name: "Raghul",
        chiefName: "Shibu Alexis"
    },
    {
        name: "Mani",
        chiefName: "Sathish"
    },
    {
        name: "Venkatesh",
        chiefName: "Damu"
    },
    {
        name: "Andrews",
        chiefName: "Siva"
    },
    {
        name: "Sathish",
        chiefName: "Shibu Alexis"
    }
];
var Manager = "Shibu Alexis";
var continentElement = document.querySelector(".container");
var treeModel = [];
/**
 * To generate Tree structure in json.
 */
treeModel.push({
    name: Manager,
    children: generateTreeModel(Manager)
});
console.log(treeModel);
/**
 *
 * @param searchValue to get children of given value
 * @returns treelist (name,children) of given parent value
 */
function generateTreeModel(searchValue) {
    var treeList = [];
    employeeDetails.forEach(function (object) {
        if (object.chiefName === searchValue) {
            var childrenArray = generateTreeModel(object.name);
            if (childrenArray.length === 0) {
                treeList.push({
                    name: object.name
                });
            }
            else {
                treeList.push({
                    name: object.name,
                    children: childrenArray
                });
            }
        }
    });
    return treeList;
}
var treeElement = "<ul>";
/**
 *
 * @param tree which is used to show the tree structure
 * @returns the string of tree structured elements
 */
function displayTreeModel(tree) {
    tree.forEach(function (data) {
        treeElement += "<li><div>".concat(data.name, "</div>");
        if (data.hasOwnProperty("children")) {
            treeElement += "<ul>";
            displayTreeModel(data.children);
        }
        else {
            treeElement += "</li>";
        }
    });
    treeElement += "</ul></li>";
    return treeElement;
}
var treeHtml = displayTreeModel(treeModel) + "</ul>";
continentElement.insertAdjacentHTML("afterbegin", treeHtml);
