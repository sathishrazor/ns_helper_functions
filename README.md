# NS DEV Guidelines
### Coding conventions are documented rules for teams to follow Coding conventions secure quality:
- Improve code readability
- Make code maintenance easier
## Contents
- Naming and declaration rules for variables and functions.
- Rules for the use of white space, indentation, and comments.
- Programming practices and principles.

### Functions
- Functions should always do one thing. If the logic involves many actions at once. Please separate it into separate function
- Function should not be more than 30-40 lines of code. Create a separate function if the current - - function excees the 40 lines of code.
- Function parameters should not be more that 3.

### Declaration of variables and constants 
- Variable and function names written as camelCase
- Global variables written in UPPERCASE
- Constants (like PI) written in UPPERCASE

##### GOOD 
```sh
const APPROVED = 3
var status = newRecord.getValue("approvalstatus");
if(status == APPROVED)
{
    //do something
}
```
##### BAD
```sh
var status = newRecord.getValue("approvalstatus");
if(status == 2)
{
    //do something
}
```

### Loops and Recursion
- Avoid nested loops at all cost
- Always start the outer loop with i and j, k for the inner loops
- Avoid Search and Search.lookup inside the loop instead search it using global search
##### GOOD (Avoids the search inside the loop)
#
```sh
var count = newRecord.getLineCount("item");
var items = getLines(newRecord, "item", ["displayname", "itemid"])
var itemSearch = {
    type: "item",
    filters: [["internalid", "anyof", items]],
    columns: ["displayname", "itemid"]
}
var res = getSearch(itemSearch.type, itemSearch.filters, itemSearch.columns);

for (var i = 0; i < count; i++) {
    var item = newRecord.getSublistValue({
        sublistId: "item",
        fieldId: "item",
        line: i
    });
    var itemresult = res.filter(function (c) {
        if (c.id == item)
            return c;
    })
    if (itemresult.length > 0) {
        //do something
    }
}
```

##### BAD (running the search inside the loop)
#
```sh
var count = newRecord.getLineCount("item");
for(var i=0; i<count; i++)
{
    var item = newRecord.getSublistValue({
        sublistId:"item",
        fieldId:"item",
        line:i
    });
  var itemSearch = search.create({
  type:"item",
  filters:[["internalid","anyof",item]].
  columns:["displayname","itemid"]
  })
  var res = itemSearch.run().getRange({start:0,end:1})
  if(res.length>0){
      //do something
  }
}
```
