function saveFile(url, data) {
  $.ajax({
    method: "POST",
    url: url,
    data: data,
  });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);
