// not yet

export const downloadDoc = async (code) => {
  const base = "https://disclosure.edinet-fsa.go.jp/api/v1/documents/";
  const url = base + code + "?type=1";
  console.log(url);
  const bin = new Uint8Array(await (await fetch(url)).arrayBuffer());
  //await Deno.writeTextFile("data/" + code + ".json", JSON.stringify(data, null, 2));
  await Deno.writeFile("data/" + code + ".zip", bin);
  //const data = JSON.parse(await Deno.readTextFile("data/" + dt + ".json"));
  //await Deno.writeTextFile("data/documents/" + dt + ".csv", CSV.stringify(data.results));
  console.log(bin.length);
};

await downloadDoc("S100PV26");
