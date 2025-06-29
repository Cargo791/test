
//alert("hello")
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("prices");
    container.innerHTML = `
      <p>🪙 Bitcoin: $${data.bitcoin.usd}</p>
      <p>🪙 Ethereum: $${data.ethereum.usd}</p>
    `;
  })
  .catch(error => {
    console.error("Error fetching prices:", error);
  });