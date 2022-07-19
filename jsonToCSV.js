//convert json to csv
//sample jsonData
const jsonData = [
  {
    name: "John",
    age: 30,
    cars: [
      {
        name: "Ford",
        models: ["Fiesta", "Focus", "Mustang"],
      },
      {
        name: "BMW",
        models: ["320", "X3", "X5"],
      },
      {
        name: "Fiat",
        models: ["500", "Panda"],
      },
    ],
  },
  {
    name: "Pete",
    age: 30,
    cars: [
      {
        name: "Ford",
        models: ["Mondeo", "Mustang"],
      },
    ],
  },
];

const expectedObject = [
  {
  "FileName":  "FileName",
  "TestCases": "TestCases",
}
,
{
  "FileName":  "cypress/integration/carrierTest/details/audit/hideandUnhideAuditColumns.js",
  "TestCases": "",
},
{
  "FileName":  "",
  "TestCases": "TA-8090 Hide and Unhide Type from Audit",
}
,{
  "FileName":  "",
  "TestCases": "TA-8091 Hide and Unhide Change from Audit",
}
,{
  "FileName":  "",
  "TestCases": "TA-8092 Hide and Unhide New Value from Audit",
}
,{
  "FileName":  "",
  "TestCases": "TA-8093 Hide and Unhide Date/Time from Audit",
}
,{
  "FileName":  "",
  "TestCases": "TA-8094 Hide and Unhide By from Audit",
}
,{
  "FileName":  "",
  "TestCases": "TA-8095 Hide and Unhide Description from Audit",
}
,{
  "FileName":  "cypress/integration/carrierTest/details/audit/expandAuditGridInCarrier.js",
  "TestCases": "",
},
{
  "FileName":  "",
  "TestCases": "TA8096  expand Audit Grid In Carrier",
}
];

const jsonToCsv = (jsonData) => {
  const csv = jsonData.map((row) =>
    Object.keys(row)
      .map((key) => row[key])
      .map((v) => `"${v}"`)
      .join(","),
  ).join("\r\n");
  return csv;
};

console.log(jsonToCsv(jsonData));

//download as csv file
const downloadCsv = (csv) => {
  const csvFile = new Blob([csv], { type: "text/csv" });
  const csvUrl = URL.createObjectURL(csvFile);
  const link = document.createElement("a");
  link.href = csvUrl;
  link.download = "json.csv";
  link.click();
};

console.log("Downloading...");

downloadCsv(jsonToCsv(expectedObject));

console.log("Downloading Completed...");
