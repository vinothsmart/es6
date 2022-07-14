const xmlData = `<?xml version="1.0"?>
<testsuites failures="0" errors="0" tests="7">
  <testsuite name="Root Suite" timestamp="2022-07-12T13:10:55" tests="0" file="cypress/integration/carrierTest/details/audit/hideandUnhideAuditColumns.js" time="0.0000" failures="0"/>
  <testsuite name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095]" timestamp="2022-07-12T13:10:55" tests="6" time="306.4580" failures="0">
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8090 Hide and Unhide Type from Audit" time="49.4480" classname="TA-8090 Hide and Unhide Type from Audit"/>
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8091 Hide and Unhide Change from Audit" time="51.1700" classname="TA-8091 Hide and Unhide Change from Audit"/>
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8092 Hide and Unhide New Value from Audit" time="51.1310" classname="TA-8092 Hide and Unhide New Value from Audit"/>
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8093 Hide and Unhide Date/Time from Audit" time="48.3730" classname="TA-8093 Hide and Unhide Date/Time from Audit"/>
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8094 Hide and Unhide By from Audit" time="49.8400" classname="TA-8094 Hide and Unhide By from Audit"/>
    <testcase name="Hide and Unhide Audit Columns[TA-8090,TA-8091,TA-8092,TA-8093,TA-8094,TA-8095] TA-8095 Hide and Unhide Description from Audit" time="49.6950" classname="TA-8095 Hide and Unhide Description from Audit"/>
  </testsuite>
  <testsuite name="Root Suite" timestamp="2022-07-12T13:09:54" tests="0" file="cypress/integration/carrierTest/details/audit/expandAuditGridInCarrier.js" time="0.0000" failures="0"/>
  <testsuite name="TA-8096" timestamp="2022-07-12T13:09:54" tests="1" time="52.5450" failures="0">
    <testcase name="TA-8096 TA8096  expand Audit Grid In Carrier" time="46.1400" classname="TA8096  expand Audit Grid In Carrier"/>
  </testsuite>
</testsuites>`;

const xmlToJson = require("xml-to-json");
const json = xmlToJson.parse(xmlData);
console.log(JSON.stringify(json, null, 2));

https://davidwalsh.name/convert-xml-json#:~:text=If%20you'd%20like%20the,XML%20and%20use%20JSON%20instead

https://gist.github.com/chinchang/8106a82c56ad007e27b1
