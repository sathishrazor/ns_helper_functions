function getLines(rec,sublist,cols)
{
    var result = [];
    var lineCount = rec.getLineCount(sublist);
    for(var i=0;i<lineCount;i++)
    {
        var row = {};
        for(var j=0;j<cols.length;j++)
        {
          try{
              row[cols[j]] = rec.getSublistValue({                   
                  fieldId:cols[j],
                  sublistId:sublist,
                  line:i
              })
          }catch(e){
                  log.error("getLines:getSublistValue failed",e)
          }
          try{
              row[cols[j]+"_txt"] = rec.getSublistText({                   
                  fieldId:cols[j],
                  sublistId:sublist,
                  line:i
              })

          }catch(e){
              log.error("getLines:getSublistText failed",e)
          }
           
         
        }

        result.push(row)
    }

    return result;
}