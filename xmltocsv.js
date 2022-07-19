//sample xml data:
const sampleXmlData = `
<root>
    <item>
        <name>John</name>
        <age>30</age>
        <cars>
            <car>
                <name>Ford</name>
                <models>
                    <model>Fiesta</model>
                    <model>Focus</model>
                    <model>Mustang</model>
                </models>
            </car>
            <car>
                <name>BMW</name>
                <models>
                    <model>320</model>
                    <model>X3</model>
                    <model>X5</model>
                </models>
            </car>
            <car>
                <name>Fiat</name>
                <models>
                    <model>500</model>
                    <model>Panda</model>
                </models>
            </car>
        </cars>
    </item>
    <item>
        <name>Pete</name>
        <age>30</age>
        <cars>
            <car>
                <name>Ford</name>
                <models>
                    <model>Mondeo</model>
                    <model>Mustang</model>
                </models>
            </car>
        </cars>
    </item>
</root>
`;

const xmlToArray = (xml) => {
  const array = [];
  const rows = xml.getElementsByTagName("item");
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const item = {};
    const cells = row.getElementsByTagName("*");
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      item[cell.tagName] = cell.textContent;
    }
    array.push(item);
  }
  return array;
};
const arrayToCsv = (data) => {
  const csv = [];
  for (let i = 0; i < data.length; i++) {
    const row = [];
    for (const key in data[i]) {
      row.push(data[i][key]);
    }
    csv.push(row.join(","));
  }
  return csv.join("\n");
};
const csv = arrayToCsv(
  xmlToArray(new DOMParser().parseFromString(sampleXmlData, "text/xml"))
);
const donwloadBlob = (content, fileName, contentType) => {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  window.URL.revokeObjectURL(url);
};
donwloadBlob(csv, "xml.csv", "text/csv");
