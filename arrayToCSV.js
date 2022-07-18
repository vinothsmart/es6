const sampleData = [
  ["firstName", "lastName", "email", "phoneNumber"],
  ["John1", "Doe3", "joe1@gmail.com", "1234567890"],
  ["John2", "Doe3", "joe2@gmail.com", "1234567890"],
  ["John3", "Doe3", "joe3@gmail.com", "1234567890"],
];

console.log(sampleData);

const expectedArray = [
  ["FileName", "TestCases"],
  ["cypress/integration/carrierTest/details/audit/hideandUnhideAuditColumns.js" , ""
  ],
  ["", "TA-8090 Hide and Unhide Type from Audit"],
  ["", "TA-8091 Hide and Unhide Change from Audit"],
  ["", "TA-8092 Hide and Unhide New Value from Audit"],
  ["", "TA-8093 Hide and Unhide Date/Time from Audit"],
  ["", "TA-8094 Hide and Unhide By from Audit"],
  ["", "TA-8095 Hide and Unhide Description from Audit"],
  [
    "cypress/integration/carrierTest/details/audit/expandAuditGridInCarrier.js", ""
  ],
  ["", "TA8096  expand Audit Grid In Carrier"],
];

const arrayToCsv = (data) => {
  return data
    .map((row) =>
      row
        .map(String)
        .map((v) => v.replaceAll('"', '""'))
        .map((v) => `"${v}"`)
        .join(","),
    )
    .join("\r\n");
};

//const csv = arrayToCsv(sampleData);
const csv = arrayToCsv(expectedArray);

const donwloadBlob = (content, fileName, contentType) => {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  window.URL.revokeObjectURL(url);
};

donwloadBlob(csv, "array.csv", "text/csv");