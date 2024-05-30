function samplePromise() {
  return Promise.resolve("Nelly");
}

// const name = await samplePromise();
// console.info(name);

// error: karena di js untuk melakukan kode async butuh fungsi async

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
