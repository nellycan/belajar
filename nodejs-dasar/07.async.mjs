function samplePromise() {
  return Promise.resolve("Nelly");
}

const name = await samplePromise();
console.info(name);

// note: tidak error karena by default modules adalah async
