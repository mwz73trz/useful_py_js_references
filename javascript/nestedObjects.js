// deeply nested objects

const teamsObject = {
  "type" : "baseball",
  "data": [
      {
          "id" : "1",
          "name" : "Cleveland Indians",
          "type" : "American League",
          "attributes" : {
              "color" : "red and blue",
              "division" : "Central",
              "arr": ["Kansas City Royals", "Minnesota Twins", "Chicago White Sox"]
          },
      },
      {
          "id" : "2",
          "name" : "Cincinnatti Reds",
          "type" : "National League",
          "attributes" : {
            "color" : "red and black",
            "division" : "Central",
            "arr": ["St. Louis Cardinal", "Pittsburgh Pirates", "Chicago Cubs"]
          }
      },
  ]
}

console.log(teamsObject.data[0].attributes.arr[1])

console.log(teamsObject.data[1].attributes.arr[1])