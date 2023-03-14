//<Bin-ID>: https://jsonbin.io/app/bins
//<Individual X-Master-Key>: https://jsonbin.io/app/app/api-keys

//JsonBin GET / Read
//------------------
// fetch("https://api.jsonbin.io/v3/b/<Bin-ID>", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Master-Key":
//       "<Individual X-Master-Key>",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//JsonBin PUT / Overrides Existing Data
//-------------------------------------
// fetch("https://api.jsonbin.io/v3/b/<Bin-ID>", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Master-Key":
//       "<Individual X-Master-Key>",
//   },
//   body: JSON.stringify({
//     "name": "Ben",
//     "msg": "name updated",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("https://api.jsonbin.io/v3/b", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Master-Key":
//       "<Individual X-Master-Key>",
//     "X-Bin-Name": "tempBin",
//   },
//   body: JSON.stringify({
//     "name": "Ben Cohen",
//     "birthday": "15/4/1978",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//JsonBin DELETE Bin
// fetch("https://api.jsonbin.io/v3/b/<Bin-ID>", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Master-Key":
//       "<Individual X-Master-Key>",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
